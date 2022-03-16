import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WBESurveillance from "../images/WBE_surveillance.png";

function WbeSurveillance() {
  return (
    <>
      <Box className="mainBox">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 0, md: 3 }}
          
        >
          <Grid item xs={12} sm={12} md={6} style={{paddingLeft:'16px'}}>
            <img
              alt="Sample"
              src={WBESurveillance}
              className="image-responsive"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography
              className="side_heading"
              sx={{ typography: { sm: "h3", xs: "h6" } }}
            >
              WBE for Surveillance
            </Typography>
            <Typography sx={{mb:3}} className="wbeDetailsContent" variant="h6">
              CoViD-19 is caused by the SARS-CoV-2 virus that spreads through
              aerosol droplets discharged by an infected person. The incubation
              period of SARS-CoV-2 has been proven to be of a duration of 2 to
              14 days.
            </Typography>
            <Typography className="wbeDetailsContent" variant="h6">
              Morbi odio tellus, malesuada vel luctus ut, tempor et turpis.
              Suspendisse euismod feugiat augue, quis pulvinar felis gravida in.
              Maecenas in felis a nibh hendrerit malesuada eu eu velit.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default WbeSurveillance;
