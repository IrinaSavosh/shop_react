import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-content">
      <h2>WOMEN COLLECTION</h2>
      <p className="product-content__border-top"></p>
      <h3>{product.name}</h3>

      <p className="product-content__characterization">{product.description}</p>
      <p className="product-content__price">${product.price}</p>
      <p className="product-content__border-bottom"></p>
      
      <div className="filter-sort center">
        <div className="sort">
          <details className="sort__details">
            <summary className="sort__summary">
              <span className="sort__heading">CHOOSE COLOR</span>
              <img src="../img/Vector.svg" alt="Vector" />
            </summary>
            <div className="sort__box">
              {['Black', 'Red', 'White', 'Blue'].map((color, index) => (
                <div className="sort__check" key={index}>
                  <input id={`color_${index}`} type="checkbox" />
                  <label htmlFor={`color_${index}`}>{color}</label>
                </div>
              ))}
            </div>
          </details>
          <details className="sort__details">
            <summary className="sort__summary">
              <span className="sort__heading">CHOOSE SIZE</span>
              <img src="../img/Vector.svg" alt="Vector" />
            </summary>
            <div className="sort__box">
              {['XS', 'S', 'L', 'XL'].map((size, index) => (
                <div className="sort__check" key={index}>
                  <input id={`size_${index}`} type="checkbox" />
                  <label htmlFor={`size_${index}`}>{size}</label>
                </div>
              ))}
            </div>
          </details>
          <details className="sort__details">
            <summary className="sort__summary">
              <span className="sort__heading">QUANTITY</span>
              <img src="../img/Vector.svg" alt="Vector" />
            </summary>
          </details>
        </div>
      </div>
      
      <div className="product-content__button-box">
        <button className="product-content__button">
          {/* SVG Cart Icon */}
          <span className="button_text">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
