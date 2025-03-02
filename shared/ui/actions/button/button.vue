<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { ButtonProps } from './types'
import { buttonClassNameHandler } from './styles'
import { cn } from '~/shared/lib/utils/classname'

const props = defineProps<ButtonProps>()

const slots = useSlots()

const buttonClasses = computed(() => {
	if (props.unstyled) {
		return cn(props.class)
	}

	const buttonClasses = buttonClassNameHandler({
		color: props.color,
		variant: props.variant,
		icon: props.iconOnly,
		disabled: props.disabled || props.loading
	})

	return cn(buttonClasses, props.class)
})
</script>

<template>
	<button
		:class="buttonClasses"
		:disabled="props.disabled || props.loading"
		:title="props.title"
		:aria-label="props.title"
	>
		<span v-if="props.loading" class="loading loading-spinner loading-xs" />
		<component :is="props.icon" v-else />
		<span v-if="slots.default"><slot /></span>
		<component :is="props.altIcon" />
		<slot name="suffix" />
	</button>
</template>
