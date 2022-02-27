export interface NewOrder {
  userId: number;
  products: Array<number>;
}

export interface Order {
  order: NewOrder;
}