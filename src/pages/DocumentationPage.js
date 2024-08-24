import React from "react";
// import DocumentationNav from "../components/Dacumentations/DocumentationNav";
import CommonFooter from "../components/Layout/CommonFooter"
import Dacumentations from "../components/Dacumentations/overview"
import { Helmet } from "react-helmet";


import Nav from "../components/Layout/Nav";
function contact() {
  return ( 
     <>
      <Helmet>
        <title>Documentation</title>
      </Helmet>
      <Nav />
{/* <Dacumentations /> */}

   
     <CommonFooter />
     </>
  );
}

export default contact;
