<script lang="ts">
	import { Pane, PaneGroup, PaneResizer } from 'paneforge';
	import LucideMenu from '~icons/lucide/menu';
	import LucideSave from '~icons/lucide/save';
	import * as m from '$i18n/messages';
	import { Button } from '$lib/shared/ui/actions/button';

	let playgroundName = $state('Hello World');
</script>

<div
	class="capitalize-first flex min-h-0 flex-col pt-4 supports-[height:100dvh]:h-[calc(100dvh-var(--spacing-nav-height))]"
>
	<div class="bg-base-100 flex min-h-0 grow flex-col space-y-4 pt-4">
		<div class="flex gap-x-2 px-4">
			<Button title={m.known_bad_tadpole_relish()} iconOnly>
				{#snippet icon()}
					<LucideMenu />
				{/snippet}
			</Button>
			<input
				type="text"
				class="input input-bordered w-full"
				placeholder={m.misty_early_swan_enjoy({
					name: m.quiet_polite_yak_delight({ name: m.spicy_noble_boar_boost() })
				})}
				bind:value={playgroundName}
			/>
			<Button title={m.only_wild_wombat_jump({ name: playgroundName })} iconOnly>
				{#snippet icon()}
					<LucideSave />
				{/snippet}
			</Button>
		</div>
		<div class="border-base-content/20 h-full border-t">
			<PaneGroup direction="horizontal" class="">
				<Pane defaultSize={50}>Code section</Pane>
				<PaneResizer class="bg-base-content/20 w-0.5" />
				<Pane defaultSize={50} class="p-4">Result section</Pane>
			</PaneGroup>
		</div>
	</div>
</div>
