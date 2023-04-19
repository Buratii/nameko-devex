import type { Order } from '$lib/interfaces/orders.interface.js'

export const load = async ({ fetch }) => {
  try {
    const fetchOrder = async (): Promise<Order> => {
      const response = await fetch(`http://localhost:3000/orders/1`)

      const orderData: Order =  await response.json()

      const totalPrice = orderData.order_details.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, "");

      const order: Order = {
        ...orderData,
        totalPrice,
      }

      return order;
    }

    return {
      fetchOrder: fetchOrder()
    }
  } catch (error) {
    throw error(404, 'Not found');
  }
}