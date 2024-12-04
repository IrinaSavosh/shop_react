import React from 'react';
import Main_picture from '../img/Main_picture.png';

const MainSection = () => (
  <>
  <section className="main_section">
    <img src={Main_picture} alt="main picture" />
    <div className="main_section__text_decoration">
      <h2>
        THE BRAND<br />
        <span className="main_section__text_decoration__bold_type">OF LUXERIOUS</span>
        <span className="main_section__text_decoration__select_text_color">FASHION</span>
      </h2>
    </div>
  </section>
  </>
);

export default MainSection;