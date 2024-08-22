import React from 'react';
import { Container, Typography, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const FribeMapService = () => {
  return (
    <Container sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ lineHeight: 1.4 }}>
      Nearby Search
      </Typography>

      <Box 
        sx={{ 
          backgroundColor:'#8080802e',
          display: 'flex', 
          alignItems: 'center', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          my: 2,
        }}
      >
    <Box 
  sx={{ 
    bgcolor: '#6a0dad', // Adjust color to match the purple shade
    color: 'white', 
    px: 2, 
    py: 1, 
    borderRadius: '4px',
    marginRight:"10px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '60px',
    fontWeight: '500',  // Make text bold to match the image
    mb: { xs: 1, sm: 0 }
  }}
>
  GET
</Box>
<TextField
  variant="standard"  // Changed from 'outlined' to 'standard' for inline appearance
  value=" https://maps.fribe.io/api/user/place/nearbysearch?parameters"
  fullWidth
  InputProps={{
    readOnly: true,
    disableUnderline: true,  // Disable the underline to remove the border completely
  }}
  sx={{
    mb: { xs: 1, sm: 0 },
    input: {
      fontSize: { xs: '12px', sm: '14px' },
      color: '#0709cd',
      fontWeight: 500, 
      border: 'none',  
      padding: '0',  
      cursor: 'pointer', 
    },
  }}
  onClick={(e) => {
    e.target.select();  // Select the entire text when clicked
  }}
/>
<Box 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: '#80808000', 
    color: 'black', 
    px: 2, 
    py: 1, 
    borderRadius: '4px',
    cursor: 'pointer',
    minWidth: '60px', 
  }}
  onClick={() => {
    navigator.clipboard.writeText(" https://maps.fribe.io/api/user/place/nearbysearch?parameters");
  }}
>
  <ContentCopyIcon sx={{ fontSize: '18px' }} />
</Box>
</Box>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching fo
        </Typography>

      {/* Title */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        GET Request
      </Typography>

      {/* Paragraph with highlighted parameters */}
      <Typography variant="body1" paragraph>
      To utilize the Nearby API and obtain information, a GET request is made with the required parameters: publishableKey, name, radius and location.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
      Request Parameters
      </Typography>
      <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead sx={{ bgcolor: '#6a0dad' }}>
      <TableRow>
        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Required</TableCell>
        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Format and Usage</TableCell>
        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>publishableKey</TableCell>
        <TableCell>Yes</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Format: 32 character alphanumeric string<br />
          Example: publishableKey=API_KEY
        </TableCell>
        <TableCell>
          A key is a unique identifier that is required to authenticate a request to the API.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>name</TableCell>
        <TableCell>No</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Example:
        </TableCell>
        <TableCell>
          <Box component="span" sx={{ color: '#b055b0', fontWeight: 'bold' }}>
            name
          </Box> is the key which you want to fetch relevant location data.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>radius</TableCell>
        <TableCell>No</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Example:
        </TableCell>
        <TableCell>
          <Box component="span" sx={{ color: '#b055b0', fontWeight: 'bold' }}>
            radius
          </Box> Defines the distance (in meters) within which to return place results. You may bias results to a specified circle.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>location</TableCell>
        <TableCell>Yes</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Example: location=24.348633, 56.695282
        </TableCell>
        <TableCell>
          <Box component="span" sx={{ color: '#b055b0', fontWeight: 'bold' }}>
            location
          </Box> is the lat/long point of your search location.
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
    <Typography className='HeaderResposive-Doc'  variant="h4" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 10 ,mb:5 }}>
    Sample Queries - Nearby Search API
      </Typography>

      {/* GET Request Example 1 */}
      <Typography className='HeaderResposive-Doc'  variant="h5" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        GET Request Example 1
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      Let’s look at a nearby request with

