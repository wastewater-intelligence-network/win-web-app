import { Box, Container, Typography, Grid } from "@mui/material";
import * as React from "react";
import NewHeader from "./newHeader";
import Footer from "./footer";
import Structure from "../images/structure.jpg";

import Video_placeholder from "../images/about-us/about-us-video.png";
import Our_approch from "../images/about-us/our-approch.png";
import "./newAboutUs.css";

const Newaboutus = () => {
  return (
    <>
      <NewHeader />
      <Box className="about-us-main">
        <Typography
          className="about-us-title"
        >
          About us
        </Typography>

        <Typography variant="body2" className="aboutus-desc">
          Through WIN, We foresee governance in India taking a thought-level shift backed by on-ground action from a reactive approach to a pre-emptive and proactive approach.
        </Typography>

        <Typography variant="body2" className="aboutus-video-block">
          <img src={Video_placeholder} alt="aboutus-video-block" className="image-responsive" />
        </Typography>

        <Grid
          container
          rowSpacing={3} className="who-we-are-block-main">
          <Grid item xs={12} sm={3} md={3} className="who-we-are-block">
            Who we are
          </Grid>
          <Grid item xs={12} sm={9} md={9} className="who-we-are-right-block">
            Amidst the inexplicable upheaval of the second CoViD-19 wave in India, some of us at the National Institute of Urban Affairs came together to approach the learnings from the pandemic to be taken to the ground and make our governance structures more resilient and of course lend the focus of the urban policy lens to public health and wellbeing of citizens.
          </Grid>
        </Grid>
      </Box>

      <Box className="our-approch-block">
        <img alt="our-approch" className="image-responsive" src={Our_approch} />
      </Box>

      <Footer />
    </>
  );
};

export default Newaboutus;
