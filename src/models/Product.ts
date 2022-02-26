import { ResultSetHeader } from 'mysql2';
import { NewProduct, Product } from '../interfaces/Product';
import connection from './connection';

const create = async (product: NewProduct): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);
  `, [name, amount]);
  return { id: insertId, name, amount };
};

// const [rows] = await connection.execute<RowDataPacket[]>(`
//   SELECT * FROM Trybesmith.Products;
// `);
// const products: Product[] = rows.map((row) => {
//   const { productname, classe, level } = row;
//   return { id: row.id, productname, classe, level };
// });
const getAll = async (): Promise<Product[]> => [];

export default {
  create,
  getAll,
};