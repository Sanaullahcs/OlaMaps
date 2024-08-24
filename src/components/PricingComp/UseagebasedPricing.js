import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, Slider, Divider } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import roundpercentage from '../../assets/images/roundpercentage.png';



const marks = [
  { value: 0, label: '0' },
  { value: 500000, label: '100k' },
  { value: 1300000, label: '500k' },
  { value: 2000000, label: '2M' },
  { value: 5000000, label: '5M' },
  { value: 10000000, label: '10M' },
];
const marks1 = [
  { value: 0, label: '0' },
  { value: 500000, label: '100k' },
  { value: 1300000, label: '500k' },
  { value: 2000000, label: '2M' },
  { value: 5000000, label: '5M' },
  { value: 10000000, label: '10M' },
];
const marks2 = [
  { value: 0, label: '0' },
  { value: 500000, label: '100k' },
  { value: 1300000, label: '500k' },
  { value: 2000000, label: '2M' },
  { value: 5000000, label: '5M' },
  { value: 10000000, label: '10M' },
];
const marks3 = [
  { value: 0, label: '0' },
  { value: 500000, label: '100k' },
  { value: 1300000, label: '500k' },
  { value: 2000000, label: '2M' },
  { value: 5000000, label: '5M' },
  { value: 10000000, label: '10M' },
];


