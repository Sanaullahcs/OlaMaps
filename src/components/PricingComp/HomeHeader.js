import React from 'react';
import "../../styles/HomeHeroSec.css";

import {
Button
} from "@mui/material";
const HeroSection = () => {
  
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Navigate Smarter, Pay Smarter</h1>
        <h2 className="hero-subheading">It's time to make a change. Fribe is here to revolutionize your mapping experience. Don't settle for less – switch to Fribe and unlock superior mapping capabilities today!</h2>
        <div className="hero-buttons">
          <Button className="hero-button">Get Started Now</Button>
          <Button className="hero-button-contact">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
