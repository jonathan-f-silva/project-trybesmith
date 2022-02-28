import express from 'express';
import userController from '../controllers/User';

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);

export default userRouter;