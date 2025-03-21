import { cx } from "cva";
import type { ClassValue } from "cva/types";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes.
 *
 * This utility function uses `cva` to conditionally apply class names and `tailwind-merge`
 * to intelligently merge Tailwind CSS classes, ensuring no conflicts.
 *
 * @param classes - An array of class values to be combined.
 * @returns A single string of combined class names.
 */
export const cn = (...classes: ClassValue[]) => {
	// Merging class names using twMerge and cx
	return twMerge(cx(...classes));
};
