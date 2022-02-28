import { Request, Response } from 'express';
import userService from '../services/User';

const create = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const user = await userService.create({ username, classe, level, password });
  res.send(user);
};

const getAll = async (_req: Request, res: Response) => {
  const users = await userService.getAll();
  res.send(users);
};

export default {
  create,
  getAll,
};