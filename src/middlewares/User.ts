import { NextFunction, Request, Response } from 'express';
import newUserSchema from '../schemas/User';
import { ErrorCodeByMessage } from '../utils/ErrorMessages';

const validateNewUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const { error } = newUserSchema.validate({ username, classe, level, password });
  if (error) { 
    const { message } = error.details[0];
    return res.status(ErrorCodeByMessage[message]).send({ error: message });
  }
  next();
};

export default validateNewUser;