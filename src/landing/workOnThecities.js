

import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import WorkInThecities from "../images/WorkInThecities.png";

function WorkOnThecities(){

    return(
<>

{/* <Box sx={{ backgroundColor: "#f1f1f1",py: 2 }}> */}
        
          <Box className="mainBox">

          <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 0, md: 6, lg: 4 }}
          justifyContent="center"
          alignItems="center"
        >
         

          <Grid item xs={12} sm={12} md={6}>
            
              
          <Typography
              className="side_heading"
              sx={{ typography: { sm: "h3", xs: "h6" } }}
            >
              Work in the cities
            </Typography>
                <Typography className="wbeDetailsContent" variant="h6" sx={{mb:2}}>
                  A few cities in India have pioneered the use of WBE outside of the research setting to use the insights from the lab science to on-ground public health governance and decision-making. Bengaluru, Chandigarh, Nagpur, Pune and the WIN Programme’s deployment in Surat are pioneering efforts in India to track the coronavirus. 

                </Typography>

                <Typography className="wbeDetailsContent" variant="h6" sx={{mb:2}}>
                  WBE’s use and the various steps involved from choosing sample collection (sampling) points to the process of collection itself, testing, innovating and sustaining at a city-scale by the government versus performing this in a research set-up is starkly different.
                </Typography>

                <Typography className="wbeDetailsContent" variant="h6">
                  Indian cities have only taken baby steps in this vast pool of public health data that has been untouched for better governance. At every step there is a need to learn, improvise and customise the processes to choose an Indian city’s scenario. Therefore, WIN Programme aims to holistically approach the integration of the local authorities’ stronghold on local health operations, the larger vision of the centre and state towards better public health and the scientific and medical fraternity’s arduous efforts in bringing this research to suit India to systematise WBE as a method of tracking and staying informed and ahead of known but also newer pathogens and health hazards. 
                </Typography>
                

                <h4 className="workinthecities-title">See Our cities & process ?</h4>

              <NavLink to="/surat" style={{ textDecoration: 'none' }}>  <Button variant="outlined" className="work-cities-btn">Surat Deployment</Button> </NavLink>
                {/* <Button variant="outlined" className="work-cities-btn">Surat Deployment</Button>
                <Button variant="outlined" className="work-cities-btn">Surat Deployment</Button> */}
                
              
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{paddingRight:'16px'}}>
            
            <img alt="Sample" style={{display:'block', marginLeft:'auto'}} src={WorkInThecities} className="image-responsive" />
               
            </Grid>

        </Grid>



          </Box>
        
        {/* </Box> */}
      
</>
    );
}

export default WorkOnThecities;


