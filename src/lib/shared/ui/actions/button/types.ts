import type { VariantProps } from "cva";
import type { ClassValue } from "cva/types";
import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";
import type { buttonClassNameHandler } from "./styles";

/**
 * Union type for button properties, which can be either default button properties or anchor button properties.
 */
export type ButtonProps = (ButtonDefaultProps | ButtonAnchorProps) &
	HTMLButtonAttributes;

/**
 * Properties for a default button element.
 */
type ButtonDefaultProps = {
	/**
	 * The HTML tag to render, defaults to 'button'.
	 * @default undefined
	 */
	tag?: "button";
} & ButtonCommonProps;

/**
 * Properties for an anchor button element.
 */
type ButtonAnchorProps = {
	/**
	 * The HTML tag to render, must be 'a' for anchor elements.
	 * @default undefined
	 */
	tag: "a";

	/**
	 * The URL the anchor button links to.
	 * @requires
	 */
	href: string;
} & ButtonCommonProps;

/**
 * Common properties shared by all button types.
 */
export interface ButtonCommonProps {
	/**
	 * Indicates if the button is in a loading state.
	 * @default false
	 */
	loading?: boolean;

	/**
	 * Indicates if the button is disabled.
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Indicates if the button is icon-only.
	 * @default false
	 */
	iconOnly?: boolean;

	/**
	 * The color variant of the button.
	 * @default "ghost"
	 */
	color?: ButtonClassNameProps["color"];

	/**
	 * Additional CSS classes to apply to the button.
	 * @default undefined
	 */
	class?: ClassValue;

	/**
	 * Indicates if the button should be unstyled.
	 * @default false
	 */
	unstyled?: boolean;

	/**
	 * The title of the button, used for accessibility.
	 * @default undefined
	 */
	title: string;

	/**
	 * The variant style of the button.
	 * @default undefined
	 */
	variant?: ButtonClassNameProps["variant"];

	/**
	 * The text of the button
	 * @default undefined
	 */
	text?: string;

	/**
	 * The main icon to display in the button.
	 */
	icon?: Snippet;

	/**
	 * An alternative icon to display in the button.
	 */
	altIcon?: Snippet;

	/**
	 * Optional content to be rendered inside the button.
	 * This will override if the text property is provided.
	 */
	children?: Snippet;
}

/**
 * Properties for button class names, derived from the button class name handler.
 */
export type ButtonClassNameProps = VariantProps<typeof buttonClassNameHandler>;
