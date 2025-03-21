<script setup lang="ts">
import NavItem from './nav-item.vue'
import LucideGithub from '~icons/lucide/github'
import LucideMenu from '~icons/lucide/menu'
import { Container, ContainerInner } from '~/shared/ui/layout/container'
import { GITHUB_REPO_URL } from '~/shared/configs/constants'
import { ButtonAnchor } from '~/shared/ui/actions/button-anchor'
</script>

<template>
	<div class="drawer">
		<input id="drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Header container with navigation -->
			<Container as="header" class="bg-base-100 h-nav-height">
				<ContainerInner class="flex h-full items-center justify-between gap-x-4">
					<div class="flex items-center gap-x-4">
						<!-- Button to open the drawer menu on small screens -->
						<!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
						<label for="drawer" class="btn-square btn-sm btn lg:hidden">
							<LucideMenu />
						</label>
						<!-- Link to the home page -->
						<RouterLink :to="{ name: 'index' }" class="text-2xl font-bold"> Vespera </RouterLink>
						<nav class="hidden gap-x-2 lg:flex">
							<NavItem :to="{ name: 'playground' }" title="Playground" />
							<NavItem :to="{ name: 'blog' }" title="Blog" />
							<NavItem :to="{ name: 'doc' }" title="Docs" />
						</nav>
					</div>
					<div class="flex items-center gap-x-4">
						<!-- Button linking to the GitHub repository -->
						<ButtonAnchor :href="GITHUB_REPO_URL" title="GitHub" icon-only>
							<LucideGithub />
						</ButtonAnchor>
					</div>
				</ContainerInner>
			</Container>
			<slot />
		</div>
		<div
			class="drawer-side z-40 [scrollbar-gutter:auto]"
			style="scroll-behavior: smooth; scroll-padding-top: 5rem"
		>
			<!-- Overlay to close the drawer menu -->
			<!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
			<label for="drawer" class="drawer-overlay" aria-label="Close menu" />
			<aside class="bg-base-100 min-h-dvh w-80">
				<!-- Sticky header inside the drawer menu -->
				<div class="h-nav-height bg-base-100 sticky top-0 flex w-full items-center px-6">
					<RouterLink :to="{ name: 'index' }" class="text-2xl font-bold"> Vespera</RouterLink>
				</div>
				<div class="h4"></div>
				<!-- Navigation inside the drawer menu -->
				<nav class="px-6 *:py-4">
					<NavItem :to="{ name: 'playground' }" title="Playground" />
					<NavItem :to="{ name: 'blog' }" title="Blog" />
					<NavItem :to="{ name: 'doc' }" title="Docs" />
				</nav>
			</aside>
		</div>
	</div>
</template>
