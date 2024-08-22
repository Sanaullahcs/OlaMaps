// HomePage.js
import React from "react";
import "../styles/header.css";
import Nav from "../components/Layout/Nav";
import DownloadsHeader from "../components/Downloads.js/DownloadsHeader";
import DownloadsCards from "../components/Downloads.js/DownloadCards";
import { Helmet } from "react-helmet";

import CommonFooter from "../components/Layout/CommonFooter"

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Downloads</title>
      </Helmet>
      <Nav />
      <DownloadsHeader/>
      <DownloadsCards/>
     
      <CommonFooter />
    </>
  );
};

export default Home;
