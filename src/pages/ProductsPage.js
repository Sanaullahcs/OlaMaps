// HomePage.js
import React from "react";
import "../styles/header.css";
import Nav from "../components/Layout/Nav";
import ProductsPage from "../components/ProductComponents/ProductsHeader";
import CommonFooter from "../components/Layout/CommonFooter"
import FAQS from "../components/ProductComponents/FAQS"
import MappingCards from "../components/ProductComponents/MappingCards"
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Products</title>
      </Helmet>
      <Nav />
      <ProductsPage/>
      <MappingCards/>
      
      <FAQS />

      <CommonFooter />
    </>
  );
};

export default Home;
