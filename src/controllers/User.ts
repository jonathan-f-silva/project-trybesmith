import { Request, Response } from 'express';
import userService from '../services/User';

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const user = await userService.create({ username, classe, level, password });
  res.status(201).send({ token: user }).end();
};

const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  const list = users.map(({ id, username, classe, level }) =>
    ({ id, username, classe, level }));
  res.status(200).send(list).end();
};

export default {
  create,
  getAll,
};