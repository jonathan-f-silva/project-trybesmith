import userModel from '../models/User';
import { NewUser, User } from '../interfaces/User';
import tokenService from './Token';

const create = async (newUser: NewUser): Promise<string> => {
  const { username, classe, level, password } = newUser;
  const user = await userModel.create({ username, classe, level, password });
  return tokenService.create(user);
};

const getAll = async (): Promise<User[]> => userModel.getAll();

export default {
  create,
  getAll,
};