<script setup lang="ts">
import BlogDetail from './blog-detail.vue'
import type { BlogPostDetail } from '../configs/types'
import { format } from 'date-fns'
import { blogPosts } from '~/shared/blog-posts'

/**
 * Transforms the blog contents into an array of BlogPostDetail.
 * Maps each blog entry with formatted dates and required properties.
 */
const blogs = Object.entries(blogPosts).map(([id, post]): BlogPostDetail => {
	return {
		// Unique identifier for the blog post
		id,
		// Format the last update date in a readable format (e.g., "15 Mar, 2024")
		lastUpdate: format(post.lastUpdate, 'dd MMM, yyyy'),
		// Format the last update date in a sortable format (e.g., "03/15/2024")
		lastUpdateRaw: format(post.lastUpdate, 'MM/dd/yyyy'),
		// Blog post title from post
		title: post.title,
		// Blog post description from post
		description: post.description,
		// Optional author name
		author: post.author,
		// Optional author URL
		authorUrl: post.authorUrl
	}
})
</script>

<template>
	<ul class="space-y-8">
		<li v-for="blog in blogs" :key="blog.id">
			<BlogDetail v-bind="blog" />
		</li>
	</ul>
</template>
