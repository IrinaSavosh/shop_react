import React, { useState, useEffect } from 'react';
import Product from './Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error loading products:', error));
  }, []);

  return (
    <>
      <h1 className="title">Featured Items</h1>
      <p className="description">Shop for items based on what we featured in this week</p>
      <div className="product-box center">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            size={product.size}
          />
        ))}
      </div>
      <div className="hidden">
        <button className="hidden__btn_down">Browse All Products</button>
      </div>
    </>
  );
};

export default Products;
