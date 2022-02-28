import express from 'express';
import productController from '../controllers/Product';
import { validatePost, validateToken } from '../middlewares/validation';

const productRouter = express.Router();

productRouter.post('/', validateToken, validatePost, productController.create);
productRouter.get('/', validateToken, productController.getAll);

export default productRouter;