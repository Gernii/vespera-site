<script setup lang="ts">
import { Button } from '~/shared/ui/actions/button'
import { Input } from '~/shared/ui/data-input/input'
import LucideMenu from '~icons/lucide/menu'
import type { PlaygroundExamples } from '../configs/types'
import LucidePlus from '~icons/lucide/plus'

/**
 * Actions component for managing playground examples
 * Provides UI for selecting, creating, and managing code examples
 */
const examples = defineModel<PlaygroundExamples>('examples')
const selectedExampleName = defineModel<string>('selected-example-name')

/**
 * Component emits definition
 * @emits change-example - When user selects a different example
 * @emits create-new-example - When user initiates creation of new example
 */
const emits = defineEmits<{
	(e: 'change-example', value: string)
	(e: 'create-new-example')
}>()

/**
 * Computed property that transforms examples object into a menu-friendly format
 * @returns Array of example objects with id and name properties
 */
const exampleMenu = computed(() => {
	if (!examples.value) return []

	return Object.entries(examples.value).map(([id, example]) => ({
		id,
		name: example.name
	}))
})

/**
 * Handler for example selection changes
 * @param id - ID of the selected example
 */
const onChangeExample = (id: string) => {
	emits('change-example', id)
}

/**
 * Handler for creating new examples
 */
const onCreateNewExample = () => {
	emits('create-new-example')
}
</script>

<template>
	<div class="flex gap-x-2 px-4">
		<Button
			title="Example"
			icon-only
			:icon="LucideMenu"
			popovertarget="popover-1"
			style="anchor-name: --anchor-1"
		/>
		<ul
			id="popover-1"
			class="dropdown menu rounded-box bg-base-100 w-52 shadow-sm"
			popover
			style="position-anchor: --anchor-1"
		>
			<ClientOnly>
				<li v-for="example in exampleMenu" :key="example.id">
					<button :title="example.name" @click="onChangeExample(example.id)">
						{{ example.name }}
					</button>
				</li>
			</ClientOnly>
			<li></li>
			<li>
				<button
					title="Create new example"
					aria-label="Create new example"
					@click="onCreateNewExample"
				>
					<LucidePlus /> Create new example
				</button>
			</li>
		</ul>
		<Input
			v-model="selectedExampleName"
			placeholder="Please submit playground name"
			type="text"
			class="w-full"
		/>
	</div>
</template>
