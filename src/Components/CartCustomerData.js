import React from 'react';

const CartCustomerData = () => {
  return (
    <div className="cart__customer-data">
      <h3>SHIPPING ADRESS</h3>
      <input type="text" placeholder="Bangladesh" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Postcode / Zip" />
      <button>G<span>ET A QUOTE</span> </button>
    </div>
  );
};

export default CartCustomerData;