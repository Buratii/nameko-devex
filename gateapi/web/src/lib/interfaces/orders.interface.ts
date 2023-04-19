interface Product {
  maximum_speed: number;
  title: string;
  passenger_capacity: number;
  id: string;
  in_stock: number;
}

export interface OrderDetails {
  product: Product;
  id: number;
  price: number;
  image: string;
  quantity: number;
  product_id: string;
}

export interface Order {
  id: number;
  order_details: OrderDetails[];
  totalPrice: string;
}