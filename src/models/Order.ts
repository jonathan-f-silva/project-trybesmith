import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewOrder, Order } from '../interfaces/Order';
import connection from './connection';

const create = async (order: NewOrder): Promise<Order> => {
  const { userId, products } = order;
  const [{ insertId }] = await connection.query<ResultSetHeader>(`
    INSERT INTO Trybesmith.Orders (userId) VALUES (?);
  `, [userId]);
  await connection.query<ResultSetHeader>(`
    UPDATE Trybesmith.Products SET orderId = ? WHERE id IN ( ? );
  `, [insertId, products]);
  return { order: { userId, products } };
};

const getAll = async (): Promise<Order[]> => {
  const [rows] = await connection.query<RowDataPacket[]>(`
    SELECT * FROM Trybesmith.Orders
    INNER JOIN Trybesmith.Products
    ON Trybesmith.Orders.id = Trybesmith.Products.orderId;
  `);
  return rows as Order[];
};

export default {
  create,
  getAll,
};