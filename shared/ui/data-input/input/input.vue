<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { InputProps } from './types'
import { inputClassNameHandler } from './styles'
import { cn } from '~/shared/lib/utils/classname'

/**
 * Model for the input component.
 */
const model = defineModel<string>()

/**
 * Props for the input component.
 */
const props = defineProps<InputProps>()

const slots = useSlots()

/**
 * Computed property to determine the CSS classes for the input element.
 * Adjusts classes based on the input type, error state, and presence of prefix/suffix slots.
 */
const inputClasses = computed(() => {
	if (props.type === 'checkbox') {
		return cn(
			inputClassNameHandler({
				size: 'none',
				bordered: false,
				error: !!props.error,
				type: props.type
			}),
			{
				'flex items-center gap-2': slots.prefix || slots.suffix
			},
			props.class
		)
	}
	return cn(
		inputClassNameHandler({
			size: props.size,
			bordered: props.bordered,
			error: !!props.error,
			type: props.type
		}),
		{
			'flex items-center gap-2': slots.prefix || slots.suffix
		},
		props.class
	)
})

/**
 * Computed property to format the placeholder text.
 * Capitalizes the first character of the placeholder if it exists.
 */
const placeholder = computed(() => {
	const firstChar = props.placeholder?.charAt(0)
	if (!firstChar) {
		return
	}
	return firstChar.toUpperCase() + props.placeholder?.slice(1)
})
</script>

<template>
	<fieldset class="w-full" :class="{ fieldset: props.label }">
		<legend v-if="props.label" class="fieldset-legend">
			<span class="capitalize-first inline-block font-semibold">{{ props.label }}</span>
			<span v-if="props.required" class="text-error">*</span>
		</legend>
		<input
			v-model="model"
			:class="inputClasses"
			v-bind="$attrs"
			:disabled="props.disabled"
			:type="props.type"
			:placeholder="placeholder"
		/>
		<div v-if="(props.error && !props.hideError) || props.notice" class="label">
			<span v-if="props.error && !props.hideError" class="label-text-alt text-error">
				{{ props.error }}
			</span>
			<span v-if="!(props.error && !props.hideError)" class="label-text-alt">
				{{ props.notice }}
			</span>
		</div>
	</fieldset>
</template>
