import { NextFunction, Request, Response } from 'express';
import { isError } from '../interfaces/User';
import loginSchema from '../schemas/Login';
import newUserSchema from '../schemas/User';
import newProductSchema from '../schemas/Product';
import tokenService from '../services/Token';
import { ErrorCodeByMessage, ErrorMessageTypes } from '../utils/ErrorMessages';

const validateNewUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = newUserSchema.validate({ username, classe, level, password });
  if (error) { 
    const { message } = error.details[0];
    return res.status(ErrorCodeByMessage[message]).json({ error: message });
  }
  next();
};

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate({ username, password });
  if (error) { 
    const { message } = error.details[0];
    return res.status(ErrorCodeByMessage[message]).json({ error: message });
  }
  next();
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ error: ErrorMessageTypes.TOKEN_NOT_FOUND }).end();
  }
  const userData = tokenService.validate(token);
  if (isError(userData)) {
    return res.status(401).json({ error: userData.error }).end();
  }
  next();
};

const validateNewProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = newProductSchema.validate({ name, amount });
  if (error) { 
    const { message } = error.details[0];
    return res.status(ErrorCodeByMessage[message]).json({ error: message });
  }
  next();
};

export {
  validateNewUser,
  validateLogin,
  validateToken,
  validateNewProduct,
};