<script lang="ts">
	import type { OrderDetails } from '$lib/interfaces/orders.interface'
	import Image from '../customImage/Image.svelte'

	export let data: OrderDetails

	import airship from '$lib/assets/images/airship.png'
</script>

<button
	class="flex relative p-6 my-6 rounded-xl bg-gray-50 text-start hover:bg-purple-50 hover:ease-linear duration-100"
>
	<!-- If want to test an image, put the airship import in the src -->
	<Image
		class="mr-6 w-44 h-44"
		src={data.image}
		alt={`product-${data.product.id}`}
	/>

	<div class="flex flex-col h-44 justify-between text-purple-700">
		<div>
			<h1 class="text-4xl text-purple-800">{data.product.title}</h1>
			<p class="font-bold">$ {data.price}</p>
		</div>

		<div>
			<p><strong>Maximum Speed</strong> {data.product.maximum_speed}</p>
			<p>
				<strong>Capacity</strong>
				{data.product.passenger_capacity} Passangers
			</p>
		</div>
	</div>

	<div class="flex flex-col items-center absolute right-6">
		<p
			class="text-xl text-white font-bold px-4 py-0.5 bg-purple-400 rounded-lg"
		>
			Quantity {data.quantity}
		</p>
		<p class="mt-1.5">{data.product.in_stock} in stock</p>
	</div>
</button>
