import React from 'react';
import "../../styles/DownloadPage.css";

import {
Button
} from "@mui/material";
const HeroSection = () => {
  
  return (
    <div className="hero-section-downloads">
      <div className="hero-content">
      <Button className="downloadPage-button">Find all your developer resources here...</Button>
        <h1 className="hero-heading-downloads">Downloads</h1>
        <h2 className="hero-subheading">Download our Navigation SDKs and start building your own map experience for your platform</h2>
        <div className="hero-buttons">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
