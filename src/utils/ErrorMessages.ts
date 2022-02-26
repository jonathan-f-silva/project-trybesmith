import HTTPCodes from './HTTPCodes';

type TErrorMessagesTypes = {
  [key: string]: string;
};

type TErrorMessagesCodes = {
  [key: string]: number;
};

const ErrorMessageTypes: TErrorMessagesTypes = {
  USER_REQUIRED: 'Username is required',
  USER_STRING: 'Username must be a string',
  USER_MIN_LENGTH: 'Username must be longer than 2 characters',
  CLASS_REQUIRED: 'Classe is required',
  CLASS_STRING: 'Classe must be a string',
  CLASS_MIN_LENGTH: 'Classe must be longer than 2 characters',
  LEVEL_REQUIRED: 'Level is required',
  LEVEL_NUMBER: 'Level must be a number',
  LEVEL_GREATER_THAN_ZERO: 'Level must be greater than 0',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_STRING: 'Password must be a string',
  PASSWORD_MIN_LENGTH: 'Password must be longer than 7 characters',
  LOGIN_FAILED: 'Username or password invalid',
  TOKEN_NOT_FOUND: 'Token not found',
  TOKEN_INVALID: 'Invalid token',
  PRODUCT_REQUIRED: 'Name is required',
  PRODUCT_STRING: 'Name must be a string',
  PRODUCT_MIN_LENGTH: 'Name must be longer than 2 characters',
  AMOUNT_REQUIRED: 'Amount is required',
  AMOUNT_NUMBER: 'Amount must be a string',
  AMOUNT_MIN_LENGTH: 'Amount must be longer than 2 characters',
};

const ErrorCodeByMessage: TErrorMessagesCodes = {
  [ErrorMessageTypes.USER_STRING]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.USER_REQUIRED]: HTTPCodes.BAD_REQUEST,
  [ErrorMessageTypes.USER_MIN_LENGTH]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.CLASS_REQUIRED]: HTTPCodes.BAD_REQUEST,
  [ErrorMessageTypes.CLASS_STRING]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.CLASS_MIN_LENGTH]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.LEVEL_REQUIRED]: HTTPCodes.BAD_REQUEST,
  [ErrorMessageTypes.LEVEL_NUMBER]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.LEVEL_GREATER_THAN_ZERO]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.PASSWORD_REQUIRED]: HTTPCodes.BAD_REQUEST,
  [ErrorMessageTypes.PASSWORD_STRING]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.PASSWORD_MIN_LENGTH]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.LOGIN_FAILED]: HTTPCodes.UNAUTHORIZED,
  [ErrorMessageTypes.TOKEN_NOT_FOUND]: HTTPCodes.UNAUTHORIZED,
  [ErrorMessageTypes.TOKEN_INVALID]: HTTPCodes.UNAUTHORIZED,
  [ErrorMessageTypes.PRODUCT_REQUIRED]: HTTPCodes.BAD_REQUEST,
  [ErrorMessageTypes.PRODUCT_STRING]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.PRODUCT_MIN_LENGTH]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.AMOUNT_REQUIRED]: HTTPCodes.BAD_REQUEST,
  [ErrorMessageTypes.AMOUNT_NUMBER]: HTTPCodes.UNPROCESSABLE_ENTITY,
  [ErrorMessageTypes.AMOUNT_MIN_LENGTH]: HTTPCodes.UNPROCESSABLE_ENTITY,
};

export { 
  ErrorCodeByMessage,
  ErrorMessageTypes,
};