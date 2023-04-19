<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import Icon from '../icon/Icon.svelte'

	export let label: string

	const dispatch = createEventDispatcher()
	let elModal
	let inputTxt
	let isOpenCalendar = false
	let date = new Date()
	const arrDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	const currentDay = +date.getDate()
	const currentMonth = +date.getMonth()
	const currentYear = +date.getFullYear()
	let selectedDay = +date.getDate()
	let selectedMonth = +date.getMonth()
	let selectedYear = +date.getFullYear()
	let rows = initRows()

	$: dispatch('datepicked', {
		datepicked: inputTxt,
	})

	onMount(() => {
		date.toLocaleDateString('en-US')
		inputTxt = `${currentDay}/${currentMonth}/${currentYear}`
		affecteRows()
	})

	function handleClickModal(e) {
		if (e.target === elModal) {
			isOpenCalendar = false
		}
	}

	function initRows() {
		return [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0],
		]
	}

	function affecteRows() {
		rows = initRows()
		const firstDayOfCurrentMonth = ucFirst(
			new Date(selectedYear, selectedMonth, 1).getDay()
		)
		const lastDayOfCurrentMonth = +new Date(
			selectedYear,
			selectedMonth + 1,
			0
		).getDate()

		let iRow = 0
		let iCol = 0
		let start = false
		let cpt = 0
		for (iRow = 0; iRow < 6; iRow++) {
			arrDays.forEach((daystr) => {
				if (cpt > lastDayOfCurrentMonth) {
					return
				}
				if (!start && daystr === arrDays[firstDayOfCurrentMonth - 1]) {
					cpt++
					start = true
				}
				rows[iRow][iCol] = cpt
				iCol++
				if (start) {
					cpt++
				}
			})
			iCol = 0
		}
	}

	function ucFirst(str) {
		return str.toString().charAt(0).toUpperCase() + str.toString().slice(1)
	}

	function previousMonth() {
		selectedMonth--
		if (selectedMonth <= 0) {
			selectedMonth = 12
			selectedYear--
		}
		affecteRows()
	}

	function nextMonth() {
		selectedMonth++
		if (selectedMonth > 12) {
			selectedMonth = 1
			selectedYear++
		}
		affecteRows()
	}

	function selectDate(y, m, d) {
		inputTxt = `${d}/${m}/${y}`
		isOpenCalendar = false
	}
</script>

{#if isOpenCalendar}
	<button
		class="flex items-center justify-center fixed z-40 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40"
		bind:this={elModal}
		on:click={handleClickModal}
	>
		<div class="flex relative w-fit items-center justify-center py-8 px-4">
			<div class="max-w-md w-full shadow-lg">
				<div class="md:p-8 p-5 dark:bg-purple-800 bg-white rounded">
					<div class="px-4 flex items-center justify-between">
						<span class="focus:outline-none text-base font-bold text-purple-800"
							>{ucFirst(`${selectedYear}-${selectedMonth}`)}</span
						>
						<div class="flex items-center">
							<button
								on:click={previousMonth}
								aria-label="calendar backward"
								class="text-purple-800"
							>
								<svg
									class="icon icon-tabler icon-tabler-chevron-left"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<polyline points="15 6 9 12 15 18" />
								</svg>
							</button>
							<button
								on:click={nextMonth}
								aria-label="calendar forward"
								class="ml-3 text-purple-800"
							>
								<svg
									class="icon icon-tabler icon-tabler-chevron-right"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<polyline points="9 6 15 12 9 18" />
								</svg>
							</button>
						</div>
					</div>
					<div class="flex items-center justify-between pt-12 overflow-x-auto">
						<table class="w-full">
							<thead>
								<tr>
									{#each arrDays as day}
										<th>
											<div class="w-full flex justify-center">
												<p class=" text-center text-purple-800">
													{day}
												</p>
											</div>
										</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each rows as col}
									<tr>
										{#each col as i}
											<td class="pt-4">
												<div
													class="px-2 py-2 cursor-pointer flex w-full justify-center rounded hover:bg-purple-700 hover:bg-opacity-40"
												>
													{#if i > 0}
														{#if inputTxt === `${i}/${selectedMonth}/${selectedYear}`}
															<button
																class="rounded focus:outline-none text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-purple-500"
																on:click={() => {
																	console.log('cai no click')
																	selectDate(selectedYear, selectedMonth, i)
																}}>{i}</button
															>
														{:else}
															<button
																class="border-none w-8 h-8"
																on:click={() => {
																	console.log('cai no outro click')
																	selectDate(selectedYear, selectedMonth, i)
																}}
															>
																{i}
															</button>
														{/if}
													{/if}
												</div>
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</button>
{/if}

<div class={`${$$props.class} w-full flex flex-col`}>
	<span class="font-medium mb-0.5">{label}</span>
	<button
		on:click={() => {
			isOpenCalendar = true
		}}
		class="h-12 flex w-full items-center px-3 border border-purple-200 rounded font-amplitude-book"
	>
		<Icon class="h-6 w-6" name="calendar" />

		<span class="ml-2 text-purple-700 focus:outline-none">
			{inputTxt}
		</span>
	</button>
</div>
