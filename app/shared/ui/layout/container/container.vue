<script setup lang="ts">
import { computed } from 'vue'
import { containerClassNameHandler } from './styles'
import type { ContainerProps } from './types'
import { cn } from '~/shared/lib/utils/classname'

const props = defineProps<ContainerProps>()

/**
 * Computes the CSS classes for the container based on the props.
 * It combines the container's style classes with any custom class.
 */
const containerClasses = computed(() => {
	return cn(
		containerClassNameHandler({
			padding: props.padding
		}),
		props.class
	)
})
</script>

<template>
	<component :is="props.as || 'section'" :class="containerClasses">
		<slot />
	</component>
</template>
