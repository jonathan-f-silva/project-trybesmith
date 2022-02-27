import { Request, Response } from 'express';
import orderService from '../services/Order';

const create = async (req: Request, res: Response) => {
  const { products } = req.body;
  // get userId from token
  const userId = 1;
  const order = await orderService.create({ userId, products });
  res.status(201).send(order).end();
};

const getAll = async (_req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(200).send(orders).end();
};

export default {
  create,
  getAll,
};