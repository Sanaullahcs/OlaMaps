import React from "react";
import Nav from "../components/Layout/Nav";
import Hero from "../components/PricingComp/HomeHeader";
import FaqAccordion from "../components/PricingComp/FaqAccordion";
import PricingTable from "../components/PricingComp/PricingTable";
import CommonFooter from "../components/Layout/CommonFooter"
import UseagebasedPricing from "../components/PricingComp/UseagebasedPricing"


function contact() {
  return ( 
     <>
     <Nav />
     <Hero/>
     <PricingTable />
     <UseagebasedPricing/>
     <FaqAccordion />
     <CommonFooter />
     </>
  );
}

export default contact;
