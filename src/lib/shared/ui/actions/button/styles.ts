import { cva } from "cva";

export const buttonClassNameHandler = cva("btn", {
	variants: {
		color: {
			primary: "btn-primary",
			secondary: "btn-secondary",
			success: "btn-success",
			warning: "btn-warning",
			error: "btn-error",
			info: "btn-info",
			ghost: "btn-ghost",
		},
		variant: {
			outline: "btn-outline",
			text: "btn-outline border-0",
		},
		icon: { true: "btn-square", false: "" },
		disabled: {
			true: "btn-disabled pointer-events-none cursor-crosshair",
			false: "",
		},
	},
	defaultVariants: {
		color: "ghost",
	},
});
