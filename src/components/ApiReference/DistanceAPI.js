import React from 'react';
import { Container, Typography, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const FribeMapService = () => {
  return (
    <Container sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ lineHeight: 1.4 }}>
      Distance API
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
  value="https://maps.fribe.io/api/user/place/distance?origin_latlng=57.535793%2C22.376252&destination_latlg=57.535236%2C22.376083&publishableKey=01H48MDA0BSW67C8NGYP7S8B9R&annotations=distance,duration"
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
    navigator.clipboard.writeText("https://maps.fribe.io/api/user/place/distance?origin_latlng=57.535793%2C22.376252&destination_latlg=57.535236%2C22.376083&publishableKey=01H48MDA0BSW67C8NGYP7S8B9R&annotations=distance,duration");
  }}
>
  <ContentCopyIcon sx={{ fontSize: '18px' }} />
</Box>
</Box>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      The Distance API is used for fetch correct Distance from API.
      </Typography>

      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
To use the Distance API service please set the Base_URL https://maps.fribe.io/api/user/place/ directions.
</Typography>

<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send origin_latlng and destination_latlg combination of latitude and longitude
</Typography>



<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send "⁠annotations = distance,duration" to get steps data in response.
</Typography>

<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send publishableKey to authenticate your request.
        </Typography>

      {/* Title */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        GET Request
      </Typography>

      {/* Paragraph with highlighted parameters */}
      <Typography variant="body1" paragraph>
      To utilize the Distance API and obtain information, a GET request is made with the required parameters: origin_latlng, destination_latlg, publishableKey and annotations.
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
        <TableCell>origin_latlng</TableCell>
        <TableCell>Yes</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Format: 32 character alphanumeric string<br />
          Example: origin_latlng=longitude,latitude
        </TableCell>
        <TableCell>
          A origin_latlng coordinates longitude and latitude in the API.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>destination_latlng</TableCell>
        <TableCell>Yes</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Format: 32 character alphanumeric string<br />
          Example: destination_latlng=longitude,latitude
        </TableCell>
        <TableCell>
          A destination_latlng coordinates longitude and latitude in the API.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>publishableKey</TableCell>
        <TableCell>Yes</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Format: alphanumeric string<br />
          Example: publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>annotations</TableCell>
        <TableCell>Yes</TableCell>
        <TableCell>
          <strong>Type:</strong> string<br />
          Format: alphanumeric<br />
          Example: annotations=distance,duration
        </TableCell>
        <TableCell>
          <Box component="span" sx={{ color: '#b055b0', fontWeight: 'bold' }}>
            annotations
          </Box> to get data in response.
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
    <Typography className='HeaderResposive-Doc'  variant="h4" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 10 ,mb:5 }}>
    Sample Queries - Distance API
      </Typography>

      {/* GET Request Example 1 */}
      <Typography className='HeaderResposive-Doc'  variant="h5" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
      GET Request Example 1
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      Let’s look at a simple Diection request with

a origin_latlng, destination_latlg, publishableKey and annotations.
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
        curl --location 'https://maps.fribe.io/api/user/place/distance?origin_latlng=57.535793%2C22.376252&destination_latlg=57.535236%2C22.376083&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&annotations=distance%2Cduration'
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
{'  "code": "Ok",\n'}
{'  "routes": [\n'}
{'    {\n'}
{'      "geometry": "yzcgB_|tiI`CKVChI_@l@ChCOlGWnDQhAERAbCKtBIfDSLAp@B|ADlCBbCBlBBpJHfIFvCNvJpBdDn@xDJtFFrBEzPeApDOxMLhJJPDBPIhJOzOE^CnF?|@IjE?VXAdFQbEQdGSFBDDBF?HCFEDyGTGvF[pWGdFCdB",\n'}
{'      "legs": [\n'}
{'        {\n'}
{'          "steps": [\n'}
{'            {\n'}
{'              "intersections": [\n'}
{'                {\n'}
{'                  "out": 0,\n'}
{'                  "entry": [true],\n'}
{'                  "bearings": [175],\n'}
{'                  "location": [54.179359, 17.064285]\n'}
{'                },\n'}
{'                {\n'}
{'                  "out": 1,\n'}
{'                  "location": [54.179424, 17.063639],\n'}
{'                  "bearings": [0, 180, 270],\n'}
{'                  "entry": [false, true, true],\n'}
{'                  "in": 0\n'}
{'                }\n'}
{'              ]\n'}
{'            }\n'}
{'          ]\n'}
{'        }\n'}
{'      ]\n'}
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
      Taking the next step to use further features offered in direction API. For the different geometrics


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
        curl --location 'https://maps.fribe.io/api/user/place/distance?origin_latlng=57.535793%2C22.376252&destination_latlg=57.535236%2C22.376083&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&annotations=distance%2Cduration'
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
{'  "code": "Ok",\n'}
{'  "routes": [\n'}
{'    {\n'}
{'      "geometry": {\n'}
{'        "coordinates": [\n'}
{'          [\n'}
{'            54.179359,\n'}
{'            17.064285\n'}
{'          ],\n'}
{'          [\n'}
{'            54.179424,\n'}
{'            17.063639\n'}
{'          ],\n'}
{'          [\n'}
{'            54.179436,\n'}
{'            17.063516\n'}
{'          ],\n'}
{'          [\n'}
{'            54.1796,\n'}
{'            17.061867\n'}
{'          ]\n'}
{'        ]\n'}
{'      }\n'}
{'    }\n'}
{'  ]\n'}
{'}'}
</Typography>
      </Box>
    </Container>
  );
};

export default FribeMapService;
