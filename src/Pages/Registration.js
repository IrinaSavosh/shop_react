import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopHead from '../Components/TopHead';
import RegistrationForm from '../Components/RegistrationForm';
import LoyaltyPerks from '../Components/LoyaltyPerks';
import Advantages from '../Components/Advantages';
import '../styles/style-reg.scss';

const Registration = () => {
  return (
    <>
      <Header />
      <TopHead />
      <div className="cart center">
        <RegistrationForm />
        <LoyaltyPerks />
      </div>
      <Advantages/>
      <Footer />
    </>
  );
};

export default Registration;