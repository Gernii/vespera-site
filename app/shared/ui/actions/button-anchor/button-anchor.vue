<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { ButtonAnchorProps } from './types'
import { buttonAnchorClassNameHandler } from './styles'
import { cn } from '~/shared/lib/utils/classname'

const props = defineProps<ButtonAnchorProps>()

const slots = useSlots()

const attrs = useAttrs()

/**
 * Computes the CSS classes for the button based on the props.
 * If the button is unstyled, it returns only the custom class.
 * Otherwise, it combines the button's style classes with any custom class.
 */
const buttonClasses = computed(() => {
	if (props.unstyled) {
		// Return only the custom class if the button is unstyled
		return cn(props.class)
	}

	// Generate button classes based on the props
	const buttonClasses = buttonAnchorClassNameHandler({
		color: props.color,
		variant: props.variant,
		icon: props.iconOnly,
		disabled: props.disabled || props.loading
	})

	// Combine generated classes with any custom class
	return cn(buttonClasses, props.class)
})
</script>

<template>
	<!-- Render an anchor tag if 'href' prop is provided -->
	<a
		v-if="props.href"
		:class="buttonClasses"
		:title="props.title"
		:aria-label="props.title"
		:href="props.href"
		v-bind="attrs"
	>
		<!-- Show loading spinner if 'loading' prop is true -->
		<span v-if="props.loading" class="loading loading-spinner loading-xs" />
		<!-- Show icon if 'icon' prop is provided -->
		<component :is="props.icon" v-else />
		<!-- Show default slot content if provided -->
		<span v-if="slots.default"><slot /></span>
		<!-- Show alternative icon if provided -->
		<component :is="props.altIcon" />
		<!-- Show suffix slot content if provided -->
		<slot name="suffix" />
	</a>
	<!-- Render a NuxtLink if 'href' prop is not provided -->
	<NuxtLink
		v-else
		:to="props.to"
		:class="buttonClasses"
		:title="props.title"
		:aria-label="props.title"
		v-bind="attrs"
	>
		<!-- Show loading spinner if 'loading' prop is true -->
		<span v-if="props.loading" class="loading loading-spinner loading-xs" />
		<!-- Show icon if 'icon' prop is provided -->
		<component :is="props.icon" v-else />
		<!-- Show default slot content if provided -->
		<span v-if="slots.default"><slot /></span>
		<!-- Show alternative icon if provided -->
		<component :is="props.altIcon" />
		<!-- Show suffix slot content if provided -->
		<slot name="suffix" />
	</NuxtLink>
</template>
