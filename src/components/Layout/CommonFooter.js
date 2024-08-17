import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import "../../styles/Footer.css";
import logo from "../../assets/images/FooterLogo.svg";

// Import images
import facebookIcon from '../../assets/images/Facebook.svg';
import twitterIcon from '../../assets/images/Twitter.svg';
import instagramIcon from '../../assets/images/Instagram.svg';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container alignItems="center" mb={5}>
          <Grid item xs={12} sm={12} md={2} className="footer-logo" mt={2}>
            <Box textAlign="center">
              <img src={logo} alt="Logo" className="logo" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} className="footer-links" mt={2}>
            <Grid container justifyContent="center">
              <Link href="#" className="footer-link">Get in Touch</Link>
              <Link href="#" className="footer-link" style={{ marginLeft: '30px' }}>Privacy Policy</Link>
              <Link href="#" className="footer-link" style={{ marginLeft: '30px' }}>Terms and Conditions</Link>
              <Link href="#" className="footer-link" style={{ marginLeft: '30px' }}>Cookie Policy</Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={2} className="footer-links">
            <Box textAlign="center" className="footer-icons">
              <IconButton href="#" aria-label="Facebook" color="inherit">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </IconButton>
              <IconButton href="#" aria-label="Twitter" color="inherit">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </IconButton>
              <IconButton href="#" aria-label="Instagram" color="inherit">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <div style={{ border: '1px solid #FFFFFF', opacity: 0.5 }}></div>
        <Typography variant="body2" color="textSecondary" align="center" mt={5} className='copyright-heading'>
          Copyright © 2024 Fribe. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
