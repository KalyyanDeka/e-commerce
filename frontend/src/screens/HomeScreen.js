import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import axios from 'axios';

import './Homescreen.scss';

// import products from '../products';

const HomeScreen = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products/');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="homescreen_products_header">Latest Products</h1>
      <Products products={products} />
    </>
  );
};

export default HomeScreen;
