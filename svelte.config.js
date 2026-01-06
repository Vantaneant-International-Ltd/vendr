import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			// For GitHub Pages with a custom domain (vendr.ie), use root base.
			base: ''
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
