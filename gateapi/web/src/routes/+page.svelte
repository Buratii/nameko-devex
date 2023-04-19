<script context="module" lang="ts">
	import { ROUTES } from './routes'

	console.log(ROUTES)
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="h-fit w-full px-8 py-4 shadow-sm">
	{#each Object.entries(ROUTES) as [name, route]}
		<a
			class="mx-2 text-blue-40 font-amplitude text-2xl text-purple-800 hover:text-purple-400 hover:ease-linear duration-100"
			href={route}>{name}</a
		>
	{/each}
</main>
