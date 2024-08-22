import React from 'react';
import { Container, Typography, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const FribeMapService = () => {
  return (
    <Container sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ lineHeight: 1.4 }}>
      Direction API
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
  value="https://maps.fribe.io/api/user/place/directions?origin_latlng=17.6125018,54.0344293&destination_latlg=21.473534,55.975414&steps=true&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&geometries=polyline&overview=simplified"
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
    navigator.clipboard.writeText("https://maps.fribe.io/api/user/place/directions?origin_latlng=17.6125018,54.0344293&destination_latlg=21.473534,55.975414&steps=true&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&geometries=polyline&overview=simplified");
  }}
>
  <ContentCopyIcon sx={{ fontSize: '18px' }} />
</Box>
</Box>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      The Distance API is used for fetch correct Direction from API.
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
To use the Direction API service please set the Base_URL https://maps.fribe.io/api/user/place/ directions.
</Typography>
<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send origin_latlng and destination_latlg combination of latitude and longitude
</Typography>
<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send "steps = true" to get steps data in response.
</Typography>
<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send "geometries = polyline" to get polygone line in decode form.
</Typography>
<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Or Send "geometries = geojson" to get polygone line coordinates array in json format inside steps response.
</Typography>
<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send publishableKey to authenticate you.
</Typography>
<Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
Send "overview=simplified" to get polygone line in decode form.
      </Typography>
     

      {/* Title */}
      <Typography variant="h5" component="h2" gutterBottom  sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        GET Request
      </Typography>

      {/* Paragraph with highlighted parameters */}
      <Typography variant="body1" paragraph>
      To utilize the Direction API and obtain information, a GET request is made with the required parameters: origin_latlng, destination_latlg, publishableKey,step, geometries and overview.
      </Typography>
      <Typography variant="5" component="h2" gutterBottom sx={{ lineHeight: 1.2, mt: 10 ,mb:5 }}>
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
    Sample Queries - Direction API
      </Typography>

      {/* GET Request Example 1 */}
      <Typography className='HeaderResposive-Doc'  variant="h5" component="h3" gutterBottom sx={{ lineHeight: 1.2, mt: 5 ,mb:3 }}>
        GET Request Example 1
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
      Let’s look at a simple Diection request with

a origin_latlng, destination_latlg, publishableKey,step, geometries and overview.
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
        curl --location 'https://maps.fribe.io/api/user/place/directions?origin_latlng=58.4031844%2C23.571207&destination_latlg=58.2874043%2C23.6016639&steps=true&publishableKey=01HQGAXKYD75JG27B4WKNSQ7G3&geometries=polyline&overview=simplified'
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
{'  "data": {\n'}
{'    "routes": [\n'}
{'      {\n'}
{'        "geometry": "{eq_Eqv{`F??",\n'}
{'        "legs": [\n'}
{'          {\n'}
{'            "steps": [\n'}
{'              {\n'}
{'                "intersections": [\n'}
{'                  {\n'}
{'                    "out": 0,\n'}
{'                    "entry": [\n'}
{'                      true\n'}
{'                    ],\n'}
{'                    "bearings": [\n'}
{'                      307\n'}
{'                    ],\n'}
{'                    "location": [\n'}
{'                      37.011127,\n'}
{'                      31.550539\n'}
{'                    ]\n'}
{'                  }\n'}
{'                ],\n'}
{'                "driving_side": "right",\n'}
{'                "geometry": "{eq_Eqv{`F??",\n'}
{'                "mode": "driving",\n'}
{'                "duration": 0,\n'}
{'                "maneuver": {\n'}
{'                  "bearing_after": 307,\n'}
{'                  "location": [\n'}
{'                    37.011127,\n'}
{'                    31.550539\n'}
{'                  ],\n'}
{'                  "bearing_before": 0,\n'}
{'                  "type": "depart"\n'}
{'                },\n'}
{'                "ref": "30",\n'}
{'                "weight": 0,\n'}
{'                "distance": 0,\n'}
{'                "name": "طريق الزرقاء - الارزق - العمري السريع"\n'}
{'              },\n'}
{'              {\n'}
{'                "intersections": [\n'}
{'                  {\n'}
{'                    "in": 0,\n'}
{'                    "entry": [\n'}
{'                      true\n'}
{'                    ],\n'}
{'                    "bearings": [\n'}
{'                      127\n'}
{'                    ],\n'}
{'                    "location": [\n'}
{'                      37.011127,\n'}
{'                      31.550539\n'}
{'                    ]\n'}
{'                  }\n'}
{'                ],\n'}
{'                "driving_side": "right",\n'}
{'                "geometry": "{eq_Eqv{`F",\n'}
{'                "mode": "driving",\n'}
{'                "duration": 0,\n'}
{'                "maneuver": {\n'}
{'                  "bearing_after": 0,\n'}
{'                  "location": [\n'}
{'                    37.011127,\n'}
{'                    31.550539\n'}
{'                  ],\n'}
{'                  "bearing_before": 307,\n'}
{'                  "type": "arrive"\n'}
{'                },\n'}
{'                "ref": "30",\n'}
{'                "weight": 0,\n'}
{'                "distance": 0,\n'}
{'                "name": "طريق الزرقاء - الارزق - العمري السريع"\n'}
{'              }\n'}
{'            ],\n'}
{'            "distance": 0,\n'}
{'            "duration": 0,\n'}
{'            "summary": "طريق الزرقاء - الارزق - العمري السريع",\n'}
{'            "weight": 0\n'}
{'          }\n'}
{'        ],\n'}
{'        "distance": 0,\n'}
{'        "duration": 0,\n'}
{'        "weight_name": "routability",\n'}
{'        "weight": 0\n'}
{'      }\n'}
{'    ],\n'}
{'    "waypoints": [\n'}
{'      {\n'}
{'        "hint": "-eFSgP___3-2AAAAtgAAAAsIAAAAAAAAZa_WQwAAAACFI5hFAAAAALYAAAC2AAAACwgAAAAAAADiCgCAt740Akts4QHWvgwB_X84AxwAPxNhzkzl",\n'}
{'        "distance": 2959522.69259,\n'}
{'        "name": "طريق الزرقاء - الارزق - العمري السريع",\n'}
{'        "location": [\n'}
{'          37.011127,\n'}
{'          31.550539\n'}
{'        ]\n'}
{'      },\n'}
{'      {\n'}
{'        "hint": "-eFSgP___3-2AAAAtgAAAAsIAAAAAAAAZa_WQwAAAACFI5hFAAAAALYAAAC2AAAACwgAAAAAAADiCgCAt740Akts4QH-qEcB9h1WAxwAPxNhzkzl",\n'}
{'        "distance": 2988210.294434,\n'}
{'        "name": "طريق الزرقاء - الارزق - العمري السريع",\n'}
{'        "location": [\n'}
{'          37.011127,\n'}
{'          31.550539\n'}
{'        ]\n'}
{'      }\n'}
{'    ],\n'}
{'    "distance": 0,\n'}
{'    "duration": 0\n'}
{'  }\n'}
{'}'}
        </Typography>
      </Box>
    </Container>
  );
};

export default FribeMapService;
