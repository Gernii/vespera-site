import type { Thing, WithContext } from "schema-dts";
import { GITHUB_REPO_URL } from "~/shared/configs/constants";

export const programingLanguagesLdJson: WithContext<Thing> = {
	"@context": "https://schema.org",
	"@type": "SoftwareSourceCode",
	name: "Vespera",
	// description:
	// 	"JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
	programmingLanguage: "Vespera",
	// version: "ES2022",
	codeRepository: GITHUB_REPO_URL,
	// dateCreated: "1995-12-04",
	// license:
	// 	"https://www.ecma-international.org/publications-and-standards/ecma-262/",
	author: {
		"@type": "Person",
		name: "Willie_Le",
	},
	contributor: [
		{
			"@type": "Person",
			name: "Gernii_Le",
		},
	],
	// about: [
	// 	{
	// 		"@type": "Thing",
	// 		name: "Embeded",
	// 	},
	// 	{
	// 		"@type": "Thing",
	// 		name: "Front-end Development",
	// 	},
	// 	{
	// 		"@type": "Thing",
	// 		name: "Server-side Development",
	// 	},
	// ],
	// sameAs: [
	// 	"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	// 	"https://en.wikipedia.org/wiki/JavaScript",
	// ],
};
