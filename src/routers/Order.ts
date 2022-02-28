import express from 'express';

import orderController from '../controllers/Order';
import { validatePost, validateToken } from '../middlewares/validation';

const orderRouter = express.Router();

orderRouter.post('/', validateToken, validatePost, orderController.create);
orderRouter.get('/', validateToken, orderController.getAll);
orderRouter.get('/:id', validateToken, orderController.getById);

export default orderRouter;