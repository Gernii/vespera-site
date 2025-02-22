<script lang="ts">
	import { cn } from '$lib/shared/lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		/**
		 * The HTML tag to render as the container.
		 *
		 * @default "section"
		 */
		tag?: 'section' | 'div' | 'header' | 'footer' | 'main';

		class?: string;
	}
	const { children, tag = 'section', class: className }: Props = $props();

	// Derived class name for the container
	const containerClassName = $derived(cn('max-w-container mx-auto px-2', className));
</script>

<svelte:element this={tag} class={containerClassName}>
	{@render children?.()}
</svelte:element>
