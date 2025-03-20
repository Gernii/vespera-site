<script setup lang="ts">
const router = useRouter()
onMounted(() => {
	router.push({ name: 'tour-id', params: { id: 'welcome' } })
})
</script>

<template>
	<div></div>
</template>
