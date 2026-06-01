// Admin is a client-only app (auth + live data). Don't SSR/crawl it; it still
// emits a static shell that GitHub Pages serves with a 200, then hydrates.
export const ssr = false;
export const prerender = true;
