import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import Product from './models/productModel.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoute.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

dotenv.config();

connectDB();

const port = process.env.PORT;

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('listening port', port);
  }
});
