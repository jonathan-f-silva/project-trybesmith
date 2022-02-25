import { Request, Response } from 'express';
import tokenService from '../services/Token';
import userService from '../services/User';
import { ErrorMessageTypes } from '../utils/ErrorMessages';

const authenticate = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const [user] = await userService.getByLogin({ username, password });
  if (user) {
    res.status(200).send({ token: tokenService.create(user) }).end();
  } else {
    res.status(401).send({ error: ErrorMessageTypes.LOGIN_FAILED }).end();
  }
};

export default {
  authenticate,
};