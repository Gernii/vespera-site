<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** The URL the navigation item links to
		 *
		 * @requires
		 */
		href: string;
		children?: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a {href} class="link hover:text-primary no-underline">
	{@render children?.()}
</a>
