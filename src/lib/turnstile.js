// Cloudflare Turnstile client helper for the Vendr static site.
//
// The SITE key is public and read from env (PUBLIC_TURNSTILE_SITE_KEY), never
// hardcoded. Loads the Turnstile script once, renders an explicit widget, hands
// back the token, and posts the verified payload to the vendr-subscribe edge
// function (the token is verified there, server-side, before the insert).

const SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;
const FN_URL = `${import.meta.env.PUBLIC_SUPABASE_URL}/functions/v1/vendr-subscribe`;
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';

let scriptLoading = null;
function loadScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptLoading) return scriptLoading;
  scriptLoading = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load the verification widget.'));
    document.head.appendChild(s);
  });
  return scriptLoading;
}

/** True when a site key is configured. */
export function turnstileConfigured() {
  return !!SITE_KEY;
}

/** Render a widget into `el`. Returns the widget id (for reset). */
export async function renderTurnstile(el, onToken, onReset) {
  if (!SITE_KEY) return null;
  await loadScript();
  const ts = window.turnstile;
  if (!ts) return null;
  return ts.render(el, {
    sitekey: SITE_KEY,
    callback: onToken,
    'expired-callback': () => onReset && onReset(),
    'error-callback': () => onReset && onReset(),
  });
}

export function resetTurnstile(id) {
  if (window.turnstile && id) window.turnstile.reset(id);
}

/** POST the subscribe payload to the vendr-subscribe edge function. Treats a
 *  duplicate as success, matching the previous behaviour. */
export async function submitSubscribe(email, source, turnstileToken) {
  try {
    const res = await fetch(FN_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, source, turnstileToken }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) return { ok: false, error: json.error || `Request failed (${res.status}).` };
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error. Please try again.' };
  }
}
