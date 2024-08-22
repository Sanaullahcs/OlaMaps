import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid, Typography, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import "../../styles/homeCarousel.css";

// Directly import images
import userIcon from "../../assets/images/userIcon.svg";
import apiIcon from "../../assets/images/apiIcon.svg";
import vehicleIcon from "../../assets/images/vehicleIcon.svg";
import businessIcon from "../../assets/images/businessIcon.svg";
import homeMap from "../../assets/images/homeMap.png";

// Define the headings and subheadings
const items = [
  { heading: "100m+", subheading: "Active Users" },
  { heading: "35b+", subheading: "API calls/month" },
  { heading: "10m+", subheading: "Vehicles connected" },
  { heading: "30m+", subheading: "Businesses & places" },
];

const customIcons = [userIcon, apiIcon, vehicleIcon, businessIcon];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ResponsiveRow = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm')); // Use media query for small screens
  const isMdDown = useMediaQuery(theme.breakpoints.down('md')); // Use media query for medium screens

  return (
   <div className="gamer-container ">  
     <Grid container spacing={2} justifyContent={isSmDown ? 'center' : 'flex-start'}>
      {items.map((item, index) => (
        <Grid item xs={6} sm={6} md={3} key={index}>
          <Box 
            display="flex" 
            flexDirection="row"
            alignItems="center" 
            justifyContent="space-between" 
            textAlign={{ xs: 'center', sm: 'left' }}
            position="relative" 
            px={2} 
          >
            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems={isSmDown ? 'center' : 'flex-start'} // Center align on small screens
              textAlign={{ xs: 'center', sm: 'left' }}
            >
              <Typography style={{ marginLeft: isSmDown ? 0 : 10 }} className="heading-first">
                {item.heading}
              </Typography>

              <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                <IconButton>
                  <img src={customIcons[index]} alt={`Icon ${index + 1}`} style={{ width: 24, height: 24 }} />
                </IconButton>
                <Typography variant="subtitle1" ml={1} className="heading-sec">
                  {item.subheading}
                </Typography>
              </Box>
            </Box>
            
            {!isMdDown && index < items.length - 1 && ( 
              <Box
                sx={{
                  width: '1px',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                  position: 'absolute',
                  right: 0,
                  top: 0,
                }}
              />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
   </div>
  );
};

export default function CombinedComponent() {
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={homeMap} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={homeMap} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={homeMap} alt="Slide 3" className="slider-image" />
          </div>
        </Slider>
      </div>
      <div style={{ marginTop: '100px' }} className="slider-container-icon">
        <ResponsiveRow />
      </div>
    </div>
  );
}
