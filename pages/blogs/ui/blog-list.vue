<script setup lang="ts">
import BlogDetails from './blog-details.vue'
import type { BlogContentDetails } from '../configs/types'
import { format } from 'date-fns'
import { blogContents } from '~/shared/blog-contents'

/**
 * Transforms the blog contents into an array of BlogContentDetails.
 * Maps each blog entry with formatted dates and required properties.
 */
const blogs = Object.entries(blogContents).map(([id, content]): BlogContentDetails => {
	return {
		// Unique identifier for the blog post
		id,
		// Format the last update date in a readable format (e.g., "15 Mar, 2024")
		lastUpdate: format(content.lastUpdate, 'dd MMM, yyyy'),
		// Format the last update date in a sortable format (e.g., "03/15/2024")
		lastUpdateRaw: format(content.lastUpdate, 'MM/dd/yyyy'),
		// Blog post title from content
		title: content.title,
		// Blog post description from content
		description: content.description,
		// Optional author name
		author: content.author,
		// Optional author URL
		authorUrl: content.authorUrl
	}
})
</script>

<template>
	<ul class="space-y-8">
		<li v-for="blog in blogs" :key="blog.id">
			<BlogDetails v-bind="blog" />
		</li>
	</ul>
</template>
