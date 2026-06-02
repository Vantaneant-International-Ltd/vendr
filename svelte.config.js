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
			entries: ['*'],
			// /hero.jpg is an OPTIONAL cinematic plate — when absent the CSS
			// frame stands in and the client onerror hides the <img>. Don't fail
			// the build over the missing-by-design asset.
			handleHttpError: ({ path, message }) => {
				if (path === '/hero.jpg') return;
				throw new Error(message);
			}
		}
	}
};

export default config;
