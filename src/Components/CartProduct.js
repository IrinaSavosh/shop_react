import React from 'react';

const CartProducts = () => {
  return (
    <div className="cart__left-box">
      <div className="cart__product">
        <img src="../img/Product_4.png" alt="Product" />
        <div className="cart__description-box">
          <h1><b>MANGO PEOPLE T-SHIRT</b></h1>
          <p>Price: <span className="cart__description-box__color-text">$300</span></p>
          <p>Color: Red</p>
          <p>Size: Xl</p>
          <p className="cart__description-box__par">Quantity: <span className="cart__description-box__quantity">2</span></p>
        </div>
        <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector-right" d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z" fill="#575757" />
        </svg>
      </div>
    </div>
  );
};

export default CartProducts;