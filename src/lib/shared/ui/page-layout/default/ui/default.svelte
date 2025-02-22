<script lang="ts">
	import { Container } from '$lib/shared/ui/layout/container';
	import { route } from '$lib/libs/routes';
	import * as m from '$i18n/messages';
	import NavItem from './nav-item.svelte';

	let { children } = $props();
</script>

<header class="bg-base-100">
	<Container class="h-nav-height flex items-center gap-x-4">
		<a href={route('/')} class="text-2xl font-bold">Vespera</a>
		<nav class="flex items-center gap-x-4">
			<NavItem href={route('/playground')}>
				{m.jolly_silly_chipmunk_view()}
			</NavItem>
		</nav>
	</Container>
</header>
{@render children()}
