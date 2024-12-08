import React from 'react';
import MainHero from "../../../src/sections/shop/main-hero/mainHero";
import AllProducts from "../../../src/sections/shop/all-products/allProducts"; 
import Badges from '../../../src/sections/shop/Badges/badges';
const Shop = () => {
  return (
    <>
      {/* Main Hero Section */}
      <MainHero />
      <AllProducts /> {/* Use AllProducts instead of allProducts */}
      <Badges/>

      {/* Additional Shop Page Content */}
      {/* <h1>Shop</h1>
      <p>Welcome to the About page. Learn more about our story here!</p> */}
    </>
  );
}

export default Shop;
