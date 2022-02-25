
import { Box, Typography, Grid } from "@mui/material";
import * as React from "react";
import DSC_big from "../../images/city-images/DSC_big.png";
import DSC_small from "../../images/city-images/DSC_small.png";

function SamplingStrategy(){
return(
    <Box className="customeMarginBottom ">
          <Grid container spacing={2} direction="row"
  justifyContent="center"
  alignItems="flex-end">
            <Grid item sm={12} xs={12} md={5} >
              <Typography variant="h4" className="cities_heading">
                Sampling Strategy
              </Typography>

              <p className="ws-surat-content">
                Samples are being collected 2 times every week from 14 locations
                in the west zone. These include 9 SPSs and 5 manholes. A grab
                sample of 500 ML is collected by dipping the bottle tied to a
                rope.
              </p>
              <img
                alt="Scope sampling"
                className="image-responsive"
                src={DSC_small}
              />
            </Grid>
            <Grid item sm={12} xs={12} md={7} >
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

