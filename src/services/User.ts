import userModel from '../models/User';
import { NewUser, User } from '../interfaces/User';

const create = async (user: NewUser): Promise<User> => {
  const { username, classe, level, password } = user;
  const userCreated = userModel.create({ username, classe, level, password });
  return userCreated;
};

const getAll = async (): Promise<User[]> => userModel.getAll();

export default {
  create,
  getAll,
};