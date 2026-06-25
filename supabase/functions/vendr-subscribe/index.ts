// POST /functions/v1/vendr-subscribe
// Verified write path for the Vendr coming-soon email capture. The browser sends
// { email, source, turnstileToken }; this function verifies the Turnstile token
// server-side and only then inserts into subscribers using the service role. Once
// anon INSERT is revoked on subscribers (see
// supabase/revoke-anon-insert-subscribers.sql), this is the only insert path.
//
// verify_jwt is OFF: the caller is an anonymous public form; the gate is Turnstile,
// not a Supabase JWT. Deploy with --no-verify-jwt.
//
// Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (auto-injected); TURNSTILE_SECRET_KEY
// (set via supabase secrets). A duplicate email is treated as success, matching the
// previous client behaviour.

import { createClient } from 'npm:@supabase/supabase-js@2.45.4';
import { handleCors, corsHeaders } from '../_shared/cors.ts';
import { verifyTurnstile } from '../_shared/turnstile.ts';

const url = Deno.env.get('SUPABASE_URL');
const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
if (!url || !serviceKey) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
const admin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
});

function clientIp(req) {
  const fwd = req.headers.get('x-forwarded-for') ?? '';
  return fwd.split(',')[0]?.trim() || null;
}
function json(req, body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...corsHeaders(req) },
  });
}

Deno.serve(async (req) => {
  const pre = handleCors(req);
  if (pre) return pre;
  if (req.method !== 'POST') return json(req, { ok: false, error: 'Method not allowed.' }, 405);

  let payload;
  try { payload = await req.json(); } catch { return json(req, { ok: false, error: 'Invalid JSON body.' }, 400); }

  const token = typeof payload.turnstileToken === 'string' ? payload.turnstileToken : '';
  const v = await verifyTurnstile(token, clientIp(req));
  if (!v.ok) {
    console.warn('[vendr-subscribe] turnstile rejected:', v.reason);
    return json(req, { ok: false, error: 'Could not verify you are human. Please retry.' }, 403);
  }

  const email = (typeof payload.email === 'string' ? payload.email : '').trim();
  const source = (typeof payload.source === 'string' ? payload.source : 'coming_soon').trim().slice(0, 64);

  // The subscribers CHECK constraint (email format/length) remains as defense in depth.
  const { error } = await admin.from('subscribers').insert({ email, source });
  if (error && error.code !== '23505') {
    console.error('[vendr-subscribe] insert failed:', error);
    return json(req, { ok: false, error: 'Could not subscribe.' }, 500);
  }
  return json(req, { ok: true }, 200);
});
