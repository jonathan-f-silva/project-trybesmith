import orderModel from '../models/Order';
import { NewOrder, Order, ReturnedOrder } from '../interfaces/Order';

const create = async (newOrder: NewOrder): Promise<Order> => {
  const { userId, products } = newOrder;
  return orderModel.create({ userId, products });
};

const getAll = async (): Promise<ReturnedOrder[]> => orderModel.getAll();

const getById = async (id: number): Promise<ReturnedOrder> => orderModel.getById(id);

export default {
  create,
  getAll,
  getById,
};
