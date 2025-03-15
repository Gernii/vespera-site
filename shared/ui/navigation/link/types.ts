import type { VariantProps } from "cva";
import type { AnchorHTMLAttributes } from "vue";
import type { RouteLocationRaw } from "vue-router";
import type { linkClassNameHandler } from "./styles";

/**
 * Props interface for the Link component
 * Extends HTML anchor attributes with additional styling and routing capabilities
 * @interface LinkProps
 */
export interface LinkProps
	extends /* @vue-ignore */ Omit<AnchorHTMLAttributes, "title" | "href"> {
	/** Vue Router location object for internal navigation */
	to?: RouteLocationRaw;
	/** Standard HTML href attribute for external links */
	href?: AnchorHTMLAttributes["href"];
	/** Text to display as title and accessibility label */
	title: string;
	/**
	 * Color variant of the link
	 * @default "base"
	 * */
	color?: LinkClassNameProps["color"];
	/** Underline style of the link
	 * @default false
	 * */
	underline?: LinkClassNameProps["underline"];
	/** Controls underline behavior on hover
	 * @default false
	 * */
	underlineOnHover?: LinkClassNameProps["underlineOnHover"];
	/** Controls color change behavior on hover
	 * @default false
	 * */
	colorChangeOnHover?: LinkClassNameProps["colorChangeOnHover"];
	/** Removes default styling when true */
	unstyled?: boolean;
}

/**
 * Style variant props for the Link component
 * Generated from the linkClassNameHandler utility
 * @type LinkClassNameProps
 */
export type LinkClassNameProps = VariantProps<typeof linkClassNameHandler>;
