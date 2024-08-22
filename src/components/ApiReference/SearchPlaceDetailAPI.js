import React from 'react';
import { Container, Typography, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const FribeMapService = () => {
  return (
    <Container sx={{ mt: 4, px: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ lineHeight: 1.4 }}>
      Search Place Detail
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
  value="https://maps.fribe.io/api/user/place/findplacefromtext?search={value}&publishableKey={key}&location={lat,long}"
  fullWidth
  InputProps={{
    readOnly: true,
    disableUnderline: true,  // Disable the underline to remove the border completely
  }}
  sx={{
    mb: { xs: 1, sm: 0 },
    input: {
      fontSize: { xs: '12px', sm: '14px' },
      color: '#333',  // Adjust font color
      fontWeight: 'bold',  // Match font weight
      border: 'none',  // Explicitly set border to none
      padding: '0',  // Remove any padding to ensure inline appearance
      cursor: 'pointer',  // Add cursor pointer for better UX
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
    navigator.clipboard.writeText("https://maps.fribe.io/api/user/place/findplacefromtext?search={value}&publishableKey={key}&location={lat,long}");
  }}
>
  <ContentCopyIcon sx={{ fontSize: '18px' }} />
</Box>
</Box>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      The Search Single Place Detail API is used for fetch single complete address against search name or from lat/long accurately. It can serve requests for specific name, latitude and longitude.
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      To use the Single Place Detail API service please set the{' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          search
        </Box> and{' '} parameter to and{' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          location
        </Box> .
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
        A Text Search returns information about a set of places based on a string — for example "Taxi in Oman" or "Clothes stores near London" or "789 Main Street". The service responds with a list of places matching the text string and any location bias that has been set. We will cover them below.
        </Typography>

      {/* Title */}
      <Typography variant="h4" component="h2" gutterBottom>
        GET Request
      </Typography>

      {/* Paragraph with highlighted parameters */}
      <Typography variant="body1" paragraph>
      To utilize the Single Place Detail API and obtain information, a GET request is made with the required parameters:
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
            marginLeft: '4px',
            marginRight: '4px'
          }}>
         publishableKey
        </Box> 
        , 
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
            marginLeft: '4px'
          }}>
        search
        </Box>{' '}and{' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
            marginLeft: '4px'
          }}>location</Box>
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
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
            <TableCell>search</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>
              <strong>Type:</strong> string<br />
              Format: latitude,longitude<br />
              Example: search=oman
            </TableCell>
            <TableCell>
              <Box component="span" sx={{ color: '#b055b0', fontWeight: 'bold' }}>
                search
              </Box> is the key which you want to fetch relevant location data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>location</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>
              <strong>Type:</strong> string<br />
              Format: latitude,longitude<br />
              Example: location=41.349302,2.136480
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
    <Typography className='HeaderResposive-Doc'  variant="h4" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 4 }}>
    Sample Queries - Search Place Detail API
      </Typography>

      {/* GET Request Example 1 */}
      <Typography className='HeaderResposive-Doc'  variant="h5" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 4 }}>
        GET Request Example 1
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      Let’s look at a simple single place detail request with

