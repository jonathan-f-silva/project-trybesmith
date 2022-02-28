import Joi from 'joi';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

const newOrderSchema = Joi.object({
  products: Joi.array().required()
    .min(1).items(Joi.number())
    .messages({
      'any.required': ErrorMessageTypes.PRODUCTS_REQUIRED,
      'array.base': ErrorMessageTypes.PRODUCTS_ARRAY,
      'array.min': ErrorMessageTypes.PRODUCTS_MIN_LENGTH,
    }),
});

export default newOrderSchema;