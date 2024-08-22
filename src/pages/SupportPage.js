// HomePage.js
import React from "react";
import "../styles/header.css";
import Nav from "../components/Layout/Nav";
import SupportHeader from "../components/SupportPage/Supportheader";
import CommonFooter from "../components/Layout/CommonFooter"
import FAQS from "../components/SupportPage/FAQS"
import SupportingCards from "../components/SupportPage/SupportingCards"
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Support</title>
      </Helmet>
      <Nav />
      <SupportHeader />
      <SupportingCards/>
      
      <FAQS />

      <CommonFooter />
    </>
  );
};

export default Home;
