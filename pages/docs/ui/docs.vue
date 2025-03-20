<script setup lang="ts">
import { Container, ContainerInner } from '~/shared/ui/layout/container'
import DocTitle from './doc-title.vue'
import { Link } from '~/shared/ui/navigation/link'
</script>

<template>
	<div class="bg-base-100 min-h-dvh">
		<Container>
			<ContainerInner>
				<div class="py-16">
					<DocTitle />
				</div>
				<div class="prose prose-headings:font-semibold max-w-none">
					<h2>Getting Started</h2>
					<h3>
						<Link color="primary" :to="{ name: 'doc-installing' }" title="Installing Vespera">
							Installing Vespera
						</Link>
					</h3>
					<p>Instructions for downloading and installing Vespera.</p>

					<h3>
						<Link color="primary" :to="{ name: 'tour' }" title="A Tour of Vespera">
							A Tour of Vespera
						</Link>
					</h3>
					<p>
						An interactive introduction to Vespera. Each section concludes with a few exercises so
						you can practice what you've learned.
					</p>
				</div>
			</ContainerInner>
		</Container>
	</div>
</template>
