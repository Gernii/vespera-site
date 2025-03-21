import { cva } from "cva";

export const inputClassNameHandler = cva(null, {
	variants: {
		size: {
			sm: "input-sm",
			md: "input-md",
			lg: "input-lg",
			none: null,
		},
		bordered: {
			true: "input-bordered",
		},
		error: {
			true: "input-error",
		},
		type: {
			checkbox: "checkbox checkbox-sm",
			text: "input",
			radio: "radio radio-sm",
			number: "input",
			date: "input",
		},
	},
	defaultVariants: {
		size: "sm",
		bordered: true,
		type: "text",
	},
});
