<template>
	<div>
		<p>Product detail for {{ id }}</p>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam labore
			quod cum, in dolor esse? Facilis voluptatem saepe placeat harum?
		</p>
	</div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped></style>
