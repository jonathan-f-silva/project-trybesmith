import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ErrorData, TokenData, User } from '../interfaces/User';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

dotenv.config();

const create = (user: User): string => {
  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET || 'xablau' as string,
    { expiresIn: '1h' },
  );
  return token;
};

const validate = (token: string) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET as string);
    return userData as TokenData;
  } catch (error) {
    return { error: ErrorMessageTypes.TOKEN_INVALID } as ErrorData;
  }
};

export default {
  create,
  validate,
};