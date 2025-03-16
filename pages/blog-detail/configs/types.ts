import type { MDCParserResult } from "@nuxtjs/mdc";
import type { BlogPost } from "~/shared/blog-posts/types";

/**
 * Interface extending the base BlogPost type with modified properties for blog details.
 * Omits the original 'lastUpdate' and 'content' properties and replaces them with new definitions.
 */
export interface BlogPostDetail
	extends Omit<BlogPost, "lastUpdate" | "content"> {
	/**
	 * Formatted date string for display purposes (e.g., "15 Mar, 2024").
	 */
	lastUpdate: string;

	/**
	 * Raw date string for sorting purposes (e.g., "03/15/2024").
	 */
	lastUpdateRaw: string;

	/**
	 * Parsed MDC (Markdown Component) content result.
	 * Unlike the base BlogContent's content property which is a function,
	 * this is the actual parsed result.
	 */
	content: MDCParserResult;
}
