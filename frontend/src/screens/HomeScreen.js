import React, { useEffect } from 'react';
import Meta from "../components/Meta";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products/Products';
import { listProducts } from '../store/actions/productActions';
import Message from '../components/Message/Message';
import Spinner from '../components/UI/Spinner/Spinner';
import Paginate from "../components/Paginate"

import './Homescreen.scss';
import ProductCarousel from '../components/Carousel/ProductCarousel';

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link>}
      {products && <h1 className="homescreen_products_header">Latest Products</h1>}
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (<>
        <Products products={products} />
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
