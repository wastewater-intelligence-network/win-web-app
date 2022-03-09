

import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import DSC_small from "../images/city-images/DSC_small.png";

function WorkOnThecities(){

    return(
<>

<Box sx={{ backgroundColor: "#f1f1f1",py: 2 }}>
        <Container className="mainContainer">
          <Box className="mainBox">

          <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 0, md: 2, lg: 4 }}
          justifyContent="center"
          alignItems="center"
        >
         

          <Grid item xs={12} sm={12} md={6}>
            
              
          <Typography
          className=" heading"
          sx={{ typography: { sm: "h3", xs: "h6" } }}
        >
          Work in the cities
        </Typography>
                <Typography className="wbeDetailsContent" variant="h6" sx={{mb:2}}>
                Nullam eget efficitur lorem. Phasellus viverra maximus sem in sagittis. Sed maximus vehicula sem, et ultricies orci consequat rutrum.
                 In hac habitasse platea dictumst. Proin viverra nunc risus. 
                </Typography>

                <Typography className="wbeDetailsContent" variant="h6">
                
                  Morbi odio tellus, malesuada vel luctus ut, tempor et turpis. Suspendisse euismod feugiat augue, quis pulvinar felis gravida in. 
                  Maecenas in felis a nibh hendrerit malesuada eu eu velit.
                </Typography>

                <h4>See Our cities & process ?</h4>

              <NavLink to="/surat" style={{ textDecoration: 'none' }}>  <Button variant="outlined" sx={{borderRadius: 1, m:2}}>Surat Deployment</Button> </NavLink>
                <Button variant="outlined" sx={{borderRadius: 1, m:2}}>Surat Deployment</Button>
                <Button variant="outlined" sx={{borderRadius: 1, m:2}}>Surat Deployment</Button>
                
              
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            
            <img alt="Sample" src={DSC_small} className="image-responsive" />
               
            </Grid>

        </Grid>



          </Box>
        </Container>
        </Box>
      
</>
    );
}

export default WorkOnThecities;


