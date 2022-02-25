import express from 'express';
import userController from '../controllers/User';
import validateNewUser from '../middlewares/User';

const userRouter = express.Router();

userRouter.post('/', validateNewUser, userController.create);
userRouter.get('/', userController.getAll);

export default userRouter;