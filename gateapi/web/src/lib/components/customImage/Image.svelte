<script lang="ts">
	import { onMount } from 'svelte'
	import Icon from '../icon/Icon.svelte'
	import error from '$lib/assets/images/error.png'

	export let src: string
	export let alt: string

	let loaded = false
	let failed = false
	let loading = false

	onMount(() => {
		const img = new Image()
		img.src = src
		loading = true

		img.onload = () => {
			loading = false
			loaded = true
		}
		img.onerror = () => {
			loading = false
			failed = true
		}
	})
</script>

<div class="{$$props.class} flex items-center justify-center rounded-xl">
	{#if loaded}
		<img class="object-cover" {src} {alt} />
	{:else if failed}
		<img src={error} alt="Not Found" />
	{:else if loading}
		<Icon name="spin" class="animate-spin h-8 w-8 fill-purple-400" />
	{/if}
</div>
