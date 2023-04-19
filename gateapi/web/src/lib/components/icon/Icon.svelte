<script context="module">
	import pathsByName from './icon-paths'
</script>

<script lang="ts">
	export let name: keyof typeof pathsByName

	$: paths = pathsByName[name].paths || []
	$: viewBox = pathsByName[name].viewBox || ''
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={`fill-current ${$$props.class}`}
	{viewBox}
>
	{#each paths as path}
		<path d={path} />
	{/each}
</svg>
