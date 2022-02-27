import express from 'express';

import orderController from '../controllers/Order';
import { validateNewOrder, validateToken } from '../middlewares/validation';

const orderRouter = express.Router();

orderRouter.post('/', validateToken, validateNewOrder, orderController.create);
orderRouter.get('/', validateToken, orderController.getAll);
orderRouter.get('/:id', validateToken, orderController.getById);

export default orderRouter;