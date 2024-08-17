// HomePage.js
import React from "react";
import "../styles/header.css";
import Nav from "../components/Layout/Nav";
import Hero from "../components/Layout/HomeHeader";
import HomeCarousel from "../components/Layout/HomeCarousel"
import HomeEco from "../components/Layout/HomeEco"
import ClearCost from "../components/Layout/ClearCost"
import CommonFooter from "../components/Layout/CommonFooter"

const Home = () => {
  return (
    <>
    
      <Nav />
      <Hero/>
      <HomeCarousel />
      <HomeEco/>
      <ClearCost/>
      <CommonFooter />
    </>
  );
};

export default Home;
