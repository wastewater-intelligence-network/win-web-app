import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import Header from "./header";
import SampleCollectionImg from '../Icons/Sample_Collection.svg';
function AboutUs() {
  return (
    <>
      <Header />

      <Box className="customeMarginBottom about">
        <Typography
          className="customeMarginBottom heading"
          sx={{
            typography: { sm: "h3", xs: "h6" },
            textApgn: "center",
            mt: 4,
          }}
        >
          ABOUT US
        </Typography>

        <Typography variant="h6" className="wbeDetailsContent">
        Wastewater Intelpgence Network is an initiative to bring together experts to manage the spread and impact of SARS-CoV-2 through Wastewater-based Epidemiology in Indian cities.
        </Typography>

        <Divider className="customeMarginBottom customeMarginTop"></Divider>

        <Typography sx={{ mb: 2 }} variant="h5" className="wbeDetailsHeading">
        How can we help you?
        </Typography>

        <Typography variant="body2" className="wbeDetailsContent">
          
            <p> 1- SOPs for end-to-end adoption of WBE in a city</p>
            <p> 2- Enhancement of data-led decision making by geospatial data dashboard</p>
            <p> 3- Real-time status of the on-ground situation for optimised pandemics’ management </p>
            <p> 4- Knowledge sharing and proactive collaboration with domain experts through the national and city-specific working groups</p>
         
          
        </Typography>

        <Divider className="customeMarginBottom customeMarginTop"></Divider>

        <Typography sx={{ mb: 2 }} variant="h5" className="wbeDetailsHeading">
        Meet the amazing team
        </Typography>

        <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 3, sm: 3, md: 3}}
              justifyContent="center"
              alignItems="center"
              
            >
              <Grid item xs={12} sm={6} md={4} >
                
              <Card className={'aboutCard'}>
              
          <CardContent>
            <img alt='Sample' src={SampleCollectionImg} width={40} />
            <Typography variant="h6" className="mycardHeading" component="div" sx={{my:2}}>
            Padam Vijay
            </Typography>
            <Typography className="mycardSubHeading">
            Technical Advisor
            </Typography>
            <Typography className="mycardSubHeading">
            Technical Advisor
            </Typography>
            <Typography className="mycardSubHeading">
            Technical Advisor
            </Typography>
            
          </CardContent>
        
        </Card>
    
              </Grid>
    
    
    
            </Grid>

      </Box>
    </>
  );
}

export default AboutUs;
