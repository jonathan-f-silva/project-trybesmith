import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../interfaces/User';

dotenv.config();

const create = (user: User): string => {
  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' },
  );
  return token;
};

const isValid = (token: string): boolean => {
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  create,
  isValid,
};