import type { Thing, WithContext } from "schema-dts";

export const ldJson = (): WithContext<Thing> => {
	const url = useRequestURL();

	return {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "Vespera Playground",
		description:
			"An interactive online development environment for learning, experimenting, and building with the Vespera programming language.",
		url: url.href,
		applicationCategory: "DevelopmentApplication",
		operatingSystem: "Any",
		// offers: {
		// 	"@type": "Offer",
		// 	price: "0",
		// 	priceCurrency: "USD",
		// 	availability: "https://schema.org/OnlineOnly",
		// },
		provider: {
			"@type": "Organization",
			name: "Vespera Language Team",
			url: url.host,
		},
		// screenshot: "https://vespera.dev/images/playground-screenshot.png",
		featureList: [
			"Live code execution",
			"Syntax highlighting",
			"Error diagnostics",
			// "Code sharing",
			// "Project import/export",
			"Interactive tutorials",
		],
		// softwareHelp: "https://vespera.dev/docs",
		// about: {
		// 	"@type": "SoftwareSourceCode",
		// 	name: "Vespera",
		// 	programmingLanguage: "Vespera",
		// 	description:
		// 		"Vespera is a modern programming language designed for clarity, performance, and developer productivity across web, mobile, and backend applications.",
		// 	codeRepository: GITHUB_REPO_URL,
		// 	runtimePlatform: ["Web Browser", "Native"],
		// 	// license: "https://vespera.dev/license",
		// 	// version: "1.0.0",
		// 	keywords: [
		// 		"Vespera",
		// 		"programming language",
		// 		"web development",
		// 		"functional programming",
		// 		"typed language",
		// 		"cross-platform",
		// 	],
		// },
		// potentialAction: {
		// 	"@type": "UseAction",
		// 	expectsAcceptanceOf: {
		// 		"@type": "Offer",
		// 		description:
		// 			"By using the Vespera Playground, you agree to our Terms of Service.",
		// 	},
		// },
		learningResourceType: "Interactive Resource",
		educationalUse: ["Practice", "Self Assessment", "Training"],
		audience: {
			"@type": "Audience",
			audienceType: "Developers",
		},
		// sameAs: [
		// 	"https://twitter.com/vesperalang",
		// 	"https://github.com/vespera-lang",
		// 	"https://discord.gg/vespera",
		// ],
	};
};
