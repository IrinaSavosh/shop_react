import React from 'react';

const CartTotal = () => {
  return (
    <div className="cart__total-box">
      <p>SUB TOTAL $900</p>
      <h3>
        GRAND TOTAL <span><b>$900</b></span>
      </h3>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default CartTotal;