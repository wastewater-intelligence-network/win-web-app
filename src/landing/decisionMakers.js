import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider, Grid } from '@mui/material';
import EarlyWarning from '../Icons/Early_Warning.svg';
import Containmentzones from '../Icons/Containment_zones.svg';
import TestingStrategy from '../Icons/Testing_strategy.svg';
import TimelyUpdates from '../Icons/Timely_Updates.svg';
import TrackingTheSpread from '../Icons/Tracking_the_spread.svg';

function DecisionMakers() {
  return (
    <>
      <Box className="customeMarginBottom" >
        <Typography
          className="customeMarginBottom heading"
          sx={{ typography: { sm: "h3", xs: "h6" },textAlign:'center', mx:9 }}
        >
          Actionable Intelligence for Decision Makers
        </Typography>

        <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 3, sm: 3, md: 3, lg:1}}
              justifyContent="center"
              alignItems="center"
              className='customeMarginBottom'
            >
              <Grid item xs={12} sm={6} md={4}>
                
              <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                  <span>Early Warning</span>
              </div>
          <CardContent>
          
            <img alt='Sample' src={EarlyWarning} width={80} />
            <Typography className="larsseit-font-family" variant="h6" component="div" sx={{my:2}}>
           <span style={{fontWeight:'bold'}}> Early warning </span> <br></br> to cities (4 to 14 days ahead)
            </Typography>
           
            
          </CardContent>
        
        </Card>
    
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                
              <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                  <span>Tracking the spread</span>
              </div>
          <CardContent>
          
            <img alt='Sample' src={TrackingTheSpread} width={80} />
            <Typography className="larsseit-font-family" variant="h6" component="div" sx={{my:2}}>
            <span style={{fontWeight:'bold'}}> Estimating the infected population </span> <br /> & type of variant
            </Typography>
      
            
          </CardContent>
        
        </Card>
    
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                
              <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                  <span>Containment Zones</span>
              </div>
          <CardContent>
          
            <img alt='Sample' src={Containmentzones} width={80} />
            <Typography className="larsseit-font-family" variant="h6" component="div" sx={{my:2}}>
            <span style={{fontWeight:'bold'}}> Identification of <br /> hotspots </span>   and <br /> containment zones
            </Typography> 
          </CardContent>
        
        </Card>
    
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                
              <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                  <span>Testing Strategy</span>
              </div>
          <CardContent>
          
            <img alt='Sample' src={TestingStrategy} width={80} />
            <Typography className="larsseit-font-family" variant="h6" component="div" sx={{my:2}}>
            <span style={{fontWeight:'bold'}}>  Optimising testing <br /> strategy </span> & allocation <br /> of resources
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                
              <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                  <span>Timely Updates</span>
              </div>
          <CardContent>
          
            <img alt='Sample' src={TimelyUpdates} width={80} />
            <Typography className="larsseit-font-family" variant="h6" component="div" sx={{my:2}}>
            <span style={{fontWeight:'bold'}}>  Alerts </span> to authorities <br /> and citizens
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
              
    
             
    
    
            </Grid>
           


      </Box>

      <Divider className='customeMarginBottom'></Divider>
    </>
  );
}

export default DecisionMakers;
