import Joi from 'joi';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

const newProductSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({
      'any.required': ErrorMessageTypes.PRODUCT_REQUIRED,
      'string.base': ErrorMessageTypes.PRODUCT_STRING,
      'string.min': ErrorMessageTypes.PRODUCT_MIN_LENGTH,
    }),
  amount: Joi.string()
    .min(3)
    .required()
    .messages({
      'any.required': ErrorMessageTypes.AMOUNT_REQUIRED,
      'string.base': ErrorMessageTypes.AMOUNT_NUMBER,
      'string.min': ErrorMessageTypes.AMOUNT_MIN_LENGTH,
    }),
  
});

export default newProductSchema;