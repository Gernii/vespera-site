import type { VariantProps } from "cva";
import type { AnchorHTMLAttributes } from "vue";
import type { ButtonCommonProps } from "../button";
import type { buttonClassNameHandler } from "./styles";
/**
 * Properties for an anchor button element.
 */
export interface ButtonAnchorProps
	extends ButtonCommonProps,
		Omit<AnchorHTMLAttributes, "color" | "title"> {}

/**
 * Properties for button class names, derived from the button class name handler.
 */
export type ButtonClassNameProps = VariantProps<typeof buttonClassNameHandler>;
