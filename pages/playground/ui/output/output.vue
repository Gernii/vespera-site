<script setup lang="ts">
import { OutputType } from '../../configs/constants'
import Ast from './ast.vue'
import Result from './result.vue'
import Tablist from './tablist.vue'

const activeOutput = ref(OutputType.Result)
</script>

<template>
	<Tablist v-model:active-output="activeOutput" />

	<div :class="{ hidden: activeOutput !== OutputType.Result }">
		<Result />
	</div>
	<div :class="{ hidden: activeOutput !== OutputType.Ast }">
		<Ast />
	</div>
</template>
