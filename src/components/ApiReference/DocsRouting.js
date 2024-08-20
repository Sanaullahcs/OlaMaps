import React from 'react';
import { Box, Typography, Button, Select, MenuItem, Card, CardContent, Grid, Chip } from '@mui/material';
import { green, blue } from '@mui/material/colors';

const APIRoutingPage = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          OLA Maps - Routing APIs
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          /openapi/routing.yaml
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          OLA Maps Routing APIs provide the ability to get directions between two or more points and also provide distance and ETA between different origin and destination points.
        </Typography>
      </Box>

      {/* Server Selection and Authorization */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Select defaultValue="/openapi/routing.yaml - Routing Servers" sx={{ minWidth: '300px' }}>
          <MenuItem value="/openapi/routing.yaml - Routing Servers">/openapi/routing.yaml - Routing Servers</MenuItem>
          {/* Add more MenuItems if necessary */}
        </Select>
        <Button variant="contained" color="secondary">
          Authorized
        </Button>
      </Box>

      {/* API Section */}
      <Box>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          Directions API
        </Typography>

        {/* Directions API Card */}
        <Card sx={{ marginBottom: '20px', borderLeft: `6px solid ${green[500]}` }}>
          <CardContent>
            <Grid container alignItems="center">
              <Chip label="POST" sx={{ backgroundColor: green[500], color: 'white', marginRight: '10px' }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                /routing/v1/directions
              </Typography>
              <Typography variant="body2" sx={{ marginLeft: '10px', color: 'textSecondary' }}>
                Provides routable path between two or more points
              </Typography>
            </Grid>
          </CardContent>
        </Card>

        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          Directions API
        </Typography>

        {/* Distance Matrix API Card */}
        <Card sx={{ borderLeft: `6px solid ${blue[500]}` }}>
          <CardContent>
            <Grid container alignItems="center">
              <Chip label="GET" sx={{ backgroundColor: blue[500], color: 'white', marginRight: '10px' }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                /routing/v1/distanceMatrix
              </Typography>
              <Typography variant="body2" sx={{ marginLeft: '10px', color: 'textSecondary' }}>
                Provides distance and ETA between different origin and destination points.
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default APIRoutingPage;
