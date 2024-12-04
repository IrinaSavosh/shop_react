import React from 'react';
import Background from '../img/Background.png';
import Foto from '../img/Foto.png';
import Facebook from '../img/facebook.svg';
import Insta from '../img/insta.svg';
import Pinta from '../img/pinta.svg';
import Twitter from '../img/twitter.svg';

const Footer = () => (
  <footer>
    <section className="items">
      <div className="item img_background">
        <img className="img_background__back" src={Background} alt="Image background" />
      </div>
      <div className="item block2">
        <div className="block2__box1">
          <img src={Foto} alt="Foto" />
          <h6>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</h6>
        </div>
        <div className="block2__box2">
          <h3>SUBSCRIBE</h3>
          <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
          <form action="form" className="form">
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    <section className="center footer_navigation">
      <p>© 2023 Brand All Rights Reserved.</p>
      <nav className="footer_navigation__link">
        <a href="#"><img src={Facebook} alt="Logo" /></a>
        <a href="#"><img src={Insta} alt="Logo instagram" /></a>
        <a href="#"><img src={Pinta} alt="Logo pinterest" /></a>
        <a href="#"><img src={Twitter} alt="Logo twitter" /></a>
      </nav>
    </section>
  </footer>
);

export default Footer;