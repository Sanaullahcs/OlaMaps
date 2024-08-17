import React from 'react';
import "../../styles/HomeHeroSec.css";

import {
Button
} from "@mui/material";
const HeroSection = () => {
  
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Offerings of Fribe Platform</h1>
        <h2 className="hero-subheading">The Fribe platform offers a comprehensive suite of tools to build customized maps and location-based applications.</h2>
        <div className="hero-buttons">
          <Button className="hero-button">Get Started Now</Button>
          <Button className="hero-button-contact">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
