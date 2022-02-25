export interface NewUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface User extends NewUser {
  id: number;
}
