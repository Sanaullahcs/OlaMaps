import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import "../../styles/homeCarousel.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the icon you want to use
import homeMap from "../../assets/images/homeEcoFirst.svg";
import homeEngine from "../../assets/images/homeEcoSec.svg";
import homeApi from "../../assets/images/homeEcothird.svg";
import autoCompletion from "../../assets/images/autoCompletion.svg";
import Map from "../../assets/images/MapHome.svg";

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

const RowContainer = styled('div')(({ noMargin }) => ({
  marginTop: noMargin ? '50px' : '100px',
}));

const ExampleComponent = () => {

  return (
    <>
    <RowContainer className='width-heading'>
    <Typography className='eco-heading'>Ecosystem Driven by <br></br>Data Integration And Processing</Typography>

    </RowContainer>
      <RowContainer className='eco-container'>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2} className='padding'>
              <Grid item>
                <Typography className='eco-heading'>Maps SDK for iOS <br />and Android</Typography>
              </Grid>
              <Grid item>
                <Typography className='eco-subheading'>Our Maps SDKs allow developers to integrate Ola Maps into iOS and Android apps, offering comprehensive mapping and navigation features.</Typography>
              </Grid>
              <Grid item>
                <Button variant="text" className='hero-button-eco' endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={homeMap} alt="Slide 3" className="eco-image-first" />
          </Grid>
        </Grid>
      </RowContainer>

      {/* second container */}
      <RowContainer className='eco-container-sec' noMargin>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img src={homeEngine} alt="Slide 3" className="eco-image-first" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2} className='padding'>
              <Grid item>
                <Typography className='eco-heading'>Routing Engine</Typography>
              </Grid>
              <Grid item>
                <Typography className='eco-subheading'>Generate accurate and optimised routes to plan journeys effectively.</Typography>
              </Grid>
              <Grid item>
                <Button variant="text" className='hero-button-eco' endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
      </RowContainer>
      <RowContainer className='eco-container-third' >
    
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
        <div className='bg-color' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Typography className='eco-heading padding-top'>Autocompletion</Typography>
          <Typography className='eco-subheading'>Provide relevant search suggestions based on geographical data.</Typography>
          <Button variant="text" className='hero-button-eco' endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
                <img src={autoCompletion} alt="Slide 3" className="eco-image-sec" />

          </div>
        </Grid>
        <Grid item sm={12} md={6}>
        <div className='bg-color' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  <Typography className='eco-heading padding-top'>Map Tiles</Typography>
  <Typography className='eco-subheading'>Render rich, dynamic and interactive maps with ease.</Typography>
  <Button variant="text" className='hero-button-eco' endIcon={<ArrowForwardIcon />}>
    Learn More
  </Button>
  <img src={Map} alt="Slide 3" className="eco-image-sec" />
</div>

        </Grid>
      </Grid>
    </RowContainer>

      <RowContainer className='eco-container-sec' noMargin>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img src={homeApi} alt="Slide 3" className="eco-image-first" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2} className='padding'>
              <Grid item>
                <Typography className='eco-heading'>Geocoding And<br></br>Reverse Geocoding API</Typography>
              </Grid>
              <Grid item>
                <Typography className='eco-subheading'>Fetch geo coordinates from addresses and human-readable place names from geo coordinates.</Typography>
              </Grid>
              <Grid item>
                <Button variant="text" className='hero-button-eco' endIcon={<ArrowForwardIcon />}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
      </RowContainer>
    </>
  );
};

export default ExampleComponent;
