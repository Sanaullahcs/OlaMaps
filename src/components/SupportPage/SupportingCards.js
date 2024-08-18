import React from 'react';
import { Grid, Box } from '@mui/material';
import "../../styles/pricingCards.css";

import iosImage from '../../assets/images/team-talk.svg';
import androidImage from '../../assets/images/tech-support.svg';

const SdkCard = ({ image, heading, subheading, primaryButton, linkText, linkUrl }) => {
  return (
    <div className="sdk-card-container-support">
      <div className="sdk-image-container">
        <img src={image} alt={heading} style={{ width: '100px', height: '100px' }} /> 
      </div>
      <div className="sdk-card-heading">
        {heading}
      </div>
      <div className="sdk-card-subheading">
        {subheading}
      </div>
      {linkUrl && (
        <div className="sdk-card-link">
          <a href={linkUrl} className="sdk-link">
            {linkText}
          </a>
        </div>
      )}
      <div className="sdk-button-container">
        {primaryButton && <button className="sdk-button-support">{primaryButton}</button>}
      </div>
    </div>
  );
};

const ResponsiveLayout = () => {
  return (
    <div className='sdk-width'>
      <Box className="responsive-layout">
        <Grid container spacing={2}>
     
          <Grid item xs={12} sm={6}>
            <SdkCard 
              image={iosImage} 
              heading={
                <>
                  Talk to our <br /> Sales team
                </>
              } 
              subheading="Discuss your requirements, learn about custom pricing, or request a demonstration from our team." 
              primaryButton="Contact Sales"
             linkText="maps.sales@olakrutrim.com"
              linkUrl="https://example.com/support"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SdkCard 
              image={androidImage} 
              heading={ 
                <>
                  Technical <br /> Support
                </>
              }
              subheading="Get help with our products, troubleshoot issues, or ask for expert advice." 
              primaryButton="Contact Support" 
              linkText="maps.sales@olakrutrim.com"
              linkUrl="https://example.com/support"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ResponsiveLayout;
