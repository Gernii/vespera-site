import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			routes: { exclude: ['<all>', '/sitemap.xml', '/robots.txt'] }
		}),
		alias: {
			'$i18n/*': './src/lib/libs/i18n/messages/*'
		}
	},

	extensions: ['.svelte', '.svx']
};

export default config;
