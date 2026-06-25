import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

// Supabase publishable key + URL are SAFE to embed in the client (RLS protects
// the data). Defaults below keep the build working with no extra CI config;
// override via env (.env or CI) if the project ever changes.
const SUPABASE_URL = 'https://fmmvqlqdhytcxeucdfbj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_rpmSPCHja3L2Uy2_RrxjAA_Cz_NyHB2';
// Cloudflare Turnstile site key (public, safe in the client). The secret key is
// server-only and lives as a Supabase edge-function secret, never here.
const TURNSTILE_SITE_KEY = '0x4AAAAAADrAgdwjUX9NIVP3';

export default defineConfig(({ mode }) => {
	// Build-time values. Read from .env* (local) or the shell/CI env, inlined as
	// literals so routes stay prerenderable. See src/lib/site.js / src/lib/supabase.js.
	const env = loadEnv(mode, process.cwd(), 'PUBLIC_');
	const get = (k, fallback) => env[k] || process.env[k] || fallback;

	return {
		plugins: [sveltekit()],
		define: {
			'import.meta.env.PUBLIC_SITE_MODE': JSON.stringify(get('PUBLIC_SITE_MODE', 'coming_soon')),
			'import.meta.env.PUBLIC_SUPABASE_URL': JSON.stringify(get('PUBLIC_SUPABASE_URL', SUPABASE_URL)),
			'import.meta.env.PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(
				get('PUBLIC_SUPABASE_ANON_KEY', SUPABASE_KEY)
			),
			'import.meta.env.PUBLIC_TURNSTILE_SITE_KEY': JSON.stringify(
				get('PUBLIC_TURNSTILE_SITE_KEY', TURNSTILE_SITE_KEY)
			)
		}
	};
});
