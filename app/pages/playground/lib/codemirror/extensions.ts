import {
	autocompletion,
	closeBrackets,
	closeBracketsKeymap,
	completionKeymap,
} from "@codemirror/autocomplete";
import {
	defaultKeymap,
	history,
	historyKeymap,
	redo,
} from "@codemirror/commands";
import {
	bracketMatching,
	defaultHighlightStyle,
	foldGutter,
	foldKeymap,
	indentOnInput,
	syntaxHighlighting,
} from "@codemirror/language";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import {
	type KeyBinding,
	crosshairCursor,
	drawSelection,
	highlightActiveLine,
	highlightActiveLineGutter,
	highlightSpecialChars,
	lineNumbers,
	rectangularSelection,
} from "@codemirror/view";

import { lintKeymap } from "@codemirror/lint";

import { indentWithTab } from "@codemirror/commands";
import type { Extension } from "@codemirror/state";
import { keymap, placeholder } from "@codemirror/view";

import { githubDark } from "@uiw/codemirror-theme-github";

/**
 * Creates an array of CodeMirror extensions to enhance the editor functionality.
 *
 * @returns An array of CodeMirror extensions.
 */
export const createExtensions = () => {
	// Define key bindings for the editor, including custom and default keymaps.
	const keymaps: KeyBinding[] = [
		{ key: "Mod-Shift-z", run: redo }, // Custom key binding for redo action.
		...closeBracketsKeymap, // Keymap for automatically closing brackets.
		...defaultKeymap, // Default keymap for common editor actions.
		...historyKeymap, // Keymap for undo/redo history actions.
		...searchKeymap, // Keymap for search-related actions.
		...foldKeymap, // Keymap for code folding actions.
		...completionKeymap, // Keymap for code completion actions.
		...lintKeymap, // Keymap for linting actions.
		indentWithTab, // Key binding for indenting with the Tab key.
	];

	// Define a list of extensions to enhance the editor's functionality.
	const extensions: Extension[] = [
		placeholder("Write your code here..."), // Placeholder text for the editor.
		lineNumbers(), // Display line numbers in the editor.
		highlightActiveLineGutter(), // Highlight the gutter of the active line.
		highlightSpecialChars(), // Highlight special characters in the text.
		history(), // Enable undo/redo history.
		foldGutter(), // Enable code folding in the gutter.
		drawSelection(), // Customize the selection drawing.
		indentOnInput(), // Automatically indent code on input.
		syntaxHighlighting(defaultHighlightStyle, { fallback: true }), // Apply syntax highlighting with a fallback style.
		bracketMatching(), // Highlight matching brackets.
		closeBrackets(), // Automatically close brackets.
		autocompletion(), // Enable code autocompletion.
		rectangularSelection(), // Enable rectangular selection.
		crosshairCursor(), // Use a crosshair cursor for selection.
		highlightActiveLine(), // Highlight the active line.
		highlightSelectionMatches(), // Highlight matches of the current selection.
		githubDark, // Apply the GitHub dark theme.
		keymap.of(keymaps.flat()), // Apply the defined keymaps.
	];

	// Return the array of extensions.
	return extensions;
};
