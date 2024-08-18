import React from 'react';
import { Grid, Box } from '@mui/material';
import "../../styles/pricingCards.css";

// Import images from the gallery
import iosImage from '../../assets/images/ios.svg';
import androidImage from '../../assets/images/anroid.svg';
import mapsIosImage from '../../assets/images/routing-map.svg';
import mapsAndroidImage from '../../assets/images/auto-map.svg';
import analyticsIosImage from '../../assets/images/tiles-map.svg';
import analyticsAndroidImage from '../../assets/images/api-map.svg';

// SdkCard Component
// SdkCard Component
const SdkCard = ({ image, heading, subheading, primaryButton, secondaryButton }) => {
    return (
      <div className="sdk-card-container">

        <div className="sdk-image-container">
          <img src={image} alt={heading} style={{ width: '100px', height: '100px' }} /> {/* Adjust size as needed */}
        </div>
        <div className="sdk-card-heading">
          {heading}
        </div>
        <div className="sdk-card-subheading">
          {subheading}
        </div>
        <div className="sdk-button-container">
          {/* Conditionally render primary button if it's provided */}
          {primaryButton && <button className="sdk-button-primary">{primaryButton}</button>}
          <button className="sdk-button-outline">{secondaryButton}</button>
        </div>
      </div>
    );
  };
  
// ResponsiveLayout Component
const ResponsiveLayout = () => {
    return (
     <div className='sdk-width'>
          <h1 className="hero-heading-pricing">Comprehensive Mapping<br></br> Solutions</h1>
        <h2 className="hero-subheading-pricing">Enhance mobile and web applications with our robust suite of mapping tools, including real-time navigation, dynamic map tiles, precise routing, and advanced location search.</h2>
       <Box className="responsive-layout">
        <Grid container spacing={2}>
          {/* First Card */}
          <Grid item xs={12} sm={6}>
            <SdkCard 
              image={iosImage} 
              heading="Navigation SDK For IOS >" 
              subheading="Add turn-by-turn navigation UI to your iOS apps" 
              primaryButton="Download" 
              secondaryButton="Documentation" 
            />
          </Grid>
  
          {/* Second Card */}
          <Grid item xs={12} sm={6}>
            <SdkCard 
              image={androidImage} 
              heading="Navigation SDK For Android >" 
              subheading="Add turn-by-turn navigation UI to your Android apps" 
              primaryButton="Download" 
              secondaryButton="Documentation" 
            />
          </Grid>
  
          {/* Third Card */}
          <Grid item xs={12} sm={6} mt={5}>
            <SdkCard 
              image={mapsIosImage} 
              heading="Routing Engine >" 
              subheading="Generate accurate and optimised routes to plan journeys effectively." 
              secondaryButton="Documentation" 
            />
          </Grid>
  
          {/* Fourth Card */}
          <Grid item xs={12} sm={6} mt={5}>
            <SdkCard 
              image={mapsAndroidImage} 
              heading="Autocompletion >" 
              subheading="Provide relevant search suggestions based on geographical data." 
              secondaryButton="Documentation" 
            />
          </Grid>
  
          {/* Fifth Card */}
          <Grid item xs={12} sm={6} mt={5}>
            <SdkCard 
              image={analyticsIosImage} 
              heading="Map Tiles >" 
              subheading="Render rich, dynamic and interactive maps with ease." 
              secondaryButton="Documentation" 
            />
          </Grid>
  
          {/* Sixth Card */}
          <Grid item xs={12} sm={6} mt={5}>
            <SdkCard 
              image={analyticsAndroidImage} 
              heading="Geocoding API >" 
              subheading="Fetch geo coordinates from addresses and human-readable place names." 
              secondaryButton="Documentation" 
            />
          </Grid>
        </Grid>
      </Box>
     </div>
    );
  };
  
  export default ResponsiveLayout;
  