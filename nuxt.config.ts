import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},

	routeRules: {
		"/**": {
			cache: { varies: ["host"] },
		},
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	imports: {
		scan: false,
	},
	experimental: {
		typedPages: true,
	},

	typescript: {
		strict: false,
	},

	vite: {
		plugins: [
			Icons({
				compiler: "vue3",
				defaultClass: "size-4 flex-shrink-0",
			}),

			tailwindcss(),
		],
	},

	devServer: {
		port: 3000,
		host: "0.0.0.0",
	},

	plugins: [],
	modules: [
		"@nuxt/eslint",
		"unplugin-icons/nuxt",
		"@vueuse/nuxt",
		"@nuxtjs/mdc",
	],

	dir: {
		pages: "app/routes",
	},
});
