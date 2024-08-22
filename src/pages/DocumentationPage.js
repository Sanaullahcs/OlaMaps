import React from "react";
import DocumentationNav from "../components/Dacumentations/DocumentationNav";
import CommonFooter from "../components/Layout/CommonFooter"
import Dacumentations from "../components/Dacumentations/overview"
import { Helmet } from "react-helmet";



function contact() {
  return ( 
     <>
      <Helmet>
        <title>Documentation</title>
      </Helmet>
     <DocumentationNav />
<Dacumentations />

   
     <CommonFooter />
     </>
  );
}

export default contact;
