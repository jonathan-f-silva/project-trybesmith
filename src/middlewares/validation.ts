import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import rescue from 'express-rescue';

import loginSchema from '../schemas/Login';
import newUserSchema from '../schemas/User';
import newProductSchema from '../schemas/Product';
import newOrderSchema from '../schemas/Order';
import tokenService from '../services/Token';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

type TRouteSchemas = {
  [key: string]: Joi.ObjectSchema | Joi.ArraySchema;
};

const ROUTE_SCHEMAS: TRouteSchemas = {
  '/login': loginSchema,
  '/users': newUserSchema,
  '/products': newProductSchema,
  '/orders': newOrderSchema,
};

const validatePost = rescue((req: Request, _res: Response, next: NextFunction) => {
  const schema = ROUTE_SCHEMAS[req.originalUrl];
  const { error } = schema.validate(req.body);
  if (error) { 
    const { message } = error.details[0];
    throw new Error(message);
  }
  next();
});

const validateToken = rescue((req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) throw new Error(ErrorMessageTypes.TOKEN_NOT_FOUND);
  tokenService.validate(token);
  next();
});

export {
  validatePost,
  validateToken,
};