a {' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          search
        </Box> ,{' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          publishableKey
        </Box>  {' '}and{' '}<Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          location
        </Box>  pair of lat/long
      </Typography>
      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 2 }}>
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
          curl --location 'https://maps.fribe.io/api/user/place/textsearch?search=oman&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3' \{'\n'}
          --header 'accept: application/json'
        </Typography>
      </Box>

      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 2 }}>
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
          {'  "_pagination": {\n'}
          {'    "total": 5271,\n'}
          {'    "totalPage": 20,\n'}
          {'    "currentPage": 0\n'}
          {'  },\n'}
          {'  "data": [\n'}
          {'    {\n'}
          {'      "_id": "b3090b1d-ddd9-4689-b568-69f18f5936a3",\n'}
          {'      "shortId": "01H6BMDGXGNGRT80ZMKKY347WW",\n'}
          {'      "formattedAddress": "a\'dawha st، صلالة 211",\n'} // Single quote escaped
          {'      "name": "صالون الجود للتجميل النسائي",\n'}
          {'      "city": "صلالة",\n'}
          {'      "country": "oman",\n'}
          {'      "alpha2": "OM",\n'}
          {'      "alpha3": "OMN",\n'}
          {'      "countryCode": "512",\n'}
          {'      "latitude": 17.0202989,\n'}
          {'      "longitude": 54.0842714\n'}
          {'    },\n'}
          {'    {\n'}
          {'      "_id": "07bc2319-fe65-437f-bed3-cea6ca19de21",\n'}
          {'      "shortId": "01H6BMDHA24NVD8A0TQEH60VZZ",\n'}
          {'      "formattedAddress": "239j+462 al ghuayra street new صلالة",\n'}
          {'      "name": "dhofar beauty",\n'}
          {'      "city": "صلالة",\n'}
          {'      "country": "oman",\n'}
          {'      "alpha2": "OM",\n'}
          {'      "alpha3": "OMN",\n'}
          {'      "countryCode": "512",\n'}
          {'      "latitude": 17.0177578,\n'}
          {'      "longitude": 54.0805267\n'}
          {'    }\n'}
          {'  ]\n'}
          {'}'}
        </Typography>
      </Box>

      {/* GET Request Example 2 */}
      <Typography className='HeaderResposive-Doc'  variant="h4" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 4 }}>
        GET Request Example 2
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
        Taking the next step to use further features offered in Places API. For the same{' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          search
        </Box> and{' '}
        <Box 
          component="span" 
          sx={{ 
            border: '1px solid gray', 
            padding: '0 4px', 
            borderRadius: '4px',
            display: 'inline-block',
            color: '#b055b0',
          }}>
          publishableKey
        </Box>, let's request another place search.
      </Typography>
      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 2 }}>
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
        curl --location 'https://maps.fribe.io/api/user/place/textsearch?search=USA&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3' \
        --header'accept: application/json'
        </Typography>
      </Box>

      <Typography variant="h6" component="h5" gutterBottom sx={{ lineHeight: 1.2, mt: 2 }}>
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
  {'  "_pagination": {\n'}
  {'    "total": 5271,\n'}
  {'    "totalPage": 20,\n'}
  {'    "currentPage": 0\n'}
  {'  },\n'}
  {'  "data": [\n'}
  {'    {\n'}
  {'      "_id": "86ae5a1e-210f-4e88-9247-ab85cfc580f8",\n'}
  {'      "shortId": "01H6BMDGXK845RRT665G7S6GJM",\n'}
  {'      "formattedAddress": "22gv+297، صلالة",\n'}
  {'      "name": "hair dresser & saloon - qais al tasfeeh",\n'}
  {'      "city": "صلالة",\n'}
  {'      "country": "oman",\n'}
  {'      "alpha2": "OM",\n'}
  {'      "alpha3": "OMN",\n'}
  {'      "countryCode": "512",\n'}
  {'      "latitude": 17.0250271,\n'}
  {'      "longitude": 54.0434181\n'}
  {'    },\n'}
  {'    {\n'}
  {'      "_id": "06d82902-db22-4696-9996-a0151e4becc2",\n'}
  {'      "shortId": "01H6BMDGXKRWG921KKVAGZQRXR",\n'}
  {'      "formattedAddress": "2486+3pf، شارع السلام، صلالة",\n'}
  {'      "name": "men\'s hair salon",\n'}
  {'      "city": "صلالة",\n'}
  {'      "country": "oman",\n'}
  {'      "alpha2": "OM",\n'}
  {'      "alpha3": "OMN",\n'}
  {'      "countryCode": "512",\n'}
  {'      "latitude": 17.0152021,\n'}
  {'      "longitude": 54.1118063\n'}
  {'    }\n'}
  {'  ]\n'}
  {'}'}
</Typography>
      </Box>
    </Container>
  );
};

export default FribeMapService;
