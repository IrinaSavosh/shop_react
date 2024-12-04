import React from 'react';
import Truck from '../img/Truck.png';
import Sales from '../img/Sales.png';
import Crown from '../img/Crown.png';

const Advantages = () => (
  <section className="product-box center boxes-of-advantages">
    <div className="boxes-of-advantages__box">
      <img src={Truck} alt="Truck" />
      <h2>Free Delivery</h2>
      <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
    </div>
    <div className="boxes-of-advantages__box">
      <img src={Sales} alt="" />
      <h2>Sales & discounts</h2>
      <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
    </div>
    <div className="boxes-of-advantages__box">
      <img src={Crown} alt="" />
      <h2>Quality assurance</h2>
      <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
    </div>
  </section>
);

export default Advantages;