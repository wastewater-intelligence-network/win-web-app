import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DSC_small from "../images/city-images/DSC_small.png";

function WbeSurveillance(){

    return(
<>


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
            
          <img alt="Sample" src={DSC_small} className="image-responsive" />
             
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            
              
          <Typography
          className=" heading"
          sx={{ typography: { sm: "h3", xs: "h6" } }}
        >
          WBE for Surveillance
        </Typography>
                <Typography className="wbeDetailsContent" variant="h6">
                Nullam eget efficitur lorem. Phasellus viverra maximus sem in sagittis. Sed maximus vehicula sem, et ultricies orci consequat rutrum.
                 In hac habitasse platea dictumst. Proin viverra nunc risus. Morbi sagittis augue elit. Etiam sodales aliquet ex id pulvinar.
                  Morbi odio tellus, malesuada vel luctus ut, tempor et turpis. Suspendisse euismod feugiat augue, quis pulvinar felis gravida in. 
                  Maecenas in felis a nibh hendrerit malesuada eu eu velit.
                </Typography>
              
          </Grid>
        </Grid>



          </Box>
        </Container>
      
</>
    );
}

export default WbeSurveillance;