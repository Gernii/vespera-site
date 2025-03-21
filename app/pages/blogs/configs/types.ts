import type { BlogPost } from "~/shared/blog-posts/types";

export interface BlogPostDetail
	extends Omit<BlogPost, "lastUpdate" | "content"> {
	id: string;
	lastUpdate: string;
	lastUpdateRaw: string;
}
