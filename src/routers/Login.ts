import express from 'express';
import loginController from '../controllers/Login';
import { validateLogin } from '../middlewares/validation';

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.authenticate);

export default loginRouter;