import React from "react";
// import DocumentationNav from "../components/Dacumentations/DocumentationNav";
import CommonFooter from "../components/Layout/CommonFooter"
import MiddleContent from "../components/ApiReference/layout"
import { Helmet } from "react-helmet";
import Nav from "../components/Layout/Nav";



function contact() {
  return ( 
     <>
      <Helmet>
        <title>Api Reference</title>
      </Helmet>    
      <Nav />
     {/* <DocumentationNav /> */}
<MiddleContent />

   
     <CommonFooter />
     </>
  );
}

export default contact;
