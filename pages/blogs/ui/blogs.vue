<script setup lang="ts">
import { Container, ContainerInner } from '~/shared/ui/layout/container'
import BlogList from './blog-list.vue'
import BlogListTitle from './blog-list-title.vue'
</script>

<template>
	<Container>
		<ContainerInner>
			<div class="py-16">
				<BlogListTitle />
			</div>
			<BlogList />
		</ContainerInner>
	</Container>
</template>
