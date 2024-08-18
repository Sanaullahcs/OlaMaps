import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import "../../styles/DownloadPage.css";

// Import images from your assets folder
import image1 from '../../assets/images/ios-down.svg';
import image2 from '../../assets/images/android-down.svg';
import image3 from '../../assets/images/java-down.svg';

const cardsData = [
  {
    image: image1,
    title: 'iOS SDK Download',
    subheading: 'Download Fribe - Navigation iOS SDK and start building your own map experience for apple devices.',
  },
  {
    image: image2,
    title: 'Android SDK Download',
    subheading: 'Download Ola Maps - Navigation Android SDK and start building your own map experience for android devices.',
  },
  {
    image: image3,
    title: 'Java SDK Download',
    subheading: 'Download Java SDK - a quick integration of place-related APIs and functionalities.',
  },
];

const CardsRow = () => {
  return (
    <div className='sdk-width-down'>
      <div className='sdk-width'>
        <Grid container spacing={2}>
          {cardsData.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              className={index === 2 ? 'third-card' : ''}
            >
              <Card className='custom-card'>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  className='down-cards-page-images'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="card-title">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="card-subheading">
                    {card.subheading}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CardsRow;