const PricingTableExactUI = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };
  const handleChange3 = (event, newValue3) => {
    setValue3(newValue3);
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f7f9fc', paddingTop:'100px', marginTop:'100px', fontFamily:'"Nunito Sans", sans-serif' }}>
         <Box
        sx={{
         
            boxShadow: "none",
            margin: "0px 8%",
        
          padding: '30px 10px',
       
         
        
        
        
          marginTop: '20px',
        }}
      ><Typography
      variant="h4"
      sx={{
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '8px',
      }}
    >
      Simple, Usage-Based Pricing
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: '#666',
        maxWidth: '600px',
      }}
    >
      Fribe offers flexible, pay-as-you-go pricing with no contracts or usage limits. Enjoy cost-free usage in the first year; charges apply from year two.
    </Typography> </Box>
      <Grid container justifyContent="center" sx={{margin:'20px 0px 40px 0px'}}>
        <Grid item xs={12} md={10}>
          <Card sx={{ borderRadius: '10px', overflow: 'visible', boxShadow: 'none' }}>
            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={8}>
                <Box sx={{ padding: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' ,marginBottom:'40px'} }}>
                    <Box sx={{ marginBottom: { xs: '20px', md: '0' } }}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                        Autocomplete
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px', maxWidth: '300px', fontFamily:'"Nunito Sans", sans-serif' }}>
                        Enhance user experience with intelligent location predictions as they type
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: '45px',
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#f4f7f9',
                        borderRadius: '8px',
                        textAlign: 'center',
                       fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Price per API Call
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        ₹ 0
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center',  fontFamily:'"Nunito Sans", sans-serif'}}
                    >
                      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                        Monthly Volume
                      </Typography>
                      <Typography variant="body1" sx={{ marginLeft: '16px', fontWeight: 'bold', fontFamily:'"Nunito Sans", sans-serif' }}>
                        {value === 0 ? '0' : value.toLocaleString()} reqs/month
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ marginBottom:'20px'}}>
                      <Slider
                        value={value}
                        onChange={handleChange}
                        step={null}
                        marks={marks}
                        min={0}
                        max={10000000}
                        sx={{
                           fontFamily:'"Nunito Sans", sans-serif',
                            margin:'0px 10px 0px 10px',
                          color: '#6200ea',
                          '& .MuiSlider-thumb': {
                            backgroundColor: '#6200ea',
                          },
                          '& .MuiSlider-track': {
                            height: 2,
                            borderRadius: 1,
                          },
                          '& .MuiSlider-rail': {
                            height: 2,
                            borderRadius: 1,
                          },
                        }}
                      />
                    </Box>
                    
                  </Box>
                  
                </Box>
                
              </Grid>

              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box
                  sx={{
                    flex:'1',
                    padding: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily:'"Nunito Sans", sans-serif'
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#6E00DC',
                        color: '#fff',
                        marginBottom: '8px',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontWeight:"600", fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      Free For 1st Year
                    </Button>
                    <Typography variant="h6">₹0/mo</Typography>
                    <Typography variant="body2" sx={{ color: '#6E00DC' , fontWeight:'700' , fontSize:'14px', fontFamily:'"Nunito Sans", sans-serif'}}>
                      FROM 2nd YEAR
                    </Typography>
                  </Box>
                </Box>
          
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{margin:'20px 0px 40px 0px'}}>
        <Grid item xs={12} md={10}>
          <Card sx={{ borderRadius: '10px', overflow: 'visible', boxShadow: 'none' }}>
            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={8}>
                <Box sx={{ padding: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' ,marginBottom:'40px'} }}>
                    <Box sx={{ marginBottom: { xs: '20px', md: '0' } }}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                      Reverse Geocoding
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px', maxWidth: '300px', fontFamily:'"Nunito Sans", sans-serif' }}>
                        Enhance user experience with intelligent location predictions as they type
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: '45px',
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#f4f7f9',
                        borderRadius: '8px',
                        textAlign: 'center',
                       fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Price per API Call
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        ₹ 0
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center',  fontFamily:'"Nunito Sans", sans-serif'}}
                    >
                      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                        Monthly Volume
                      </Typography>
                      <Typography variant="body1" sx={{ marginLeft: '16px', fontWeight: 'bold', fontFamily:'"Nunito Sans", sans-serif' }}>
                        {value === 0 ? '0' : value.toLocaleString()} reqs/month
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ marginBottom:'20px'}}>
                      <Slider
                        value={value1}
                        onChange={handleChange1}
                        step={null}
                        marks={marks1}
                        min={0}
                        max={10000000}
                        sx={{
                           fontFamily:'"Nunito Sans", sans-serif',
                            margin:'0px 10px 0px 10px',
                          color: '#6200ea',
                          '& .MuiSlider-thumb': {
                            backgroundColor: '#6200ea',
                          },
                          '& .MuiSlider-track': {
                            height: 2,
                            borderRadius: 1,
                          },
                          '& .MuiSlider-rail': {
                            height: 2,
                            borderRadius: 1,
                          },
                        }}
                      />
                    </Box>
                    
                  </Box>
                  
                </Box>
                
              </Grid>

              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box
                  sx={{
                    flex:'1',
                    padding: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily:'"Nunito Sans", sans-serif'
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#6E00DC',
                        color: '#fff',
                        marginBottom: '8px',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontWeight:"600", fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      Free For 1st Year
                    </Button>
                    <Typography variant="h6">₹0/mo</Typography>
                    <Typography variant="body2" sx={{ color: '#6E00DC' , fontWeight:'700' , fontSize:'14px', fontFamily:'"Nunito Sans", sans-serif'}}>
                      FROM 2nd YEAR
                    </Typography>
                  </Box>
                </Box>
          
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{margin:'20px 0px 40px 0px'}}>
        <Grid item xs={12} md={10}>
          <Card sx={{ borderRadius: '10px', overflow: 'visible', boxShadow: 'none' }}>
            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={8}>
                <Box sx={{ padding: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' ,marginBottom:'40px'} }}>
                    <Box sx={{ marginBottom: { xs: '20px', md: '0' } }}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                      Vector Tiles
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px', maxWidth: '300px', fontFamily:'"Nunito Sans", sans-serif' }}>
                        Enhance user experience with intelligent location predictions as they type
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: '45px',
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#f4f7f9',
                        borderRadius: '8px',
                        textAlign: 'center',
                       fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Price per API Call
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        ₹ 0
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center',  fontFamily:'"Nunito Sans", sans-serif'}}
                    >
                      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                        Monthly Volume
                      </Typography>
                      <Typography variant="body1" sx={{ marginLeft: '16px', fontWeight: 'bold', fontFamily:'"Nunito Sans", sans-serif' }}>
                        {value === 0 ? '0' : value.toLocaleString()} reqs/month
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ marginBottom:'20px'}}>
                      <Slider
                        value={value2}
                        onChange={handleChange2}
                        step={null}
                        marks={marks2}
                        min={0}
                        max={10000000}
                        sx={{
                           fontFamily:'"Nunito Sans", sans-serif',
                            margin:'0px 10px 0px 10px',
                          color: '#6200ea',
                          '& .MuiSlider-thumb': {
                            backgroundColor: '#6200ea',
                          },
                          '& .MuiSlider-track': {
                            height: 2,
                            borderRadius: 1,
                          },
                          '& .MuiSlider-rail': {
                            height: 2,
                            borderRadius: 1,
                          },
                        }}
                      />
                    </Box>
                    
                  </Box>
                  
                </Box>
                
              </Grid>

              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box
                  sx={{
                    flex:'1',
                    padding: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily:'"Nunito Sans", sans-serif'
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#6E00DC',
                        color: '#fff',
                        marginBottom: '8px',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontWeight:"600", fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      Free For 1st Year
                    </Button>
                    <Typography variant="h6">₹0/mo</Typography>
                    <Typography variant="body2" sx={{ color: '#6E00DC' , fontWeight:'700' , fontSize:'14px', fontFamily:'"Nunito Sans", sans-serif'}}>
                      FROM 2nd YEAR
                    </Typography>
                  </Box>
                </Box>
          
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{margin:'20px 0px 40px 0px'}}>
        <Grid item xs={12} md={10}>
          <Card sx={{ borderRadius: '10px', overflow: 'visible', boxShadow: 'none' }}>
            <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={8}>
                <Box sx={{ padding: '20px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' ,marginBottom:'40px'} }}>
                    <Box sx={{ marginBottom: { xs: '20px', md: '0' } }}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                      Directions
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px', maxWidth: '300px', fontFamily:'"Nunito Sans", sans-serif' }}>
                        Enhance user experience with intelligent location predictions as they type
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: '45px',
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#f4f7f9',
                        borderRadius: '8px',
                        textAlign: 'center',
                       fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Price per API Call
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        ₹ 0
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center',  fontFamily:'"Nunito Sans", sans-serif'}}
                    >
                      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold' , fontFamily:'"Nunito Sans", sans-serif'}}>
                        Monthly Volume
                      </Typography>
                      <Typography variant="body1" sx={{ marginLeft: '16px', fontWeight: 'bold', fontFamily:'"Nunito Sans", sans-serif' }}>
                        {value === 0 ? '0' : value.toLocaleString()} reqs/month
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{ marginBottom:'20px'}}>
                      <Slider
                        value={value3}
                        onChange={handleChange3}
                        step={null}
                        marks={marks3}
                        min={0}
                        max={10000000}
                        sx={{
                           fontFamily:'"Nunito Sans", sans-serif',
                            margin:'0px 10px 0px 10px',
                          color: '#6200ea',
                          '& .MuiSlider-thumb': {
                            backgroundColor: '#6200ea',
                          },
                          '& .MuiSlider-track': {
                            height: 2,
                            borderRadius: 1,
                          },
                          '& .MuiSlider-rail': {
                            height: 2,
                            borderRadius: 1,
                          },
                        }}
                      />
                    </Box>
                    
                  </Box>
                  
                </Box>
                
              </Grid>

              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
              <Box
                  sx={{
                    flex:'1',
                    padding: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily:'"Nunito Sans", sans-serif'
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#6E00DC',
                        color: '#fff',
                        marginBottom: '8px',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontWeight:"600", fontFamily:'"Nunito Sans", sans-serif'
                      }}
                    >
                      Free For 1st Year
                    </Button>
                    <Typography variant="h6">₹0/mo</Typography>
                    <Typography variant="body2" sx={{ color: '#6E00DC' , fontWeight:'700' , fontSize:'14px', fontFamily:'"Nunito Sans", sans-serif'}}>
                      FROM 2nd YEAR
                    </Typography>
                  </Box>
                </Box>
          
            </Grid>
          </Card>
        </Grid>
      </Grid> 


      <Box
        sx={{
       marginBottom:'150px!important',
            backgroundColor: "white",
            boxShadow: "none",
            margin: "0px 8%",
          borderRadius: '10px',
          padding: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' },
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '100%',
          marginTop: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: { xs: '12px', sm: '0' },
            textAlign: 'left',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
            <Box sx={{ marginRight:'30px'}}>
            <img src={roundpercentage} />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column'}}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
            Get 2 years free on Fribe <span sx={{fontWeight: '500!important', color: '#333'}}>with 10M+ API calls for long term commitments.</span>
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
             Secure your savings now at{' '}
            <a href="mailto:maps.sales@fribe.com" style={{ color: '#6200ea', textDecoration: 'none' }}>
              maps.sales@fribe.com
            </a>
          </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6200ea',
            color: '#fff',
            borderRadius: '20px',
            padding: '10px 20px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Email Us
        </Button>
      </Box>
      </Box>

  );
};

export default PricingTableExactUI;
