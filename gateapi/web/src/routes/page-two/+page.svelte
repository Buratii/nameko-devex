<script lang="ts">
	import { goto } from '$app/navigation'
	import Icon from '$lib/components/icon/Icon.svelte'
	import ProductCard from '$lib/components/productCard/ProductCard.svelte'

	export let data

	const { fetchOrder } = data
</script>

<svelte:head>
	<title>Page two</title>
</svelte:head>

<main class="flex w-full items-center justify-center font-inter">
	<div class="flex justify-center items-center w-full max-w-4xl">
		{#await fetchOrder}
			<Icon name="spin" class="animate-spin h-8 w-8 fill-purple-400" />
		{:then order}
			<div class="flex w-full flex-col">
				<div class="flex w-full justify-between">
					<div>
						<h1 class="font-bold text-4xl">Order #{order.id}</h1>
						<p class="text-2xl">
							{order.order_details.length} Product(s)
						</p>
					</div>

					<div class="text-right">
						<h1 class="text-2xl">Total</h1>
						<span class="font-bold text-2xl">$ {order.totalPrice}</span>
					</div>
				</div>

				{#each order.order_details as orderDetails}
					<ProductCard data={orderDetails} />
				{/each}
				<div class="flex justify-between">
					<button
						on:click={() => goto('/')}
						class="button border border-purple-700 font-inter">BACK</button
					>

					<button
						class="button bg-purple-400 text-white drop-shadow-md font-inter"
						>CONTINUE</button
					>
				</div>
			</div>
		{:catch error}
			<p>An error ocurred!</p>
		{/await}
	</div>
</main>
