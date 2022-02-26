export interface TokenData {
  username: string;
}

export interface Login extends TokenData {
  password: string;
}

export interface NewUser extends Login {
  classe: string;
  level: number;
}

export interface User extends NewUser {
  id: number;
}

export interface ErrorData {
  error: string;
  code?: number;
}

// type guards -- https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
export const isError = (data: TokenData | ErrorData): data is ErrorData =>
  (data as ErrorData).error !== undefined;