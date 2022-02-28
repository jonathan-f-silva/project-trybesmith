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
