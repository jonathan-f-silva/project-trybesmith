import Joi from 'joi';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

const loginSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.base': ErrorMessageTypes.LOGIN_FAILED,
      'any.required': ErrorMessageTypes.USER_REQUIRED,
      'string.min': ErrorMessageTypes.LOGIN_FAILED,
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.base': ErrorMessageTypes.LOGIN_FAILED,
      'any.required': ErrorMessageTypes.PASSWORD_REQUIRED,
      'string.min': ErrorMessageTypes.LOGIN_FAILED,
    }),
});

export default loginSchema;