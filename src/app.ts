import express from 'express';
import loginRouter from './routers/Login';
import userRouter from './routers/User';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);

export default app;
