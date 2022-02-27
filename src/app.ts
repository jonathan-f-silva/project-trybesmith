import express from 'express';
import errorMiddleware from './middlewares/error';
import loginRouter from './routers/Login';
import orderRouter from './routers/Order';
import productRouter from './routers/Product';
import userRouter from './routers/User';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.use(errorMiddleware);

export default app;
