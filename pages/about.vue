<template>
	<div>
		<h1>About</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cum.
			Quasi omnis blanditiis facere! Culpa impedit temporibus aperiam iste
			quasi.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cum.
			Quasi omnis blanditiis facere! Culpa impedit temporibus aperiam iste
			quasi.
		</p>
		<p class="text-2xl font-bold">{{ Money }}</p>
		<p>{{ data }}</p>
	</div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja')
const { data: Money } = await useFetch('/api/currency/KES')
</script>

<style scoped>
h1 {
	margin-bottom: 20px;
	font-size: 30px;
}
p {
	margin: 20px 0;
}
</style>
