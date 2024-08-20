import React, { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem, Card, CardContent, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { green, blue } from '@mui/material/colors';

const APIRoutingPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [schemasExpanded, setSchemasExpanded] = useState(true); // Set to true to open initially

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSchemasChange = (event, isExpanded) => {
    setSchemasExpanded(isExpanded);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex',alignItems: 'center', marginBottom: '20px' }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            OLA Maps - Routing APIs
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            /openapi/routing.yaml
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px',marginLeft:'20px',position:'relative',bottom:'40px' }}>
          <Chip label="1.0.0" sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', borderRadius: '30px' ,padding:'0px 5px'}} />
          <Chip label="OAS 3.0" sx={{ backgroundColor: '#757575', color: 'white', fontWeight: 'bold', borderRadius: '30px',padding:'0px 5px' }} />
        </Box>
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

      {/* Directions API Section */}
      <Box>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          Directions API
        </Typography>

        {/* Directions API Card */}
        <Card
          sx={{
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#E8F5E9', // Light green background
            border: `1px solid #C8E6C9`,
            boxShadow: 'none',
          }}
        >
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Chip label="POST" sx={{ backgroundColor: green[500], color: 'white', marginRight: '10px' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'inline' }}>
                  /routing/v1/directions
                </Typography>
                <Typography variant="body2" sx={{ marginLeft: '10px', color: 'textSecondary', display: 'inline' }}>
                  Provides routable path between two or more points
                </Typography>
              </Grid>
              <Grid item>
                <LockIcon sx={{ color: 'gray' }} />
                <ArrowDropDownIcon sx={{ color: 'gray' }} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          Directions API
        </Typography>

        {/* Distance Matrix API Card */}
        <Card
          sx={{
            borderRadius: '8px',
            backgroundColor: '#E3F2FD', // Light blue background
            border: `1px solid #BBDEFB`,
            boxShadow: 'none',
          }}
        >
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Chip label="GET" sx={{ backgroundColor: blue[500], color: 'white', marginRight: '10px' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'inline' }}>
                  /routing/v1/distanceMatrix
                </Typography>
                <Typography variant="body2" sx={{ marginLeft: '10px', color: 'textSecondary', display: 'inline' }}>
                  Provides distance and ETA between different origin and destination points
                </Typography>
              </Grid>
              <Grid item>
                <LockIcon sx={{ color: 'gray' }} />
                <ArrowDropDownIcon sx={{ color: 'gray' }} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Schemas Accordion with Border */}
      <Accordion
        expanded={schemasExpanded}
        onChange={handleSchemasChange}
        sx={{
          border: '1px solid #F1F4F5',
          borderRadius: '4px',
          marginTop: '20px',
          '&::before': { display: 'none' }, // Remove the default MUI divider
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="schemas-content" id="schemas-header">
          <Typography variant="h6">Schemas</Typography>
        </AccordionSummary>
        <AccordionDetails >
          {Array.from({ length: 7 }, (_, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ backgroundColor: '#f5f7f9', marginBottom: '8px',boxShadow:'none!important'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography sx={{ fontWeight: 'bold' }}>directionsResponse</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {'{'}<br />
                  &nbsp;&nbsp;reason[...]<br />
                  &nbsp;&nbsp;request_type[...]<br />
                  &nbsp;&nbsp;request_id[...]<br />
                  &nbsp;&nbsp;status[...]<br />
                  {'}'}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default APIRoutingPage;
