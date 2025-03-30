<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
	/** The URL the navigation item links to
	 *
	 * @requires
	 */
	to: RouteLocationRaw
	title: string
}>()
</script>

<template>
	<NuxtLink :to="props.to" class="link hover:text-primary no-underline">
		{{ props.title }}
	</NuxtLink>
</template>
