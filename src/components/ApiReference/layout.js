import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Grid } from '@mui/material';
import './layout.css';

// Importing the components dynamically
import APIReference from './APIReferenceComp';
import DocsRouting from './DocsRouting';
import APIsPlaces from './APIsPlaces';
import MapTiles from './MapTiles';
import PlaceSearchAPI from './PlaceSearchAPI';
import SearchPlaceDetailAPI from './SearchPlaceDetailAPI';
import DirectionAPI from './DirectionAPI';
import DistanceAPI from './DistanceAPI';
import NearbySearchAPI from './NearbySearchAPI';

const Documentation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  // Components array to map the selected index
  const components = [
    <APIReference />,
    <PlaceSearchAPI />,
    <SearchPlaceDetailAPI />,
    <DirectionAPI />,
    <DistanceAPI />,
    <NearbySearchAPI />,
    // <DocsRouting />,
    // <APIsPlaces />,
    // <MapTiles />,
   
    
  ];

  return (
    <Box display="flex" className="main-container">
      {/* Sidebar */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className="sidebar-box ">
          <Box className=" responsive-sidebox">
            <List>
              {[
                'API Reference',
                'Place Search API',
                'Search Place Detail API',
                'Direction API',
                'Distance API',
                'Nearby Search API',
                // 'Docs Routing',
                // 'APIs Places',
                // 'Map Tiles',
              
              
              ].map((text, index) => (
                <ListItem
                  key={index}
                  button
                  selected={selectedIndex === index}
                  onClick={() => handleListItemClick(index)}
                  className={`list-item ${selectedIndex === index ? 'selected' : ''}`}
                  id={`list-item-${index}`} // Unique ID for each item
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Content Box */}
          <Box className="content-box">
            {components[selectedIndex]}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Documentation;