a name, publishableKey and location pair of lat/long
      </Typography>
      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        Request
      </Typography>
      <Box 
        sx={{
          backgroundColor: '#f8f8f8', 
          padding: '16px', 
          borderRadius: '8px', 
          my: 2, 
          fontFamily: 'monospace',
          overflowX: 'auto',
        }}
      >
           
        <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', color: '#333' }}>
        curl --location 'https://maps.fribe.io/api/user/place/nearbysearch?name=international exhibition center&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&location=24.348633,56.695282'
        </Typography>
      </Box>

      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        Response
      </Typography>

      <Box 
        sx={{
          backgroundColor: '#ffffff', 
          padding: '16px', 
          borderRadius: '8px', 
          my: 2, 
          fontFamily: 'monospace',
          overflowY: 'scroll', 
          maxHeight: '300px',
          border: '1px solid #ddd',
        }}
      >
        <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', color: '#333' }}>
        {'{\n'}
{'  "statusCode": 200,\n'}
{'  "message": "Success",\n'}
{'  "data": [\n'}
{'    {\n'}
{'      "_id": "d0fa6439-ca45-4afd-b5f0-462e01b987d0",\n'}
{'      "shortId": "01HDE5HV8J3Q9JM5VV7CCDGC4N",\n'}
{'      "formattedAddress": "ķīpsalas iela 8, kurzemes rajons, rīga, lv-1048, latvia",\n'}
{'      "name": "international exhibition center",\n'}
{'      "city": "rīga",\n'}
{'      "country": "latvia",\n'}
{'      "alpha2": "LV",\n'}
{'      "alpha3": "LVA",\n'}
{'      "countryCode": "428",\n'}
{'      "latitude": 56.95485610000001,\n'}
{'      "longitude": 24.0795784\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "dd201ad4-3426-4540-9719-a394fb2167d5",\n'}
{'      "shortId": "01HDE5HVMVN2XV9GWCAGK7355G",\n'}
{'      "formattedAddress": "ķīpsalas iela 8, kurzemes rajons, rīga, lv-1048, latvia",\n'}
{'      "name": "ķīpsalas iela 8, kurzemes rajons, rīga, lv-1048, latvia",\n'}
{'      "city": "rīga",\n'}
{'      "country": "latvia",\n'}
{'      "alpha2": "LV",\n'}
{'      "alpha3": "LVA",\n'}
{'      "countryCode": "428",\n'}
{'      "latitude": 56.9548561,\n'}
{'      "longitude": 24.0795784\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "f4cccc86-95af-40f8-91e0-a248523549db",\n'}
{'      "shortId": "01HPPBWZ0ZVV1HJSYWGHP0BQEQ",\n'}
{'      "formattedAddress": "parka iela 19, ulbroka, stopiņu pagasts, ropažu novads, lv-2130, latvia",\n'}
{'      "name": "parka iela 19, ulbroka, stopiņu pagasts, ropažu novads, lv-2130, latvia",\n'}
{'      "city": "ulbroka",\n'}
{'      "country": "latvia",\n'}
{'      "alpha2": "LV",\n'}
{'      "alpha3": "LVA",\n'}
{'      "countryCode": "428",\n'}
{'      "latitude": 56.9423738,\n'}
{'      "longitude": 24.2809308\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "9c4c9a61-9010-4c87-b7dd-bfa337e77f2f",\n'}
{'      "shortId": "01HQ88FS9DBNTNAXEVF0XPXTBC",\n'}
{'      "formattedAddress": "parka iela 18, ulbroka, stopiņu pagasts, ropažu novads, lv-2130, latvia",\n'}
{'      "name": "parka iela 18, ulbroka, stopiņu pagasts, ropažu novads, lv-2130, latvia",\n'}
{'      "city": "ulbroka",\n'}
{'      "country": "latvia",\n'}
{'      "alpha2": "LV",\n'}
{'      "alpha3": "LVA",\n'}
{'      "countryCode": "428",\n'}
{'      "latitude": 56.9421016,\n'}
{'      "longitude": 24.2806622\n'}
{'    }\n'}
{'  ]\n'}
{'}'}
        </Typography>
      </Box>

      {/* GET Request Example 2 */}
      <Typography className='HeaderResposive-Doc'  variant="h5" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        GET Request Example 2
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      Taking the next step to use further features offered in nearby API. For the same name,radius, location and publishableKey. Let's request:




      </Typography>
      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        Request
      </Typography>
      <Box 
        sx={{
          backgroundColor: '#f8f8f8', 
          padding: '16px', 
          borderRadius: '8px', 
          my: 2, 
          fontFamily: 'monospace',
          overflowX: 'auto',
        }}
      >
        <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', color: '#333' }}>
        curl --location 'https://maps.fribe.io/api/user/place/nearbysearch?name=صلالة&radius=5000000&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&location=17.6125018,54.0344293'
        </Typography>
      </Box>

      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        Response
      </Typography>

      <Box 
        sx={{
          marginBottom:'50px!important',
          backgroundColor: '#ffffff', 
          padding: '16px', 
          borderRadius: '8px', 
          my: 2, 
          fontFamily: 'monospace',
          overflowY: 'scroll', 
          maxHeight: '300px',
          border: '1px solid #ddd',
        }}
      >
       <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', color: '#333' }}>
       {'{\n'}
       {'{\n'}
{'  "statusCode": 200,\n'}
{'  "message": "Success",\n'}
{'  "data": [\n'}
{'    {\n'}
{'      "_id": "11de78f5-9625-42e1-a1aa-69f545fad89f",\n'}
{'      "shortId": "01H76G1D1ZNM6J2WXFDTMMC0YB",\n'}
{'      "formattedAddress": "jh97+h7c mutrah high st مسقط",\n'}
{'      "name": "salalah book shop صلالة لبيع الكتب",\n'}
{'      "city": "مسقط",\n'}
{'      "country": "oman",\n'}
{'      "latitude": 23.6189468,\n'}
{'      "longitude": 58.5631426\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "aa20ea41-caef-48a7-baf4-b3f45b7c6b03",\n'}
{'      "shortId": "01H76G1DCPM1SSV4ZXJBB88B11",\n'}
{'      "formattedAddress": "h6rv+88w unnamed road السيب‎",\n'}
{'      "name": "صيدلية صلالة salalah pharmacy",\n'}
{'      "city": "السيب‎",\n'}
{'      "country": "oman",\n'}
{'      "latitude": 23.590865599999997,\n'}
{'      "longitude": 58.2433306\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "c2860021-7464-49e1-b2c7-2b2e07a141da",\n'}
{'      "shortId": "01H7B5RVRVD77YW7GC9DWR2E5T",\n'}
{'      "formattedAddress": "شارع سوق الغبرة، مسقط",\n'}
{'      "name": "مطعم مظابي صلالة mazahbi salalah restaurant",\n'}
{'      "city": "مسقط",\n'}
{'      "country": "oman",\n'}
{'      "latitude": 23.586135,\n'}
{'      "longitude": 58.404697999999996\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "90479b8d-a83e-4698-b1c0-48fc4398821d",\n'}
{'      "shortId": "01H85NPZK72RT2K267YX4NHGZP",\n'}
{'      "formattedAddress": "4hgh+cgw، الرفاع، البحرين",\n'}
{'      "name": "صلالة ستايل للهواتف",\n'}
{'      "city": "الرفاع",\n'}
{'      "country": "bahrain",\n'}
{'      "latitude": 26.126111599999998,\n'}
{'      "longitude": 50.5788352\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "83ad12d2-b11f-4d13-8cd0-b118025aae3b",\n'}
{'      "shortId": "01H911BD26B2MBJAN143ZCA6D4",\n'}
{'      "formattedAddress": "فرق شارع العام نزوى صلالة، nizwa, oman",\n'}
{'      "name": "فرق شارع العام نزوى صلالة، nizwa, oman",\n'}
{'      "city": "nizwa",\n'}
{'      "country": "oman",\n'}
{'      "alpha2": "OM",\n'}
{'      "alpha3": "OMN",\n'}
{'      "countryCode": "512",\n'}
{'      "latitude": 22.8649898,\n'}
{'      "longitude": 57.5374784\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "d16f0882-b103-4fd7-8b34-d083d838f183",\n'}
{'      "shortId": "01HCSJ526VGCCGG3M5E0HVM88V",\n'}
{'      "formattedAddress": "h6qx+67p, seeb, oman",\n'}
{'      "name": "نقليات خط صلالة للنقل البري",\n'}
{'      "city": "seeb",\n'}
{'      "country": "oman",\n'}
{'      "alpha2": "OM",\n'}
{'      "alpha3": "OMN",\n'}
{'      "countryCode": "512",\n'}
{'      "latitude": 23.5881196,\n'}
{'      "longitude": 58.24820729999999\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "dae9b378-2943-4a49-a920-b97112872e0d",\n'}
{'      "shortId": "01HJ6DS80MT5FH8A54496XDF7Y",\n'}
{'      "formattedAddress": "j6fv+gp5, seeb, oman",\n'}
{'      "name": "salalah coconut oil زيت جوز الهند بصلالة",\n'}
{'      "city": "seeb",\n'}
{'      "country": "oman",\n'}
{'      "alpha2": "OM",\n'}
{'      "alpha3": "OMN",\n'}
{'      "countryCode": "512",\n'}
{'      "latitude": 23.6235661,\n'}
{'      "longitude": 58.24469800000001\n'}
{'    },\n'}
{'    {\n'}
{'      "_id": "1324ea51-41a0-47e4-9786-d556d0184bf0",\n'}
{'      "shortId": "01HMK08KB59AE407Y18DKWWQHA",\n'}
{'      "formattedAddress": "h9jg+9r2، صلالةmuscat، oman",\n'}
{'      "name": "salalah future trading",\n'}
{'      "city": "صلالةmuscat",\n'}
{'      "country": "oman",\n'}
{'      "alpha2": "OM",\n'}
{'      "alpha3": "OMN",\n'}
{'      "countryCode": "512",\n'}
{'      "latitude": 23.5808772,\n'}
{'      "longitude": 58.3770304\n'}
{'    }\n'}
{'  ]\n'}
{'}'}
</Typography>
      </Box>
    </Container>
  );
};

export default FribeMapService;
