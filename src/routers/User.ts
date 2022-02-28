import express from 'express';
import userController from '../controllers/User';
import { validatePost } from '../middlewares/validation';

const userRouter = express.Router();

userRouter.post('/', validatePost, userController.create);
userRouter.get('/', userController.getAll);

export default userRouter;