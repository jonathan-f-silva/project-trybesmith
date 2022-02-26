import productModel from '../models/Product';
import { NewProduct, Product } from '../interfaces/Product';

const create = async (newProduct: NewProduct): Promise<Product> => {
  const { name, amount } = newProduct;
  return productModel.create({ name, amount });
};

const getAll = async (): Promise<Product[]> => productModel.getAll();

export default {
  create,
  getAll,
};
