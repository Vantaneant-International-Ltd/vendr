// Browser Supabase client for this static site. The publishable key is public
// by design — Row-Level Security is what protects the data. No service_role here.
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	import.meta.env.PUBLIC_SUPABASE_URL,
	import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
	{
		auth: {
			persistSession: true,
			autoRefreshToken: true,
			detectSessionInUrl: true // completes the magic-link redirect
		}
	}
);

/** Add an email to the waitlist. Treats a duplicate as success. */
export async function subscribe(email, source = 'coming_soon') {
	const { error } = await supabase.from('subscribers').insert({ email: email.trim(), source });
	if (error && error.code !== '23505') return { ok: false, error };
	return { ok: true };
}

/** Is the currently signed-in user an admin? Uses the SECURITY DEFINER RPC. */
export async function isAdmin() {
	const { data, error } = await supabase.rpc('is_admin');
	if (error) return false;
	return data === true;
}

/** Best-effort audit entry. Never blocks the UI. */
export async function logActivity(action, detail = null) {
	const { data } = await supabase.auth.getUser();
	const actor = data?.user?.email ?? null;
	await supabase.from('activity_log').insert({ actor_email: actor, action, detail });
}
