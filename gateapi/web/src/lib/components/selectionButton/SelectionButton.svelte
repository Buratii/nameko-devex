<script lang="ts">
	import Icon from '../icon/Icon.svelte'
	import type pathsByName from '../icon/icon-paths'

	export let name: string
	export let icon: keyof typeof pathsByName
</script>

<button
	class="flex flex-row items-center justify-center w-48.5 my-2 py-5 rounded border border-purple-200 focus:border-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:ease-linear duration-100"
>
	<Icon class="w-8 h-8 focus:fill-purple-500" name={icon} />
	<p class="ml-3.5 font-bold">{name}</p>
</button>
