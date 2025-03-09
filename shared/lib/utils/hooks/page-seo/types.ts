import type { Thing, WithContext } from "schema-dts";

/**
 * Represents the type of Twitter card to be used in SEO metadata.
 *
 * - `summary`: A small image with a short description.
 * - `summary_large_image`: A large image with a short description.
 * - `app`: A card that represents a mobile application.
 * - `player`: A card that represents a video or audio player.
 */
export type TwitterCard = "summary" | "summary_large_image" | "app" | "player";

/**
 * Properties for configuring SEO metadata for a page.
 */
export interface UsePageSeoProps {
	/** The title of the page. */
	title: string;
	/** A brief description of the page. */
	description?: string;
	/** URL of the image to be used in SEO metadata. */
	image?: string;
	/** Type of Twitter card to be used. */
	twitterCard?: TwitterCard;
	/** Additional structured data in JSON-LD format. */
	ldJsons?: (Thing | WithContext<Thing>)[];
}
