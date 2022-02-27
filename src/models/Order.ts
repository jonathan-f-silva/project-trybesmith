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

const convertRowToOrder = (row: RowDataPacket): ReturnedOrder => {
  const { id, userId, products } = row;
  return {
    id,
    userId,
    products: products.split(',').map((n : string) => Number(n)),
  };
};

const getAll = async (): Promise<ReturnedOrder[]> => {
  const [rows] = await connection.query<RowDataPacket[]>(`
    SELECT o.id,  o.userId, GROUP_CONCAT(p.id) AS products FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
    GROUP BY o.id;
  `);
  return rows.map(convertRowToOrder);
};

const getById = async (id: number): Promise<ReturnedOrder> => {
  const [[row]] = await connection.query<RowDataPacket[]>(`
  SELECT o.id, o.userId, GROUP_CONCAT(p.id) AS products FROM Trybesmith.Orders AS o
  INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
  WHERE o.id = ?;
  `, [id]);

  const result = row as NewOrder;

  if (result.userId === null) throw new Error('Order not found');
  
  return convertRowToOrder(row);
};

export default {
  create,
  getAll,
  getById,
};