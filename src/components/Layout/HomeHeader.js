import React from 'react';
import "../../styles/HomeHeroSec.css";

import {
Button
} from "@mui/material";
const HeroSection = () => {
  
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Optimize Routes & Discover Points of Interest</h1>
        <h2 className="hero-subheading">Fribe opens doors to location innovation. Explore endless opportunities with our advanced APIs for precise directions, nearby search, and seamless integration. Join the journey now.</h2>
        <div className="hero-buttons">
          <Button className="hero-button">Get Started Now</Button>
          <Button className="hero-button-contact">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
