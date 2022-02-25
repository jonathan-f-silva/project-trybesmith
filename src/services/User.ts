import userModel from '../models/User';
import { NewUser, User, Login } from '../interfaces/User';
import tokenService from './Token';

const create = async (newUser: NewUser): Promise<string> => {
  const { username, classe, level, password } = newUser;
  const user = await userModel.create({ username, classe, level, password });
  return tokenService.create(user);
};

const getAll = async (): Promise<User[]> => userModel.getAll();

const getByLogin = async (columns: Login) => userModel.getByLogin(columns);

export default {
  create,
  getAll,
  getByLogin,
};
