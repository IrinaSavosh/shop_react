import React from 'react';
import For_women from '../img/For_women.png';
import For_men from '../img/For_men.png';
import For_kids from '../img/For_kids.png';
import Accesories from '../img/Accesories.png';

const Categories = () => (
  <section className="product-box center categories">
    <div className="items widthTablet">
      <div className="item eclipse">
        <img src={For_women} alt="For women" />
        <div className="eclipse__filter"></div>
      </div>
      <div className="item">
        <p>30% OFF</p>
        <h2>FOR WOMEN</h2>
      </div>
    </div>
    <div className="items widthTablet">
      <div className="item eclipse">
        <img src={For_men} alt="For men" />
        <div className="eclipse__filter"></div>
      </div>
      <div className="item">
        <p>HOT DEAL</p>
        <h2>FOR MEN</h2>
      </div>
    </div>
    <div className="items widthTablet">
      <div className="item eclipse">
        <img src={For_kids} alt="For kids" />
        <div className="eclipse__filter"></div>
      </div>
      <div className="item">
        <p>NEW ARRIVALS</p>
        <h2>FOR KIDS</h2>
      </div>
    </div>
    <div className="items heightPhone">
      <div className="item eclipse">
        <img className="heightPhone" src={Accesories} alt="ACCESORIES" />
        <div className="eclipse__filter"></div>
      </div>
      <div className="item">
        <p>LUXIROUS & TRENDY</p>
        <h2>ACCESORIES</h2>
      </div>
    </div>
  </section>
);

export default Categories;