import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products/Products';
import { listProducts } from '../store/actions/productActions';
import Message from '../components/Message/Message';
import Spinner from '../components/UI/Spinner/Spinner';

import './Homescreen.scss';

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <h1 className="homescreen_products_header">Latest Products</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Products products={products} />
      )}
    </>
  );
};

export default HomeScreen;
