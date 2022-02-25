import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../interfaces/User';
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
  const [users] = await connection.execute(`
    SELECT * FROM Trybesmith.Users;
  `);
  console.log({ users });
  return [];
};

export default {
  create,
  getAll,
};