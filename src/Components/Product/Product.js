import React from 'react';
import PropTypes from 'prop-types';
// import './Product.css';

const Product = ({ name, description, price, image, size }) => {
  return (
    <div className="product">
      <img className="product__img" src={image} alt={name} />
      <div className="product__content">
        <a href="#" className="product__name">{name}</a>
        <p className="product__text">{description}</p>
        <p className="product__price">${price.toFixed(2)}</p>
        <p className="product__size">Size: {size}</p>
      </div>
    </div>
  );
};

// Пропсы для валидации
Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default Product;
