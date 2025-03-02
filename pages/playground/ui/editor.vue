<script setup lang="ts">
import { ref } from 'vue'
import { createExtensions } from '../lib/codemirror'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'

const doc = ref('')

const editorRef = useTemplateRef('editor')
const editorViewRef = ref<EditorView>()

onMounted(() => {
	// Configuration object for the editor state, including the document content and extensions.
	const config = {
		doc: doc.value, // Set the initial document content.
		extensions: [...createExtensions()] // Apply the extensions to the editor.
	}
	// Create a new editor state with the specified configuration.
	const stateCurrent = EditorState.create(config)
	// Initialize the EditorView with the created state and attach it to the DOM element.
	editorViewRef.value = new EditorView({
		state: stateCurrent, // Set the current state of the editor.
		parent: editorRef.value // Attach the editor to the specified DOM element.
	})
})

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
