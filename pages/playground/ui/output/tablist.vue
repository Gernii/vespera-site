<script setup lang="ts">
import { OutputType } from '../../configs/constants'

/**
 * Tab list component for switching between different output views
 * @prop active-output - Two-way binding for the currently active output type
 */
const activeOutput = defineModel<OutputType>('active-output')

/**
 * Handler for switching between output types
 * @param type - The output type to switch to
 */
const toggleOutputType = (type: OutputType) => {
	activeOutput.value = type
}
</script>

<template>
	<div class="overflow-x-auto">
		<div role="tablist" class="tabs tabs-border flex-nowrap">
			<button
				role="tab"
				class="tab"
				:class="{ 'tab-active': activeOutput === OutputType.Result }"
				:aria-current="activeOutput === OutputType.Result"
				title="Result"
				aria-label="Result"
				@click="toggleOutputType(OutputType.Result)"
			>
				<div class="whitespace-nowrap">Result</div>
			</button>
			<button
				role="tab"
				class="tab"
				:class="{ 'tab-active': activeOutput === OutputType.Ast }"
				:aria-current="activeOutput === OutputType.Ast"
				title="AST output"
				aria-label="AST output"
				@click="toggleOutputType(OutputType.Ast)"
			>
				<div class="whitespace-nowrap">AST output</div>
			</button>
		</div>
	</div>
</template>
