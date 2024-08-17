import React from 'react';
import { Grid, Box, Typography, Chip } from '@mui/material';
import "../../styles/pricingCards.css";

// Import images
import FirstImage from '../../assets/images/MapsVector.svg';
import SecondImage from '../../assets/images/Routing.svg';
import ThirdImage from '../../assets/images/webcard.svg';
import FourthImage from '../../assets/images/location.svg';

// MapsMenu Component
const MapsMenu = ({ image, title, menuItems }) => {
  return (
    <Box className="menu-container">
      <Box className="header" mb={7}>
        <img src={image} alt="Icon" className="menu-icon" />
        <Typography variant="h6" className="menu-title">{title}</Typography>
      </Box>
      {menuItems.map((item, index) => (
        <Box
          key={index}
          className={`menu-item ${index !== 0 ? 'border-top' : ''}` } // Add border top to all except the first
        >
          <Typography className="menu-text" mb={1} >{item.label}</Typography>
          <Chip label={item.type} className={item.type === 'API' ? 'chip-api' : 'chip-sdk'} />
        </Box>
      ))}
    </Box>
  );
};

// ResponsiveLayout Component
const ResponsiveLayout = () => {
  const menuItems1 = [
    { label: '2D & 3D Map Tiles', type: 'API' },
    { label: 'Static & Dynamic Maps', type: 'API' },
    { label: 'Mobile Native Maps', type: 'API' },
    { label: 'Street View Tiles', type: 'API' },
    { label: 'Aerial View', type: 'API' },
    { label: 'Air Quality', type: 'API' },
    { label: 'Maps SDK Android & iOS', type: 'SDK' },
    { label: 'Offline Maps', type: 'SDK' },
    { label: 'Weather information', type: 'SDK' },


  ];
  
  const menuItems2 = [
    { label: 'Directions Route Matrix', type: 'API' },
    { label: 'Distance Matrix', type: 'API' },
    { label: 'Roads', type: 'API' },
    { label: 'Single Vehicle Routing', type: 'API' },
    { label: 'Fleet Routing', type: 'API' },
    { label: 'Roads - Speed Limits', type: 'API' },
    { label: 'Navigation Experience', type: 'SDK' },
   
  ];

  const menuItems3 = [
    { label: 'Heatmaps', type: 'SDK' },
    { label: 'Marker Clustering', type: 'SDK' },
    { label: 'Custom styling', type: 'SDK' },
    { label: 'Map Types', type: 'SDK' },
    { label: 'Custom overlays', type: 'SDK' },
    { label: 'WebGL overlay', type: 'SDK' },
  ];

  const menuItems4 = [
    { label: 'Autocomplete', type: 'API' },
    { label: 'Geocoding', type: 'API' },
    { label: 'Places Details', type: 'API' },
    { label: 'Places Nearby Search', type: 'API' },
    { label: 'Address Validation', type: 'API' },
    { label: 'Places Photo', type: 'API' },
    { label: 'Geolocation', type: 'API' },
    { label: 'Elevation', type: 'API' },
    { label: 'Places SDK Android & iOS', type: 'SDK' },

  ];

  return (
    <Box className="responsive-layout">
      <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6}>
          <Box className="card-container card-1">
            <MapsMenu
              image={FirstImage}
              title="Maps"
              menuItems={menuItems1}
            />
          </Box>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} sm={6}>
          <Box className="card-container card-2">
            <MapsMenu
              image={SecondImage}
              title="Routes"
              menuItems={menuItems2}
            />
          </Box>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} sm={6} mt={5}>
          <Box className="card-container card-3">
            <MapsMenu
              image={ThirdImage}
              title="Web SDK"
              menuItems={menuItems3}
            />
          </Box>
        </Grid>

        {/* Fourth Card */}
        <Grid item xs={12} sm={6}  mt={5}>
          <Box className="card-container card-4">
            <MapsMenu
              image={FourthImage}
              title="Places"
              menuItems={menuItems4}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveLayout;
