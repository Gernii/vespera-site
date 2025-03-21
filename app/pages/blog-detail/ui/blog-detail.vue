<script setup lang="ts">
import { blogPosts } from '~/shared/blog-posts'
import type { BlogPostDetail } from '../configs/types'
import { format } from 'date-fns'
import Title from './title.vue'
import { Container, ContainerInner } from '~/shared/ui/layout/container'

// Get the current route instance for the blog-id route
const route = useRoute('blog-id')

/**
 * Fetches and processes the blog post content based on the route parameter.
 * Returns a Promise that resolves to BlogPostDetail.
 */
const { data } = await useAsyncData(route.path, async (): Promise<BlogPostDetail> => {
	// Get the blog post content using the ID from route params
	const selectedPost = blogPosts[route.params.id as string]

	return {
		// Parse the markdown content into MDC format
		content: await parseMarkdown((await selectedPost.content()).default),
		// Get the blog post description
		description: selectedPost.description,
		// Get the blog post title
		title: selectedPost.title,
		// Format the last update date in a readable format (e.g., "15 Mar, 2024")
		lastUpdate: format(selectedPost.lastUpdate, 'dd MMM, yyyy'),
		// Format the last update date in a sortable format (e.g., "03/15/2024")
		lastUpdateRaw: format(selectedPost.lastUpdate, 'MM/dd/yyyy')
	}
})
</script>

<template>
	<Container>
		<ContainerInner>
			<div class="py-16">
				<!-- Title component with blog post metadata -->
				<Title
					:last-update="data.lastUpdate"
					:title="data.title"
					:description="data.description"
					:author="data.author"
					:author-url="data.authorUrl"
					:last-update-raw="data.lastUpdateRaw"
				/>
			</div>
			<!-- Markdown content renderer with prose styling -->
			<MDCRenderer :body="data.content.body" :data="data.content.data" class="prose" />
		</ContainerInner>
	</Container>
</template>
