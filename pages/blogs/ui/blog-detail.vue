<script setup lang="ts">
import { Link } from '~/shared/ui/navigation/link'
import type { BlogPostDetail } from '../configs/types'

const props = defineProps<BlogPostDetail>()
</script>

<template>
	<div class="pb-2">
		<Link
			:to="{ name: 'blog-id', params: { id: props.id } }"
			class="link hover:text-primary link-hover text-2xl font-semibold"
			:title="`Read the article » ${props.title}`"
		>
			{{ props.title }}
		</Link>
	</div>
	<p class="line-clamp-3">
		{{ props.description }}
	</p>
	<p class="text-base-content/50 text-xs" :title="`Published ${props.lastUpdateRaw}`">
		Published {{ props.lastUpdate }}
	</p>
</template>
