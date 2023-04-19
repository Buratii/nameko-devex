<script lang="ts">
	export let label: string
</script>

<div class={`${$$props.class} w-full mt-6`}>
	<span class="font-bold">{label}</span>

	<div class="section flex flex-row justify-between pt-2">
		<slot />
	</div>
</div>
