<script setup lang="ts">
import type { LinkProps } from './types'
import { linkClassNameHandler } from './styles'
import { cn } from '~/shared/lib/utils/classname'

const props = defineProps<LinkProps>()

const attrs = useAttrs()

/**
 * Computes the CSS classes for the link based on the props.
 * If the link is unstyled, it returns only the custom class.
 * Otherwise, it combines the link's style classes with any custom class.
 */
const linkClasses = computed(() => {
	if (props.unstyled) {
		// Return only the custom class if the link is unstyled
		return cn(props.class)
	}

	// Generate link classes based on the props
	const linkClasses = linkClassNameHandler({
		color: props.color,
		underline: props.underline,
		underlineOnHover: props.underlineOnHover,
		colorChangeOnHover: props.colorChangeOnHover
	})

	// Combine generated classes with any custom class
	return cn(linkClasses, props.class)
})
</script>

<template>
	<a
		v-if="props.href"
		:href="props.href"
		:title="props.title"
		:aria-label="props.title"
		:class="linkClasses"
		v-bind="attrs"
	>
		<slot />
	</a>
	<NuxtLink
		v-else
		:to="props.to"
		:title="props.title"
		:aria-label="props.title"
		:class="linkClasses"
		v-bind="attrs"
	>
		<slot />
	</NuxtLink>
</template>
