import type { BlogPost } from "./types";

/**
 * Collection of blog posts with their metadata and content
 *
 * Each key represents a unique blog post slug, and the value contains:
 * - title: The display title of the blog post
 * - content: Dynamic import of the MDX content
 * - description: Short summary of the blog post
 * - lastUpdate: Last modification date in YYYY-MM-DD format
 */
export const blogPosts: Record<string, BlogPost> = {
	"hello-vespera": {
		title: "Hello Vespera",
		content: () => import("./posts/hello-vespera.mdc?raw"),
		description: "New friendly Vespera language in neighborhood",
		lastUpdate: "2025-03-13",
	},
};
