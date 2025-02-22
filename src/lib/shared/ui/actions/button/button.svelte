<script lang="ts">
	import { parseTextCapitalizeFirst } from '$lib/shared/lib/parser/text-capitalize-first';
	import { cn } from '$lib/shared/lib/utils/cn';
	import { buttonClassNameHandler } from './styles';
	import type { ButtonProps } from './types';

	const {
		tag = 'button',
		color,
		variant,
		class: className,
		iconOnly,
		unstyled,
		icon,
		altIcon,
		children,
		text,
		title,
		...props
	}: ButtonProps = $props();

	const buttonClasses = $derived.by(() => {
		// If the button is unstyled, return only the class name
		if (unstyled) {
			return cn(className);
		}

		return cn(
			buttonClassNameHandler({
				color,
				variant,
				icon: iconOnly
			}),
			className
		);
	});

	const formatedTitle = $derived.by(() => {
		return parseTextCapitalizeFirst(title);
	});
</script>

<svelte:element
	this={tag}
	class={buttonClasses}
	disabled={props.disabled || props.loading}
	title={formatedTitle}
	aria-label={formatedTitle}
>
	{#if props.loading}
		<span class="loading loading-spinner loading-sm"></span>
	{:else}
		{@render icon?.()}
	{/if}
	{#if text}
		<span>
			{text}
		</span>
	{:else if children}
		{@render children?.()}
	{/if}
	{#if altIcon}
		{@render altIcon?.()}
	{/if}
</svelte:element>
