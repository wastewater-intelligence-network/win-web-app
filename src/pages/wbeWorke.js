import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider, Grid } from '@mui/material';
import SampleCollectionImg from '../Icons/Sample_Collection.svg';
import SampleConcentrationImg from '../Icons/Sample_Concentration.svg';
import RNAExtraction from '../Icons/RNA_Extraction.svg';
import RNAMeasurement from '../Icons/RNA_Measurement.svg';
import DataAnalytics from '../Icons/Data_Analytics.svg';
import NoOne from '../Icons/NoOne.svg';
import NoTwo from '../Icons/NoTwo.svg';
import NoThree from '../Icons/NoThree.svg';
import NoFour from '../Icons/NoFour.svg';
import NoFive from '../Icons/NoFive.svg';

function WbeWork(){
    return(
        <>
        <Box className='customeMarginTop customeMarginBottom '>
        <Typography className=" heading" sx={{ typography: { sm: 'h3', xs: 'h6' } }}>How does WBE work?</Typography>
    
        <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 3, sm: 3, md: 3}}
              justifyContent="center"
              alignItems="center"
              
            >
              <Grid item xs={12} sm={6} md={4} >
                
              <Card className={'mycard'}>
              <div className='cardNumbers'>
                  <img alt='Numbers' src={NoOne} width={45} />
              </div>
          <CardContent>
            <img alt='Sample' src={SampleCollectionImg} width={40} />
            <Typography variant="h6" className="mycardHeading" component="div" sx={{my:2}}>
              Sample Collection
            </Typography>
            <Typography className="mycardSubHeading">
             Identifiaction of the source   of sample and collection of waste water samples
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
    
              <Grid item xs={12} sm={6} md={4} >
              
              <Card className={'mycard'}>
              <div className='cardNumbers'>
                  <img alt='Numbers' src={NoTwo}width={45} />
              </div>
          <CardContent>
            <img alt='Sample' src={SampleConcentrationImg} width={40} />
            <Typography variant="h6" className="mycardHeading" component="div" sx={{my:2}}>
              Sample Concentration
            </Typography>
            <Typography className="mycardSubHeading">
              Sample Concentration to  counter dilution and get accurate results
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
    
              <Grid item xs={12} sm={6} md={4} >
              
              <Card className={'mycard'}>
              <div className='cardNumbers'>
                  <img alt='Numbers' src={NoThree}width={45} />
              </div>
          <CardContent>
            <img alt='Sample' src={RNAExtraction} width={140} />
            <Typography variant="h6" className="mycardHeading" component="div" sx={{my:2}}>
              Rna Extraction
            </Typography>
            <Typography className="mycardSubHeading">
            Extraction of SARS-CoV-2 virus RNA from the sample collected
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
    
              <Grid item xs={12} sm={6} md={4} >
              
              <Card className={'mycard'}>
              <div className='cardNumbers'>
                  <img alt='Numbers' src={NoFour}width={45} />
              </div>
          <CardContent>
            <img alt='Sample' src={RNAMeasurement} width={40} />
            <Typography variant="h6" className="mycardHeading" component="div" sx={{my:2}}>
              RNA  Measurement
            </Typography>
            <Typography className="mycardSubHeading">
            Measurement of RNA genome to identify positivity and count
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
    
              <Grid item xs={12} sm={6} md={4} >
              
              <Card className={'mycard'}>
              <div className='cardNumbers'>
                  <img alt='Numbers' src={NoFive}width={45} />
              </div>
          <CardContent>
            <img alt='Sample' src={DataAnalytics} width={40} />
            <Typography variant="h6" className="mycardHeading" component="div" sx={{my:2}}>
              Data Analytics
            </Typography>
            <Typography className="mycardSubHeading">
             Analysis oo data to understand the trend of spread and identify hotspots and cantainment zones
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
    
    
            </Grid>
        </Box>
      
        </>
    );
}
export default WbeWork;