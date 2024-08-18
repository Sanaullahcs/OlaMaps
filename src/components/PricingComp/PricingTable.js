import React from 'react';
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  styled
} from '@mui/material';
import "./PricingTable.css";


// Custom styles with reduced font size, padding, and margin
const CustomTableCell = styled(TableCell)(({ theme }) => ({
  border: '1px solid #ccc',
  padding: '8px',  // Reduced padding
  textAlign: 'left',
  fontSize: '0.875em',  // Reduced font size
  backgroundColor: '#f5f5f5',  
}));

const CustomHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#6E00DC',
  color: '#FFFFFF',
  fontSize: '1.125em',  // Reduced font size
  fontWeight: '700',
  textAlign: 'left',
  padding: '10px',  // Reduced padding
  
}));

const FreeTextCell = styled(TableCell)(({ theme }) => ({
  color: '#388E3C',
  fontWeight: 'bold',
  fontSize: '0.875em',  // Reduced font size
  padding: '8px',  // Reduced padding
  backgroundColor: '#f5f5f5',  
  border: '1px solid #ccc',
}));

const CenteredTextCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: '#f5f5f5',  
  verticalAlign: 'middle',
  padding: '10px',  // Reduced padding
  color: '#388E3C',
  fontWeight: 'bold',
  fontSize: '6em',
  textShadow: '9px 9px 3px rgba(0, 128, 0, 0.3)', // Drop shadow for text matching the image
  [theme.breakpoints.down('md')]: {
    fontSize: '4em',
    textShadow: '7px 6px 3px rgba(0, 128, 0, 0.3)', // Adjusted for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3em',
    textShadow: '5px 5px 3px rgba(0, 128, 0, 0.3)', // Adjusted for small screens
  },
}));

const TableWrapper = styled(Container)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.between(1400, 1401)]: {
    width: '70%',
  },
  margin: '0 auto',
  padding: '10px',  // Reduced padding
}));

const PricingTable = () => {
  return (
    <Container 
      maxWidth="lg" 
      style={{ 
        marginTop:'100px',
        textAlign: 'center', 
        fontFamily: 'Arial, sans-serif',
        padding: '10px',  // Reduced padding
      }}
    >
    
      <TableWrapper>
      <Typography 
        variant="h4"  // Reduced font size
        component="h1" 
        gutterBottom 
        style={{ marginBottom: '20px' ,textAlign:'start' , color:'#0A0A0A', fontWeight:'700', fontSize:'30px'}}  // Reduced margin
      >
        Pricing Plans
      </Typography>
      <Typography 
        variant="body2"  // Reduced font size
        color="textSecondary"
        paragraph 
        style={{ marginBottom: '20px' ,textAlign:'start' , color:'#555555',maxWidth:'400px'}}  // Reduced margin
      >
        Discover scalable plans for geospatial insights and seamless navigation solutions across diverse businesses.
      </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <CustomHeaderCell>API</CustomHeaderCell>
                <CustomHeaderCell>Monthly Volume</CustomHeaderCell>
                <CustomHeaderCell align="center">First Year</CustomHeaderCell>
                <CustomHeaderCell>Second Year</CustomHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <CustomTableCell rowSpan={2}>Autocomplete</CustomTableCell>
                <CustomTableCell>1 - 5,000,000</CustomTableCell>
                <CenteredTextCell rowSpan={8}>
                  F<br/>R<br/>E<br/>E
                </CenteredTextCell>
                <FreeTextCell>Free</FreeTextCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>5,000,001 - 10,000,000</CustomTableCell>
                <CustomTableCell>₹0.01</CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell rowSpan={2}>Reverse Geocoding</CustomTableCell>
                <CustomTableCell>1 - 5,000,000</CustomTableCell>
                <FreeTextCell>Free</FreeTextCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>5,000,001 - 10,000,000</CustomTableCell>
                <CustomTableCell>₹0.015</CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell rowSpan={2}>Vector Tiles</CustomTableCell>
                <CustomTableCell>1 - 5,000,000</CustomTableCell>
                <FreeTextCell>Free</FreeTextCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>5,000,001 - 10,000,000</CustomTableCell>
                <CustomTableCell>₹0.002</CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell rowSpan={2}>Directions</CustomTableCell>
                <CustomTableCell>1 - 5,000,000</CustomTableCell>
                <FreeTextCell>Free</FreeTextCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>5,000,001 - 10,000,000</CustomTableCell>
                <CustomTableCell>₹0.035</CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography 
        variant="body2"  // Reduced font size
        color="#777777" 
        style={{ marginTop: '20px' ,textAlign:'end', fontSize:'20px', fontWeight:'500'}}  // Reduced margin
      >
        *Prices Per API Call
      </Typography>
      </TableWrapper>
     
    </Container>
  );
};

export default PricingTable;
