const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const app = express();
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

dotenv.config();

connectDB();

app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
