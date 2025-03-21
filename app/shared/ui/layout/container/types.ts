import type { VariantProps } from "cva";
import type { ClassValue } from "cva/types";
import type {
	containerClassNameHandler,
	containerInnerClassNameHandler,
} from "./styles";

/**
 * Type for the class name properties of the container.
 * Utilizes the VariantProps from the containerClassNameHandler.
 */
export type ContainerClassNameProps = VariantProps<
	typeof containerClassNameHandler
>;

/**
 * Interface for the Container component's props.
 */
export interface ContainerProps {
	/**
	 * The HTML element to render as the container.
	 * Defaults to "section" or "header".
	 */
	as?: "section" | "header";

	/**
	 * Padding variant for the container.
	 */
	padding?: ContainerClassNameProps["padding"];

	/**
	 * Custom class value for additional styling.
	 */
	class?: ClassValue;
}

/**
 * Type for the class name properties of the container's inner element.
 * Utilizes the VariantProps from the containerInnerClassNameHandler.
 */
export type ContainerInnerClassNameProps = VariantProps<
	typeof containerInnerClassNameHandler
>;

/**
 * Interface for the ContainerInner component's props.
 */
export interface ContainerInnerProps {
	/**
	 * Size variant for the container's inner element.
	 */
	size?: ContainerInnerClassNameProps["size"];

	/**
	 * Padding variant for the container's inner element.
	 */
	padding?: ContainerInnerClassNameProps["padding"];

	/**
	 * Custom class value for additional styling.
	 */
	class?: ClassValue;
}
