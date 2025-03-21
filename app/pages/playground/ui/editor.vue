<script setup lang="ts">
import { ref } from 'vue'
import { createExtensions } from '../lib/codemirror'
import { EditorState } from '@codemirror/state'
import type { ViewUpdate } from '@codemirror/view'
import { EditorView } from '@codemirror/view'

/**
 * CodeMirror-based editor component for code editing
 * @prop doc - Two-way binding for the editor's content
 * @emits change - Emitted when editor content changes
 */

const doc = defineModel<string>('doc')

// References to the editor DOM element and CodeMirror view instance
const editorRef = useTemplateRef('editor')
const editorViewRef = ref<EditorView>()

/**
 * Component emits definition
 * @emits change - Emits updated editor content
 */
const emits = defineEmits<{
	(e: 'change', value: string)
}>()

/**
 * Initialize CodeMirror editor on component mount
 * Sets up the editor with initial content and change listeners
 */
onMounted(() => {
	// Set up change listener to emit content updates
	const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
		if (vu.docChanged) {
			const doc = vu.state.doc
			const value = doc.toString()
			emits('change', value)
		}
	})

	// Configuration object for the editor state, including the document content and extensions.
	const config = {
		doc: doc.value, // Set the initial document content.
		extensions: [...createExtensions(), updateListener] // Apply the extensions to the editor.
	}
	// Create a new editor state with the specified configuration.
	const stateCurrent = EditorState.create(config)
	// Initialize the EditorView with the created state and attach it to the DOM element.
	editorViewRef.value = new EditorView({
		state: stateCurrent, // Set the current state of the editor.
		parent: editorRef.value // Attach the editor to the specified DOM element.
	})
})

/**
 * Cleanup editor instance on component unmount
 */
onUnmounted(() => {
	editorViewRef.value?.destroy() // Destroy the editor view if it exists.
})
</script>
<template>
	<div ref="editor" class="h-full w-full" />
</template>

<style>
.cm-editor {
	height: 100%;
}
</style>
