import type { BlogContent } from "~/shared/blog-contents/types";

export interface BlogContentDetails
	extends Omit<BlogContent, "lastUpdate" | "content"> {
	id: string;
	lastUpdate: string;
	lastUpdateRaw: string;
}
