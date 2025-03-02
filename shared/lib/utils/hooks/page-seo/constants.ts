import type { TwitterCard } from "./types";

/**
 * The default description used in SEO metadata.
 * This is a fallback description for pages without a specific description.
 */
export const DEFAULT_DESCRIPTION = "Vespera is a programming language.";

/**
 * The default site name used in SEO metadata.
 * This is appended to page titles if no specific site name is provided.
 */
export const DEFAULT_SITE_NAME = "Vespera";

/**
 * The default Twitter card type used in SEO metadata.
 * This determines the style of the Twitter card when shared.
 */
export const DEFAULT_TWITTER_CARD: TwitterCard = "summary";

/**
 * The default language code used in SEO metadata.
 * This specifies the language of the content for SEO purposes.
 */
export const DEFAULT_LANGUAGE = "en";
