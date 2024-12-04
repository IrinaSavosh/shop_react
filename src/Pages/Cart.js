import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopHead from '../Components/TopHead';
import CartProducts from '../Components/CartProduct';
import CartCustomerData from '../Components/CartCustomerData';
import CartTotal from '../Components/CartTotal';
import Advantages from '../Components/Advantages';
import '../styles/style-cart.scss';

const Cart = () => {
  return (
    <>
      <Header />
      <TopHead />
      <div className="cart center">
        <CartProducts />
        <div className="cart__right-box">
          <CartCustomerData />
          <CartTotal />
        </div>
      </div>
      <Advantages/>
      <Footer />
    </>
  );
};

export default Cart;