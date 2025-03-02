<script setup lang="ts">
import { OutputType } from '../configs/constants'

const activeOutput = defineModel<OutputType>('active-output')

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
				@click="toggleOutputType(OutputType.Result)"
			>
				<div class="whitespace-nowrap">Result</div>
			</button>
			<button
				role="tab"
				class="tab"
				:class="{ 'tab-active': activeOutput === OutputType.Ast }"
				:aria-current="activeOutput === OutputType.Ast"
				@click="toggleOutputType(OutputType.Ast)"
			>
				<div class="whitespace-nowrap">AST output</div>
			</button>
		</div>
	</div>
</template>
