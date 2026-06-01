import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	// Build-time site-mode flag. Read from .env* (local) or the shell/CI env,
	// inlined as a literal so the home route stays prerenderable. See src/lib/site.js.
	const env = loadEnv(mode, process.cwd(), 'PUBLIC_');
	const siteMode = env.PUBLIC_SITE_MODE || process.env.PUBLIC_SITE_MODE || 'coming_soon';

	return {
		plugins: [sveltekit()],
		define: {
			'import.meta.env.PUBLIC_SITE_MODE': JSON.stringify(siteMode)
		}
	};
});
