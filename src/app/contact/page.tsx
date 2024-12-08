import React from 'react';
import MainHero from "../../../src/sections/contact/main-hero/mainHero";
import Form from "../../../src/sections/contact/Form/Form"; 
import Badges from '../../../src/sections/shop/Badges/badges';

const Contact = () => {
  return (
    <>
      {/* Main Hero Section */}
      <MainHero />
      <Form/>
      <Badges/>
    </>
  );
}

export default Contact;
