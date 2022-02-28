import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { TokenData, User } from '../interfaces/User';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'xablau' as string;

const create = (user: User): string => {
  const token = jwt.sign(
    { username: user.username },
    SECRET,
    { expiresIn: '1h' },
  );
  return token;
};

const validate = (token: string) => {
  try {
    const userData = jwt.verify(token, SECRET);
    return userData as TokenData;
  } catch (error) {
    throw new Error(ErrorMessageTypes.TOKEN_INVALID);
  }
};

export default {
  create,
  validate,
};