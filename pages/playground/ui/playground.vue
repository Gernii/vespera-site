<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
import Editor from './editor.vue'
import { usePlaygroundStore } from '../models/playground'
import Actions from './actions.vue'
import { Output } from './output'

/**
 * Main playground component that provides a split-view interface for code editing and output display
 * Uses the playground store to manage examples and content state
 */
const {
	examples, // Collection of available code examples
	selectedExample, // Currently selected example object
	selectedExampleName, // Name of the currently selected example
	isMobileScreenOuput,
	onChangeExample, // Handler for example selection changes
	onChangeContent, // Handler for content changes in the editor
	onCreateNewExample // Handler for creating new examples
} = usePlaygroundStore()
</script>

<template>
	<div
		class="capitalize-first flex min-h-0 flex-col pt-4 supports-[height:100dvh]:h-[calc(100dvh-var(--spacing-nav-height))]"
	>
		<div class="bg-base-100 flex min-h-0 grow flex-col gap-y-4 pt-4">
			<Actions
				v-model:selected-example-name="selectedExampleName"
				:examples="examples"
				@change-example="onChangeExample"
				@create-new-example="onCreateNewExample"
			/>
			<label class="flex flex-row items-center justify-center gap-x-2 md:hidden">
				<span>Input</span>
				<input v-model="isMobileScreenOuput" type="checkbox" class="toggle toggle-sm" />
				<span>Output</span>
			</label>
			<div class="border-base-content/20 block h-full min-h-0 border-t md:hidden">
				<Editor
					v-if="selectedExample && !isMobileScreenOuput"
					:doc="examples[selectedExample].value"
					@change="onChangeContent"
				/>
				<Output v-if="isMobileScreenOuput" />
			</div>
			<div class="border-base-content/20 hidden h-full min-h-0 border-t md:block">
				<SplitterGroup direction="horizontal">
					<SplitterPanel>
						<Editor
							v-if="selectedExample"
							:doc="examples[selectedExample].value"
							@change="onChangeContent"
						/>
					</SplitterPanel>

					<SplitterResizeHandle class="bg-base-content/20 w-0.5" />

					<SplitterPanel>
						<Output />
					</SplitterPanel>
				</SplitterGroup>
			</div>
		</div>
	</div>
</template>
