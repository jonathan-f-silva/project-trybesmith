export interface NewProduct {
  name: string;
  amount: number;
}

export interface Product extends NewProduct {
  id: number;
}