<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/">Nuxt Dojo</NuxtLink>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><a href="/about">Normal About</a></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
				</ul>
			</nav>
		</header>
		<h1>Home</h1>
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
	</div>
</template>

<script setup></script>

<style scoped>
h1 {
	margin-bottom: 20px;
	font-size: 30px;
}
p {
	margin: 20px 0;
}
</style>
