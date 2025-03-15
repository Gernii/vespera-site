import type { VariantProps } from "cva";
import type { ClassValue } from "cva/types";
import type { InputHTMLAttributes } from "vue";
import type { inputClassNameHandler } from "./styles";

/**
 * Interface representing the properties for an input component.
 */
export interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
	/** The size of the input, determined by `InputClassNameProps["size"]`. */
	size?: InputClassNameProps["size"];

	/** Whether the input should have a border, determined by `InputClassNameProps["bordered"]`. */
	bordered?: InputClassNameProps["bordered"];

	/** Additional class names to apply to the input. */
	class?: ClassValue;

	/** Whether the input is disabled. */
	disabled?: boolean;

	/** The type of the input, e.g., "checkbox", "text", "radio", etc. */
	type?: "checkbox" | "text" | "radio" | "number" | "date";

	/** Placeholder text for the input. */
	placeholder?: string;

	/** Label for the input. */
	label?: string;

	/** Whether the input is required. */
	required?: boolean;

	/** Error message to display for the input. */
	error?: string;

	/** Unique identifier for the input. */
	id?: string;

	/** Whether to hide the error message. */
	hideError?: boolean;

	/** Additional notice or information for the input. */
	notice?: string;
}

/**
 * Type representing the class name properties for an input component,
 * derived from the `inputClassNameHandler`.
 */
export type InputClassNameProps = VariantProps<typeof inputClassNameHandler>;
