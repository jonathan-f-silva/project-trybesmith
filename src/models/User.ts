import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewUser, User, Login } from '../interfaces/User';
import connection from './connection';

const create = async (user: NewUser): Promise<User> => {
  const { username, classe, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);
  `, [username, classe, level, password]);
  return { id: insertId, username, classe, level, password };
};

const getAll = async (): Promise<User[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.Users;
  `);
  return rows as User[];  
};

const getByLogin = async (login: Login) => {
  const { username, password } = login;
  
  const [rows] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?;
  `, [username, password]);

  return rows as User[];
};

export default {
  create,
  getAll,
  getByLogin,
};