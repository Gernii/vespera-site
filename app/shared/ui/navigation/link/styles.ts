import { cva } from "cva";

export const linkClassNameHandler = cva("link", {
	variants: {
		color: {
			primary: null,
			secondary: null,
			success: null,
			warning: null,
			error: null,
			info: null,
			base: null,
		},
		underline: {
			true: null,
			false: "no-underline",
		},
		underlineOnHover: {
			true: "link-hover",
			false: null,
		},
		disabled: {
			true: "pointer-events-none cursor-crosshair",
			false: null,
		},
		colorChangeOnHover: {
			true: null,
			false: null,
		},
	},
	compoundVariants: [
		{
			color: "primary",
			colorChangeOnHover: true,
			className: "hover:text-primary",
		},
		{
			color: "secondary",
			colorChangeOnHover: true,
			className: "hover:text-secondary",
		},
		{
			color: "success",
			colorChangeOnHover: true,
			className: "hover:text-success",
		},
		{
			color: "warning",
			colorChangeOnHover: true,
			className: "hover:text-warning",
		},
		{
			color: "error",
			colorChangeOnHover: true,
			className: "hover:text-error",
		},
		{
			color: "info",
			colorChangeOnHover: true,
			className: "hover:text-info",
		},

		{
			color: "primary",
			colorChangeOnHover: false,
			className: "link-primary",
		},
		{
			color: "secondary",
			colorChangeOnHover: false,
			className: "link-secondary",
		},
		{
			color: "success",
			colorChangeOnHover: false,
			className: "link-success",
		},
		{
			color: "warning",
			colorChangeOnHover: false,
			className: "link-warning",
		},
		{
			color: "error",
			colorChangeOnHover: false,
			className: "link-error",
		},
		{
			color: "info",
			colorChangeOnHover: false,
			className: "link-info",
		},
	],
	defaultVariants: {
		color: "base",
		underline: false,
		underlineOnHover: false,
		colorChangeOnHover: false,
	},
});
