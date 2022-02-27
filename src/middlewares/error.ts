import { Request, Response } from 'express';
import rescue from 'express-rescue';

import { ErrorCodeByMessage } from '../utils/ErrorMessages';

const errorMiddleware = rescue.from(Error, (err: Error, _req: Request, res: Response) => {
  const { message } = err;
  const code = ErrorCodeByMessage[message];

  if (code) {
    res.status(code).json({ error: message });
  } else {
    // the park is on fire!
    console.log({ err });
    res.status(500).json({ message: 'Oops! Something wrong is not right!' });
  }
});

export default errorMiddleware;