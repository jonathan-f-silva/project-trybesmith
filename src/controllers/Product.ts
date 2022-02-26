import { Request, Response } from 'express';
import productService from '../services/Product';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const product = await productService.create({ name, amount });
  res.status(201).send({ item: product }).end();
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).send(products).end();
};

export default {
  create,
  getAll,
};