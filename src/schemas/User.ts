import Joi from 'joi';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

const newUserSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.base': ErrorMessageTypes.USER_STRING,
      'any.required': ErrorMessageTypes.USER_REQUIRED,
      'string.min': ErrorMessageTypes.USER_MIN_LENGTH,
    }),
  classe: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.base': ErrorMessageTypes.CLASS_STRING,
      'any.required': ErrorMessageTypes.CLASS_REQUIRED,
      'string.min': ErrorMessageTypes.CLASS_MIN_LENGTH,
    }),
  level: Joi.number()
    .integer()
    .min(1)
    .strict()
    .required()
    .messages({
      'number.base': ErrorMessageTypes.LEVEL_NUMBER,
      'number.integer': ErrorMessageTypes.LEVEL_NUMBER,
      'any.required': ErrorMessageTypes.LEVEL_REQUIRED,
      'number.min': ErrorMessageTypes.LEVEL_GREATER_THAN_ZERO,
    }),
  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.base': ErrorMessageTypes.PASSWORD_STRING,
      'any.required': ErrorMessageTypes.PASSWORD_REQUIRED,
      'string.min': ErrorMessageTypes.PASSWORD_MIN_LENGTH,
    }),
});

export default newUserSchema;