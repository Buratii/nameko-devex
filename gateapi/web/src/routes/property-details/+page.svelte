<script lang="ts">
	import Input from '$lib/components/input/Input.svelte'
	import Section from '$lib/components/section/Section.svelte'
	import SelectionButton from '$lib/components/selectionButton/SelectionButton.svelte'

	import property from '$lib/assets/images/property.png'
	import Select from '$lib/components/select/Select.svelte'
	import DatePicker from '$lib/components/datePicker/DatePicker.svelte'
	import { goto } from '$app/navigation'

	interface SelectionButtonData {
		id: number
		name: string
		icon: any
	}

	let propertyTypes: SelectionButtonData[] = [
		{ id: 1, name: 'Single-Family', icon: 'house' },
		{ id: 2, name: 'Multi-Family', icon: 'building' },
		{ id: 3, name: 'Townhome', icon: 'house' },
		{ id: 4, name: 'Condo', icon: 'building' },
	]

	let selectData = [1, 2, 3, 4]

	let cmpDatePicker

	function datepicked(e) {
		console.log(e.detail.datepicked)
	}
</script>

<svelte:head>
	<title>Property details</title>
</svelte:head>

<main class="flex w-full items-center justify-center font-amplitude">
	<div class="flex max-w-4xl justify-between flex-wrap">
		<div class="flex flex-col max-w-md">
			<p class="text-4xl">Property details</p>
			<p class="mt-3 mb-12 text-lg font-amplitude-book">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>

			<div class="space-y-4">
				<Input label="Property Name" />

				<Input
					label="Address"
					value="21 Jump Street, Los Angeles, California"
				/>
			</div>
		</div>

		<img class="object-contain self-start" src={property} alt="property" />

		<Section label="Property Type">
			{#each propertyTypes as item}
				<SelectionButton bind:name={item.name} icon={item.icon} />
			{/each}
		</Section>

		<Section class="mb-18" label="Unit info">
			<div
				class="flex flex-col items-center w-full p-6 space-y-6 shadow-md rounded"
			>
				<div class="w-full box-content flex flex-row justify-between space-x-6">
					<Input label="Unit Name" placeholder="Name and/or number" />
					<Input label="Rent" icon="money" suffix="/mo" type="text" />
					<Input label="Deposit" icon="money" suffix="/mo" type="text" />
					<Input
						label="Lease Length (months)"
						type="text"
						pattern="\d*"
						maxlength={2}
					/>
				</div>

				<div class="grid grid-cols-5 gap-4">
					<Select label="Beds" data={selectData} icon="beds" />
					<Select label="Baths" data={selectData} icon="baths" />
					<Input label="Sq. Ft." type="text" />
					<DatePicker
						label="Available on"
						bind:this={cmpDatePicker}
						on:datepicked={datepicked}
					/>
					<Select label="Vacancy" data={selectData} icon="profile" />
				</div>
			</div>
		</Section>

		<button
			on:click={() => goto('/')}
			class="button border border-purple-700 font-inter">BACK</button
		>
		<button class="button bg-purple-400 text-white drop-shadow-md font-inter"
			>CONTINUE</button
		>
	</div>
</main>
