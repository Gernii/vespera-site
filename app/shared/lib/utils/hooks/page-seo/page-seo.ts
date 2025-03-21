import {
	DEFAULT_DESCRIPTION,
	DEFAULT_LANGUAGE,
	DEFAULT_SITE_NAME,
	DEFAULT_TWITTER_CARD,
} from "./constants";
import { programingLanguagesLdJson } from "./ld-json-programing-language";
import type { UsePageSeoProps } from "./types";

/**
 * Hook to set up SEO metadata for a page.
 *
 * @param {UsePageSeoProps} props - Properties for configuring SEO metadata.
 */
export const usePageSeo = (props: UsePageSeoProps) => {
	// Get the current request URL
	const url = useRequestURL();

	// Compute the full title for the page
	const title = computed(() => {
		// If a title is provided in props, append the default site name
		if (props.title) {
			return `${props.title} - ${DEFAULT_SITE_NAME}`;
		}
		// Return the default site name if no title is provided
		return DEFAULT_SITE_NAME;
	});

	// Set up SEO metadata using the provided properties
	useSeoMeta({
		// The title of the page
		title: title.value,
		// The description of the page, defaulting if not provided
		description: props.description || DEFAULT_DESCRIPTION,
		// The type of Twitter card to use, defaulting if not provided
		twitterCard: props.twitterCard || DEFAULT_TWITTER_CARD,
		// The title for Twitter sharing
		twitterTitle: title.value,
		// The description for Twitter sharing
		twitterDescription: props.description,
		// The image URL for Twitter sharing
		twitterImage: props.image,
		// The alt text for the Twitter image
		twitterImageAlt: title.value,
		// The Open Graph title
		ogTitle: title.value,
		// The Open Graph description, defaulting if not provided
		ogDescription: props.description || DEFAULT_DESCRIPTION,
		// The Open Graph image URL
		ogImage: props.image,
		// The Open Graph type
		ogType: "website",
		// The Open Graph URL
		ogUrl: `${url.href}`,
		// The Open Graph site name
		ogSiteName: DEFAULT_SITE_NAME,
		// The Open Graph locale
		ogLocale: DEFAULT_LANGUAGE,
		// Indicates if the web app is capable on Apple devices
		appleMobileWebAppCapable: "yes",
		// The status bar style for Apple devices
		appleMobileWebAppStatusBarStyle: "black",
		// The viewport settings for responsive design
		viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
		// The character set for the page
		charset: "utf-8",
	});

	// Set up additional head elements, such as scripts for structured data
	useHead({
		script: [
			// LD+JSON for programming languages. Required for SEO.
			{
				type: "application/ld+json",
				// biome-ignore lint/style/useNamingConvention: <explanation>
				innerHTML: JSON.stringify(programingLanguagesLdJson),
			},
			// LD+JSON customizations
			...(props.ldJsons
				? props.ldJsons.map((ldJson) => ({
						type: "application/ld+json",
						// biome-ignore lint/style/useNamingConvention: <explanation>
						innerHTML: JSON.stringify(ldJson),
					}))
				: []),
		],
		htmlAttrs: {
			// The language of the HTML document
			lang: DEFAULT_LANGUAGE,
			// The text direction of the HTML document
			dir: "ltr",
		},
	});
};
