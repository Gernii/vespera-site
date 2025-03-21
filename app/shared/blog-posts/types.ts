/**
 * Interface representing the structure of a blog post content.
 */
export interface BlogPost {
	/**
	 * The title of the blog post.
	 */
	title: string;

	/**
	 * Async function that returns the MDC (Markdown Component) content of the blog post.
	 */
	content: () => Promise<typeof import("*.mdc")>;

	/**
	 * A brief description or summary of the blog post.
	 */
	description: string;

	/**
	 * The date when the blog post was last updated.
	 * Should be in a string format.
	 */
	lastUpdate: string;

	/**
	 * The name of the blog post author.
	 * Optional field.
	 */
	author?: string;

	/**
	 * URL to the author's profile or website.
	 * Optional field.
	 */
	authorUrl?: string;
}
