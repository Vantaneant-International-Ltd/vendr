// ============================================================================
// VENDR — site-mode feature flag (build-time)
//
// The site is statically prerendered (adapter-static → GitHub Pages), so there
// is no per-request runtime. Mode is resolved at BUILD time and inlined by Vite
// (`define` in vite.config.js reads PUBLIC_SITE_MODE from the env / .env file).
//
//   PUBLIC_SITE_MODE = coming_soon | maintenance | live
//
// Default is `coming_soon` — the Coming Soon page shows publicly behind this
// flag with no env set. To flip a mode: set the var (locally in `.env`, or in
// the GitHub Actions build step) and redeploy (~1–2 min). Inlining keeps the
// home route prerenderable (a dynamic env read would disable prerendering).
// ============================================================================

export const SITE_MODES = /** @type {const} */ (['coming_soon', 'maintenance', 'live']);

const DEFAULT_MODE = 'coming_soon';

/** @returns {'coming_soon'|'maintenance'|'live'} */
export function siteMode() {
	// Replaced with a string literal at build time by Vite `define`.
	const m = import.meta.env.PUBLIC_SITE_MODE;
	return SITE_MODES.includes(/** @type {any} */ (m)) ? /** @type {any} */ (m) : DEFAULT_MODE;
}
