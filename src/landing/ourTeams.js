import * as React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import "./aboutData.js";
import "./ourTeams.css";
import Default_user from "../images/about-us/photo.jpg";
import Padam_Vijay from "../images/padam.jpg";
import Uday from "../images/uday.jpg";
import Mahreen from "../images/mahreen.jpg";
import Shilpa from "../images/shilpa.jpg";
import Abhisikha_Das from "../images/abhisikha.jpg";
import Abhishek_Upperwal from "../images/abhishek.jpg";
import { about_us_data } from "./aboutData.js";

function OurTeams() {
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
          //   justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.leadership.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
                <img
                  className="image-responsive"
                  alt="Sample"
                  src={
                    item.profile_image_src === "Padam_Vijay"
                      ? Padam_Vijay
                      : item.profile_image_src === "Uday"
                      ? Uday
                      : item.profile_image_src === "Mahreen"
                      ? Mahreen
                      : item.profile_image_src === "Shilpa"
                      ? Shilpa
                      : item.profile_image_src === "Abhisikha_Das"
                      ? Abhisikha_Das
                      : item.profile_image_src === "Abhishek_Upperwal"
                      ? Abhishek_Upperwal
                      : Default_user
                  }
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
<hr/>
        <Typography variant="h4" className="our-team-category">
          NIUA
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2 }}
          //   justifyContent="center"
          //   alignItems="center"
        >
          {about_us_data.niua.map((item) => {
            return (
              <Grid item xs={6} sm={6} md={6} lg={3}>
                <img
                  className="image-responsive"
                  alt="Sample"
                  src={
                    item.profile_image_src === "Padam_Vijay"
                      ? Padam_Vijay
                      : item.profile_image_src === "Uday"
                      ? Uday
                      : item.profile_image_src === "Mahreen"
                      ? Mahreen
                      : item.profile_image_src === "Shilpa"
                      ? Shilpa
                      : item.profile_image_src === "Abhisikha_Das"
                      ? Abhisikha_Das
                      : item.profile_image_src === "Abhishek_Upperwal"
                      ? Abhishek_Upperwal
                      : Default_user
                  }
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
