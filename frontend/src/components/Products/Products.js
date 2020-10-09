import React from 'react';
import './Products.scss';
import { Link } from 'react-router-dom';

import Rating from '../Rating/Rating';

const Products = ({ products }) => {
  const productCards = (
    <div className="products">
      <div className="products__container">
        {products &&
          products.map((product) => {
            return (
              <div className="item">
                <Link to={`/products/${product._id}`}>
                  <img
                    className="item__image"
                    src={product.image}
                    alt="img"
                    variant="top"
                  />
                </Link>

                <Link to={`/products/${product._id}`}>
                  <h3 className="item__heading">{product.name}</h3>
                </Link>

                <Rating
                  className="item__rating"
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />

                <h3 className="item__price">&#8377;{product.price}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );

  return productCards;
};

export default Products;
