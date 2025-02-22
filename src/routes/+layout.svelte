<script lang="ts">
	import { i18n } from '$lib/libs/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { PageLayoutDefault } from '$lib/shared/ui/page-layout/default';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<PageLayoutDefault>
		{@render children()}
	</PageLayoutDefault>
</ParaglideJS>
