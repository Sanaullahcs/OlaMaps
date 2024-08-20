import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import './layout.css'; // Importing the CSS file

import APIReference from './APIReferenceComp';
import DocsRouting from './DocsRouting';
import APIsPlaces from './APIsPlaces';
import MapTiles from './MapTiles';

const Documentation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  // Function to render the selected component
  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return <APIReference />;
      case 1:
        return <DocsRouting />;
      case 2:
        return <APIsPlaces />;
      case 3:
        return <MapTiles />;
      default:
        return <APIReference />;
    }
  };

  return (
    <Box display="flex" className="main-container">
      {/* Sidebar */}
      <Box className="sidebar">
        <Box className="sidebar-box">
          <List>
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={() => handleListItemClick(0)}
              className={`list-item ${selectedIndex === 0 ? 'selected' : ''}`}
            >
              <ListItemText sx={{borderBottom:'1px solid #00000024',paddingBottom:'20px'}} primary="API Reference" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={() => handleListItemClick(1)}
              className={`list-item ${selectedIndex === 1 ? 'selected' : ''}`}
            >
              <ListItemText primary="Docs Routing" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={() => handleListItemClick(2)}
              className={`list-item ${selectedIndex === 2 ? 'selected' : ''}`}
            >
              <ListItemText primary="APIs Places" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={() => handleListItemClick(3)}
              className={`list-item ${selectedIndex === 3 ? 'selected' : ''}`}
            >
              <ListItemText primary="Map Tiles" />
            </ListItem>
          </List>
        </Box>
      </Box>
      
      {/* Content Box */}
      <Box className="content-box">
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Documentation;
