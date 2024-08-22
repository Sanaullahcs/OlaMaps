import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Layout/Nav";
import Hero from "../components/PricingComp/HomeHeader";
import FaqAccordion from "../components/PricingComp/FaqAccordion";
import PricingTable from "../components/PricingComp/PricingTable";
import CommonFooter from "../components/Layout/CommonFooter";
import UseagebasedPricing from "../components/PricingComp/UseagebasedPricing";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      <Nav />
      <Hero />
      <PricingTable />
      <UseagebasedPricing />
      <FaqAccordion />
      <CommonFooter />
    </>
  );
}

export default Contact;
