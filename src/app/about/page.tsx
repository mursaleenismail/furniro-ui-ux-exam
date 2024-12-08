import React from 'react';
import MainHero from "../../../src/sections/about/main-hero/mainHero";
import AllProducts from "../../../src/sections/shop/all-products/allProducts"; 
import Badges from '../../../src/sections/shop/Badges/badges';

const About = () => {
  return (
    <>
      {/* Main Hero Section */}
      <MainHero />
      <AllProducts /> 
      <Badges/>
      
    </>
  );
}

export default About;
