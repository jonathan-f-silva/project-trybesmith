import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewOrder, Order, ReturnedOrder } from '../interfaces/Order';
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

const getById = async (id: number): Promise<ReturnedOrder> => {
  const [[row]] = await connection.query<RowDataPacket[]>(`
  SELECT o.userId, GROUP_CONCAT(p.id) AS products FROM Trybesmith.Orders AS o
  INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
  WHERE o.id = ?;
  `, [id]);

  const result = row as NewOrder;

  if (result.userId === null) throw new Error('Order not found');
  
  return {
    id,
    userId: row.userId,
    products: row.products.split(',').map((n : string) => Number(n)),
  };
};

export default {
  create,
  getAll,
  getById,
};