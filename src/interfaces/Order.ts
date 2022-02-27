export interface NewOrder {
  userId: number;
  products: Array<number>;
}

export interface Order {
  order: NewOrder;
}

export interface ReturnedOrder extends NewOrder {
  id: number;
}