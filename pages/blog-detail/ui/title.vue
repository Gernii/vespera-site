<script setup lang="ts">
import type { BlogPostDetail } from '../configs/types'

const props = defineProps<Omit<BlogPostDetail, 'content'>>()
</script>

<template>
	<h1 class="text-4xl font-semibold">{{ props.title }}</h1>
	<p class="line-clamp-3">
		{{ props.description }}
	</p>
	<p class="text-base-content/50 text-xs" :title="`Published ${props.lastUpdateRaw}`">
		Published {{ props.lastUpdate }}
	</p>
</template>
