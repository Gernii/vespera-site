import type {
	EditorState,
	EditorStateConfig,
	Extension,
} from "@codemirror/state";
import type { EditorView, ViewUpdate } from "@codemirror/view";
import type { EventDispatcher } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { BasicSetupOptions } from "./editor-ext-setup";
import type { Statistics } from "./statistics";

export interface CodeMirrorProps
	extends Omit<EditorStateConfig, "doc" | "extensions">,
		Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "placeholder"> {
	/** value of the auto created model in the editor. */
	value?: string;
	height?: string;
	minHeight?: string;
	maxHeight?: string;
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	/** focus on the editor. */
	autoFocus?: boolean;
	/** Enables a placeholder—a piece of example content to show when the editor is empty. */
	placeholder?: string | HTMLElement;
	/**
	 * `light` / `dark` / `Extension` Defaults to `light`.
	 * @default light
	 */
	theme?: "light" | "dark" | "none" | Extension;
	/**
	 * Whether to optional basicSetup by default
	 * @default true
	 */
	basicSetup?: boolean | BasicSetupOptions;
	/**
	 * This disables editing of the editor content by the user.
	 * @default true
	 */
	editable?: boolean;
	/**
	 * This disables editing of the editor content by the user.
	 * @default false
	 */
	readOnly?: boolean;
	/**
	 * Controls whether pressing the `Tab` key inserts a tab character and indents the text (`true`)
	 * or behaves according to the browser's default behavior (`false`).
	 * @default true
	 */
	indentWithTab?: boolean;

	// /** Fired whenever a change occurs to the document. */
	// onChange?(props: { value: string; viewUpdate: ViewUpdate }): void;
	// /** Some data on the statistics editor. */
	// onStatistics?(data: Statistics): void;
	// /** Fired whenever any state change occurs within the editor, including non-document changes like lint results. */
	// onUpdate?(viewUpdate: ViewUpdate): void;
	// /** The first time the editor executes the event. */
	// onCreateEditor?(props: { view: EditorView; state: EditorState }): void;
	/**
	 * Extension values can be [provided](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions) when creating a state to attach various kinds of configuration and behavior information.
	 * They can either be built-in extension-providing objects,
	 * such as [state fields](https://codemirror.net/6/docs/ref/#state.StateField) or [facet providers](https://codemirror.net/6/docs/ref/#state.Facet.of),
	 * or objects with an extension in its `extension` property. Extensions can be nested in arrays arbitrarily deep—they will be flattened when processed.
	 */
	extensions?: Extension[];
	/**
	 * If the view is going to be mounted in a shadow root or document other than the one held by the global variable document (the default), you should pass it here.
	 * Originally from the [config of EditorView](https://codemirror.net/6/docs/ref/#view.EditorView.constructor%5Econfig.root)
	 */
	root?: ShadowRoot | Document;
}

export interface CreateEditorProps {
	view: EditorView;
	state: EditorState;
}
export interface EditorChangeProps {
	value: string;
	viewUpdate: ViewUpdate;
}

export type EditorDispatcher = EventDispatcher<{
	createEditor: CreateEditorProps;
	change: EditorChangeProps;
	statistics: Statistics;
	update: ViewUpdate;
}>;
