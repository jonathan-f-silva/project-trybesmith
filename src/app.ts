import express from 'express';
import loginRouter from './routers/Login';
import productRouter from './routers/Product';
import userRouter from './routers/User';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

export default app;
