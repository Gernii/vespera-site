import { Annotation, type Extension } from "@codemirror/state";
import { EditorView, type ViewUpdate } from "@codemirror/view";
import { getDefaultExtensions } from "./configs";
import { getStatistics } from "./statistics";
import type { CodeMirrorProps, EditorDispatcher } from "./types";

export interface CreateEditorConfigs extends CodeMirrorProps {
	container?: HTMLDivElement | null;
	dispatch: EditorDispatcher;
}

const External = Annotation.define<boolean>();

const emptyExtensions: Extension[] = [];

export const createEditorConfigs = (props: CreateEditorConfigs) => {
	const {
		value,
		selection,
		dispatch,
		extensions = emptyExtensions,
		autoFocus,
		theme,
		placeholder: placeholderStr = "",
		editable = true,
		readOnly = false,
		indentWithTab: defaultIndentWithTab = true,
		basicSetup: defaultBasicSetup = true,
		root,
	} = props;

	const updateListener = EditorView.updateListener.of((vu: ViewUpdate) => {
		if (
			vu.docChanged &&
			// Fix echoing of the remote changes:
			// If transaction is market as remote we don't have to call `onChange` handler again
			!vu.transactions.some((tr) => tr.annotation(External))
		) {
			const doc = vu.state.doc;
			const value = doc.toString();
			dispatch("change", { value, viewUpdate: vu });
		}

		dispatch("statistics", getStatistics(vu));
	});

	const { extensions: defaultExtensions, editableCompartment } =
		getDefaultExtensions({
			theme,
			editable,
			readOnly,
			placeholder: placeholderStr,
			indentWithTab: defaultIndentWithTab,
			basicSetup: defaultBasicSetup,
		});

	let getExtensions = [updateListener, ...defaultExtensions];

	const onUpdate = (update: ViewUpdate) => {
		dispatch("update", update);
	};

	if (onUpdate && typeof onUpdate === "function") {
		getExtensions.push(EditorView.updateListener.of(onUpdate));
	}

	getExtensions = getExtensions.concat(extensions);

	return {
		getExtensions,
		autoFocus,
		value,
		selection,
		root,
		editableCompartment,
	};
};
