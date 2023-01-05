import * as React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import "./aboutData.js";
import "./ourTeams.css";
import Default_user from "../images/about-us/photo.jpg";

import { about_us_data } from "./aboutData.js";

function OurTeams() {
  const getImageUrl = (imageSrc) => {
    let image;
    try {
      image = require(`../images/about-us/${imageSrc}`);
    } catch (error) {
      image = Default_user;

    }
    return image;
  };
  return (
    <>
      <Box className="ourteam-block">
        <Typography variant="h4" className="our-team-title">
          Our team
        </Typography>

        <Typography variant="body2" className="our-team-sub-title">
          Where urban governance meets science
        </Typography>

        <Typography variant="h4" className="our-team-category">
          Leadership
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
            justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.leadership.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3} key={item.id}>
                <img
                  className="image-responsive big-height-250"
                  
                  alt="Sample"
                  src={getImageUrl(item.image_src)}
                  />
                 
                <Typography variant="h4" className="our-team-name">
                  <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}
                  </Link>
                </Typography>
                <Typography variant="body2" className="our-team-designation">
                  {item.designation}
                </Typography>
                <Typography variant="body2" className="our-team-organisation">
                  {item.organisation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
{/* Leadership End*/}

<Typography variant="h4" className="our-team-category">
          NIUA
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
            justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.niua.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
              <img
                  className="image-responsive big-height-250"
                  
                  alt="Sample"
                  src={getImageUrl(item.image_src)}
                  />

                <Typography variant="h4" className="our-team-name">
                  <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}
                  </Link>
                </Typography>
                <Typography variant="body2" className="our-team-designation">
                  {item.designation}
                </Typography>
                <Typography variant="body2" className="our-team-organisation">
                  {item.organisation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>



{/* NIUA End */}

<Typography variant="h4" className="our-team-category">
        ProjectManagement
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
          //   justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.projectManagement.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
              <img
                  className="image-responsive big-height-250"
                  
                  alt="Sample"
                  src={getImageUrl(item.image_src)}
                  />

                <Typography variant="h4" className="our-team-name">
                  <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}
                  </Link>
                </Typography>
                <Typography variant="body2" className="our-team-designation">
                  {item.designation}
                </Typography>
                <Typography variant="body2" className="our-team-organisation">
                  {item.organisation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>


{/* ProjectManagement End */}

<Typography variant="h4" className="our-team-category">
        SMCS & SSCDL
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
            justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.sMC_sSCDL.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
              <img
                  className="image-responsive big-height-250"
                  
                  alt="Sample"
                  src={getImageUrl(item.image_src)}
                  />

                <Typography variant="h4" className="our-team-name">
                  <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}
                  </Link>
                </Typography>
                <Typography variant="body2" className="our-team-designation">
                  {item.designation}
                </Typography>
                <Typography variant="body2" className="our-team-organisation">
                  {item.organisation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>

{/* SMCS & SSCDL */}


<Typography variant="h4" className="our-team-category">
        VNSGU
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
            justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.VNSGU.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
              <img
                  className="image-responsive big-height-250"
                  
                  alt="Sample"
                  src={getImageUrl(item.image_src)}
                  />

                <Typography variant="h4" className="our-team-name">
                  <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}
                  </Link>
                </Typography>
                <Typography variant="body2" className="our-team-designation">
                  {item.designation}
                </Typography>
                <Typography variant="body2" className="our-team-organisation">
                  {item.organisation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        

        {/* VNSGU */}


        <Typography variant="h4" className="our-team-category">
        Technical Advisors
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
          //   justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.technicalAdvisors.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
              <img
                  className="image-responsive big-height-250"
                  
                  alt="Sample"
                  src={getImageUrl(item.image_src)}
                  />

                <Typography variant="h4" className="our-team-name">
                  <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}
                  </Link>
                </Typography>
                <Typography variant="body2" className="our-team-designation">
                  {item.designation}
                </Typography>
                <Typography variant="body2" className="our-team-organisation">
                  {item.organisation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>

      </Box>
    </>
  );
}

export default OurTeams;
