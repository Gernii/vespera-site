<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
import { Button } from '~/shared/ui/actions/button'
import { Input } from '~/shared/ui/data-input/input'
import LucideMenu from '~icons/lucide/menu'
import { OutputType } from '../configs/constants'
import Editor from './editor.vue'
import OutputResult from './output-result.vue'
import OutputAst from './output-ast.vue'
import OutputTablist from './output-tablist.vue'

const playgroundName = ref<string>('Hello world')

const activeOutput = ref(OutputType.Result)
</script>

<template>
	<div
		class="capitalize-first flex min-h-0 flex-col pt-4 supports-[height:100dvh]:h-[calc(100dvh-var(--spacing-nav-height))]"
	>
		<div class="bg-base-100 flex min-h-0 grow flex-col space-y-4 pt-4">
			<div class="flex gap-x-2 px-4">
				<Button title="Example" icon-only :icon="LucideMenu" />
				<Input
					v-model="playgroundName"
					placeholder="Please submit playground name"
					type="text"
					class="w-full"
				/>
			</div>
			<div class="border-base-content/20 h-full min-h-0 border-t">
				<SplitterGroup direction="horizontal">
					<SplitterPanel>
						<Editor />
					</SplitterPanel>

					<SplitterResizeHandle class="bg-base-content/20 w-0.5" />

					<SplitterPanel>
						<OutputTablist v-model:active-output="activeOutput" />

						<div :class="{ hidden: activeOutput !== OutputType.Result }">
							<OutputResult />
						</div>
						<div :class="{ hidden: activeOutput !== OutputType.Ast }">
							<OutputAst />
						</div>
					</SplitterPanel>
				</SplitterGroup>
			</div>
		</div>
	</div>
</template>
