
import { Box, Typography, Grid } from "@mui/material";
import * as React from "react";
import DSC_big from "../../images/city-images/DSC_big.png";
import DSC_small from "../../images/city-images/DSC_small.png";

function SamplingStrategy(){
return(
    <Box className="customeMarginBottom ">
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography variant="h4" className="cities_heading">
                Sampling Strategy
              </Typography>

              <Typography variant="body2">
                Samples are being collected 2 times every week from 14 locations
                in the west zone. These include 9 SPSs and 5 manholes. A grab
                sample of 500 ML is collected by dipping the bottle tied to a
                rope.
              </Typography>
              <img
                alt="Scope sampling"
                className="image-responsive"
                src={DSC_small}
              />
            </Grid>
            <Grid item xs={7}>
              <img
                alt="Scope sampling"
                className="image-responsive"
                src={DSC_big}
              />
            </Grid>
          </Grid>
        </Box>
);
}

export default SamplingStrategy;

