import * as React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

import "./ourTeams.css";
import PadamVijay from "../images/about-us/padamvijay.png"
function OurTeams() {
  return (
    <>
      <Box className="ourteam-block">
        <Typography variant="h4" className="our-team-title">
          Our Team
        </Typography>

        <Typography variant="body2" className="our-team-sub-title">
          Where urban governance meets science
        </Typography>

        <Typography variant="h4" className="our-team-category">
          NIUA
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 0, md: 6 }}
        //   justifyContent="center"
        //   alignItems="center"
        >
          <Grid item xs={12} sm={6} md={6} lg={4}>
        <img alt="Padam Vijay" src={PadamVijay} className="image-responsive" />
        <Typography variant="h4" className="our-team-name">
          Padma Vijay
        </Typography>
        <Typography variant="body2" className="our-team-designation">
        Technical Advisor
        </Typography>

          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
        <img alt="Padam Vijay" src={PadamVijay} className="image-responsive" />
        <Typography variant="h4" className="our-team-name">
          Padma Vijay
        </Typography>
        <Typography variant="body2" className="our-team-designation">
        Technical Advisor
        </Typography>

          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
        <img alt="Padam Vijay" src={PadamVijay} className="image-responsive" />
        <Typography variant="h4" className="our-team-name">
          Padma Vijay
        </Typography>
        <Typography variant="body2" className="our-team-designation">
        Technical Advisor
        </Typography>

          </Grid>
          
        </Grid>
      </Box>
    </>
  );
}

export default OurTeams;
