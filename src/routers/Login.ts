import express from 'express';
import loginController from '../controllers/Login';
import { validatePost } from '../middlewares/validation';

const loginRouter = express.Router();

loginRouter.post('/', validatePost, loginController.authenticate);

export default loginRouter;