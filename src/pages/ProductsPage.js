// HomePage.js
import React from "react";
import "../styles/header.css";
import Nav from "../components/Layout/Nav";
import ProductsPage from "../components/ProductComponents/ProductsHeader";
import CommonFooter from "../components/Layout/CommonFooter"
import FAQS from "../components/ProductComponents/FAQS"

const Home = () => {
  return (
    <>
    
      <Nav />
      <ProductsPage/>
      <FAQS />

      <CommonFooter />
    </>
  );
};

export default Home;
