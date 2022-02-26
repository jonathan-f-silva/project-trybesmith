import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, Product } from '../interfaces/Product';
import connection from './connection';

const create = async (product: NewProduct): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);
  `, [name, amount]);
  return { id: insertId, name, amount };
};

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.Products;
  `);
  return rows as Product[];
};

export default {
  create,
  getAll,
};