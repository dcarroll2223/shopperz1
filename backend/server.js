import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data from './data.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(400).send({ message: 'Product Not Found' });
  }
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`served at http://localhost:${port}`);
});
