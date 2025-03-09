import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { DEFAULT_LANGUAGE } from "./shared/lib/utils/hooks/page-seo/constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	routeRules: {
		"/**": {
			cache: { varies: ["host"] },
		},
	},
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },

	experimental: {
		typedPages: true,
	},

	typescript: {
		strict: false,
	},

	css: ["~/assets/css/main.css"],

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
	modules: ["@nuxt/eslint", "unplugin-icons/nuxt", "@vueuse/nuxt"],
	dir: {
		pages: "routes",
	},
});
