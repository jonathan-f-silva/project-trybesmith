import express from 'express';
import productController from '../controllers/Product';
import { validateNewProduct, validateToken } from '../middlewares/validation';

const productRouter = express.Router();

productRouter.post('/', validateToken, validateNewProduct, productController.create);
productRouter.get('/', validateToken, productController.getAll);

export default productRouter;