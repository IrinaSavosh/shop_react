import React from 'react';
import productsData from '../productsData';

const ProductList = () => (
  <div className="product-box center">
    {productsData.map((product) => (
      <div className="product" key={product.id}>
        <img className="product__img" src={product.image} alt={product.name} />
        <div className="product__content">
          <a href={`/product/${product.id}`} className="product__name">
            {product.name}
          </a>
          <p className="product__text">{product.description}</p>
          <p className="product__price">${product.price.toFixed(2)}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
