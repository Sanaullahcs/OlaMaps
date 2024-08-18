import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Accordion, AccordionSummary, AccordionDetails, Link, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme, useMediaQuery } from '@mui/material';

const sections = [
  { id: 'overview', label: 'Overview'  },
  { id: 'authentication', label: 'Authentication' },
];

const apiSections = [
  { id: 'routing-apis', label: 'Routing APIs', items: ['Direction APIs'] },
  { id: 'places-apis', label: 'Places APIs', items: ['Autocomplete APIs', 'Geocoding API', 'Reverse Geocoding API'] },
  { id: 'map-tiles', label: 'Map Tiles', items: [] },
  { id: 'navigation-sdks', label: 'Navigation SDKs', items: ['Android SDK - Navigation', 'iOS SDK - Navigation'] },
  { id: 'maps-sdks', label: 'Maps SDKs', items: ['Fribe Services - Java SDK'] },
];

const Documentation = () => {
  const [activeId, setActiveId] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.concat(apiSections).map((section) => ({
        id: section.id,
        offsetTop: document.getElementById(section.id)?.offsetTop || 0,
      }));

      const scrollPosition = window.pageYOffset + 120;

      const activeSection = sectionOffsets
        .reverse()
        .find((section) => scrollPosition >= section.offsetTop);

      if (activeSection) {
        setActiveId(activeSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} bgcolor="#F1F4F5">
      {/* Sidebar */}
      <Box
        sx={{ margin: isMobile ? '20px' : '100px 0px 100px 50px' }}
        width={isMobile ? '100%' : '350px'}
      >
        <Box bgcolor="white" sx={{ borderRadius: '20px' ,padding:'15px'}}>
          <List>
            {sections.map((section) => (
              <ListItem
                button
                key={section.id}
                onClick={() => handleScrollToSection(section.id)}
                sx={{
                  color: activeId === section.id ? 'purple' : 'inherit', padding:'15px'
                }}
              >
                <ListItemText primary={section.label} />
              </ListItem>
            ))}
            {apiSections.map((section) => (
              <Accordion sx={{ boxShadow: 'none' }} key={section.id} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{section.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List component="div" disablePadding>
                    {section.items.map((item, index) => (
                      <ListItem
                        key={`${section.id}-${index}`}
                        button
                        onClick={() => handleScrollToSection(section.id)}
                        sx={{
                          pl: 4,
                          color: activeId === section.id ? 'purple' : 'inherit',
                        }}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </Box>
      </Box>

      <Box
        bgcolor="white"
        sx={{ margin: isMobile ? '20px' : '100px 50px 100px 50px', borderRadius: '20px' }}
        p={3}
        width={isMobile ? '100%' : 'calc(100% - 250px)'}
      >
        <Box sx={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#333' }}>
          <div id="overview">
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
              Welcome To Fribe Documentation
            </Typography>
            <Typography>
              Welcome to the documentation for our Maps API! This API provides developers with powerful tools to integrate mapping and location-based services into their applications. With our API, you can display maps, generate directions, search for places, and much more.
            </Typography>
          </div>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333', mt: 4, mb: 2 }}>
            API Endpoints And Specifications
          </Typography>
          <Typography>
            For an exhaustive list of API endpoints and specifications, please visit our{' '}
            <Link href="#" sx={{ color: '#007bff', textDecoration: 'none' }}>
              API Docs
            </Link>
            .
          </Typography>
          <div id="authentication">
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333', mt: 4, mb: 2 }}>
              Authentication
            </Typography>
          </div>
          <Typography>
            To access the Maps API endpoints, you need to authenticate your requests using OAuth 2.0. Upon successful authentication, you will receive a bearer token that you must include in the header of your API requests.
          </Typography>

          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333', mt: 3 }}>
            Authentication Method:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 2 }}>
            <ListItem sx={{ display: 'list-item' }}>
              OAuth 2.0 Token Usage:
            </ListItem>
          </List>

          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333', mt: 3 }}>
            Token Usage:
          </Typography>
          <Typography>
            Include the bearer token received from OAuth 2.0 as an Authorization header in the format:
          </Typography>
          <Paper elevation={0} sx={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', fontFamily: 'monospace', my: 2 }}>
            Authorization: Bearer {'{YOUR_ACCESS_TOKEN}'}
          </Paper>
          <Typography>
            For more details on Authentication, please visit our{' '}
            <Link href="#" sx={{ color: '#007bff', textDecoration: 'none' }}>
              Authentication Guide
            </Link>
            .
          </Typography>

          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333', mt: 4, mb: 2 }}>
            Response Format:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 2 }}>
            <ListItem sx={{ display: 'list-item' }}>
              All responses from the Maps API are returned in JSON format.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Successful responses will include the appropriate data based on the endpoint called.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Error responses will include an error code and message to assist in troubleshooting.
            </ListItem>
          </List>

          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333', mt: 3 }}>
            Sample Response:
          </Typography>
          <Paper elevation={0} sx={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', fontFamily: 'monospace', my: 2 }}>
            {'{'}
            <br />
            &nbsp;&nbsp;"status": "OK",<br />
            &nbsp;&nbsp;"data": {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;// Response data based on endpoint called<br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </Paper>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333', mt: 4, mb: 2 }}>
            Error Handling:
          </Typography>
          <Typography>
            In case of errors, the API will return an appropriate HTTP status code along with a JSON object containing an error message.
          </Typography>

          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333', mt: 3 }}>
            Sample Error Response:
          </Typography>
          <Paper elevation={0} sx={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', fontFamily: 'monospace', my: 2 }}>
            {'{'}
            <br />
            &nbsp;&nbsp;"status": "error",<br />
            &nbsp;&nbsp;"code": 404,<br />
            &nbsp;&nbsp;"message": "Resource not found."<br />
            {'}'}
          </Paper>

          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333', mt: 4, mb: 2 }}>
            Rate Limiting:
          </Typography>
          <Typography>
            To ensure fair usage and system stability, we enforce rate limiting on API requests. If you exceed the rate limit, you will receive a 429 Too Many Requests response. Please refer to our individual documentations for details on rate limits.
          </Typography>

          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#333', mt: 4, mb: 2 }}>
            Conclusion:
          </Typography>
          <Typography>
            Thank you for choosing our Maps! We hope this documentation helps you integrate powerful mapping and location-based features into your applications seamlessly. If you have any questions or need further assistance, feel free to reach out to our support team. Happy mapping!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Documentation;
