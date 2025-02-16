import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/lib/libs/i18n/messages",
		}),
		Icons({
			compiler: "svelte",
			defaultClass: "size-4 flex-shrink-0",
		}),
		tailwindcss(),
	],
	server: {
		port: 3000,
		host: "0.0.0.0",
	},
});
