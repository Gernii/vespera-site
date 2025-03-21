import type { VariantProps } from "cva";
import type { ButtonHTMLAttributes, FunctionalComponent } from "vue";
import type { buttonClassNameHandler } from "./styles";

/**
 * Union type for button properties, which can be either default button properties or anchor button properties.
 */

export interface ButtonProps
	extends ButtonCommonProps,
		/* @vue-ignore */ Omit<
			ButtonHTMLAttributes,
			"color" | "title" | "disabled"
		> {}

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
	icon?: FunctionalComponent;

	/**
	 * An alternative icon to display in the button.
	 */
	altIcon?: FunctionalComponent;
}

/**
 * Properties for button class names, derived from the button class name handler.
 */
export type ButtonClassNameProps = VariantProps<typeof buttonClassNameHandler>;
