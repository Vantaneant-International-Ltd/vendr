import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const base = dev ? '' : process.env.BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
