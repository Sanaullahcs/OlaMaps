import React from "react";
import DocumentationNav from "../components/Dacumentations/DocumentationNav";
import CommonFooter from "../components/Layout/CommonFooter"
import MiddleContent from "../components/ApiReference/layout"
import { Helmet } from "react-helmet";




function contact() {
  return ( 
     <>
      <Helmet>
        <title>Api Reference</title>
      </Helmet>
     <DocumentationNav />
<MiddleContent />

   
     <CommonFooter />
     </>
  );
}

export default contact;
