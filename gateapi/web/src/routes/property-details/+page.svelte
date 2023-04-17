<script lang="ts">
	import Input from '$lib/components/input/Input.svelte'
	import Section from '$lib/components/section/Section.svelte'

	import property from '$lib/assets/images/property.png'
	import house from '$lib/assets/svgs/House.svg'
	import building from '$lib/assets/svgs/Building.svg'
	import SelectionButton from '$lib/components/selectionButton/SelectionButton.svelte'

	interface SelectionButtonData {
		id: number
		name: string
		icon: string
	}

	let propertyTypes: SelectionButtonData[] = [
		{ id: 1, name: 'Single-Family', icon: house },
		{ id: 2, name: 'Multi-Family', icon: building },
		{ id: 3, name: 'Townhome', icon: house },
		{ id: 4, name: 'Condo', icon: building },
	]
</script>

<div class="flex w-full max-w-4xl justify-between flex-wrap">
	<div class="flex flex-col max-w-md">
		<h1 class="text-4xl">Property details</h1>
		<p class="mt-3 mb-12">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam.
		</p>

		<div class="space-y-4">
			<Input label="Property Name" placeholder="opioi" />
			<Input label="Address" />
		</div>
	</div>

	<img class="object-contain self-start" src={property} alt="property" />

	<Section label="Property Type">
		{#each propertyTypes as item}
			<SelectionButton bind:name={item.name} icon={item.icon} />
		{/each}
	</Section>

	<Section label="Unit info" />
</div>
