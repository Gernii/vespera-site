import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	experimental: {
		typedPages: true
	},

	typescript: {
		strict: false
	},

	css: ['~/assets/css/main.css'],

	vite: {
		plugins: [
			Icons({
				compiler: 'svelte',
				defaultClass: 'size-4 flex-shrink-0'
			}),
			tailwindcss()
		]
	},

	devServer: {
		port: 3000,
		host: '0.0.0.0'
	},

	plugins: [],
	modules: ['@nuxt/eslint'],
	dir: {
		pages: 'routes'
	}
})
