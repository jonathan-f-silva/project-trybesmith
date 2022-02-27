import orderModel from '../models/Order';
import { NewOrder, Order } from '../interfaces/Order';

const create = async (newOrder: NewOrder): Promise<Order> => {
  const { userId, products } = newOrder;
  return orderModel.create({ userId, products });
};

const getAll = async (): Promise<Order[]> => orderModel.getAll();

export default {
  create,
  getAll,
};
