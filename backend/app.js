import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import messageRoutes from './routes/messageRoutes.js';
import groupRoutes from './routes/groupRoutes.js'
import cookeParser from 'cookie-parser';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookeParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/group',groupRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use(errorHandler);

export default app;
