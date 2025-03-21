<script setup lang="ts">
import { cn } from '~/shared/lib/utils/classname'
import { containerInnerClassNameHandler } from './styles'
import type { ContainerInnerProps } from './types'
import { computed } from 'vue'

const props = defineProps<ContainerInnerProps>()

/**
 * Computes the CSS classes for the container based on the props.
 * It combines the container's style classes with any custom class.
 */
const containerInnerClasses = computed(() => {
	return cn(
		containerInnerClassNameHandler({
			size: props.size,
			padding: props.padding
		}),
		props.class
	)
})
</script>

<template>
	<div :class="containerInnerClasses">
		<slot />
	</div>
</template>
