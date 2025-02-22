import { indentWithTab } from "@codemirror/commands";
import type { Extension } from "@codemirror/state";
import { Compartment, EditorState } from "@codemirror/state";
import { EditorView, keymap, placeholder } from "@codemirror/view";

import { githubDark } from "@uiw/codemirror-theme-github";
import { type BasicSetupOptions, basicSetup } from "./editor-ext-setup";

export interface DefaultExtensionsOptions {
	indentWithTab?: boolean;
	basicSetup?: boolean | BasicSetupOptions;
	placeholder?: string | HTMLElement;
	theme?: "light" | "dark" | "none" | Extension;
	readOnly?: boolean;
	editable?: boolean;
}

export const getDefaultExtensions = (optios: DefaultExtensionsOptions = {}) => {
	const {
		indentWithTab: defaultIndentWithTab = true,
		editable = true,
		readOnly = false,
		theme = "light",
		placeholder: placeholderStr = "",
		basicSetup: defaultBasicSetup = true,
	} = optios;
	const editableCompartment = new Compartment();
	const getExtensions: Extension[] = [];
	if (defaultIndentWithTab) {
		getExtensions.unshift(keymap.of([indentWithTab]));
	}
	if (defaultBasicSetup) {
		if (typeof defaultBasicSetup === "boolean") {
			getExtensions.unshift(basicSetup());
		} else {
			getExtensions.unshift(basicSetup(defaultBasicSetup));
		}
	}
	if (placeholderStr) {
		getExtensions.unshift(placeholder(placeholderStr));
	}
	switch (theme) {
		case "none":
			break;
		default:
			getExtensions.push(githubDark);
			break;
	}
	if (editable === false) {
		getExtensions.push(editableCompartment.of(EditorView.editable.of(false)));
	}
	if (readOnly) {
		getExtensions.push(EditorState.readOnly.of(true));
	}

	return {
		extensions: getExtensions,
		editableCompartment,
	};
};
