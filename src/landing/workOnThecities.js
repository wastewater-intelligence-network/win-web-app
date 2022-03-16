

import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import WorkInThecities from "../images/WorkInThecities.png";

function WorkOnThecities(){

    return(
<>

<Box sx={{ backgroundColor: "#f1f1f1",py: 2 }}>
        
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
                CoViD-19 is caused by the SARS-CoV-2 virus that spreads through aerosol droplets discharged by an infected person. The incubation period of SARS-CoV-2 has been proven to be of a duration of 2 to 14 days.

                </Typography>

                <Typography className="wbeDetailsContent" variant="h6">
                
                Morbi odio tellus, malesuada vel luctus ut, tempor et turpis. Suspendisse euismod feugiat augue, quis pulvinar felis gravida in. Maecenas in felis a nibh hendrerit malesuada eu eu velit. 
                </Typography>

                <h4 className="workinthecities-title">See Our cities & process ?</h4>

              <NavLink to="/surat" style={{ textDecoration: 'none' }}>  <Button variant="outlined" className="work-cities-btn">Surat Deployment</Button> </NavLink>
                <Button variant="outlined" className="work-cities-btn">Surat Deployment</Button>
                <Button variant="outlined" className="work-cities-btn">Surat Deployment</Button>
                
              
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{paddingRight:'16px'}}>
            
            <img alt="Sample" style={{display:'block', marginLeft:'auto'}} src={WorkInThecities} className="image-responsive" />
               
            </Grid>

        </Grid>



          </Box>
        
        </Box>
      
</>
    );
}

export default WorkOnThecities;


