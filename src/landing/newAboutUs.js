import { Box, Container, Typography, Grid } from "@mui/material";
import * as React from "react";
import NewHeader from "./newHeader";
import Footer from "./footer";
import Structure from "../images/structure.jpg";

import Video_placeholder from "../images/about-us/about-us-video.png";
import Our_approch from "../images/about-us/our-approch.png";
import "./newAboutUs.css";
import Explore from "../images/about-us/explore.svg";
import Experiment from "../images/about-us/experiment.svg";
import Scale from "../images/about-us/scale.svg";
import OurTeams from "./ourTeams";
import NewHeaderSticky from "./newHeaderSticky";
import { $ } from "react-jquery-plugin";
import OurApproch from "./ourApproch";
const Newaboutus = () => {
  // sticky header animation
  React.useEffect(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() >= 150) {
        $(".header-main-sticky").addClass("fixed-header");
        // $('.header-main').slideUp(500);
        $(".header-main-sticky").slideDown(300);
      } else {
        // $('.header-main').slideDown(500);
        $(".header-main-sticky").slideUp(300);

        setTimeout(() => {
          $(".header-main-sticky").removeClass("fixed-header");
        }, 300);
      }
    });
  });
  // End//

  return (
    <>
      <div className="header-main">
        <NewHeader />
      </div>
      <div className="header-main-sticky">
        <NewHeaderSticky />
      </div>
      <Box className="about-us-main">
        <Typography className="about-us-title">About us</Typography>

        <Typography variant="body2" className="aboutus-desc">
          Through WIN, we foresee governance in India taking a thought-level
          shift backed by on-ground action from a reactive approach to a
          pre-emptive and proactive approach.
        </Typography>

        {/* <Typography variant="body2" className="aboutus-video-block">
          <img
            src={Video_placeholder}
            alt="aboutus-video-block"
            className="image-responsive"
          />
        </Typography> */}

        <Grid container rowSpacing={3} className="who-we-are-block-main">
          <Grid item xs={12}>
            <Typography variant="body2" className="who-we-are-block">
              Who we are
            </Typography>
            <Typography variant="body2" className="who-we-are-right-block">
              Amidst the inexplicable upheaval of the second CoViD-19 wave in
              India, some of us at the National Institute of Urban Affairs came
              together to approach the learnings from the pandemic to be taken
              to the ground and make our governance structures more resilient
              and of course lend the focus of the urban policy lens to public
              health and wellbeing of citizens.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{  display: { xs: 'none', sm: 'block' }}} className="our-approch-block">
        <img
          alt="our-approch"
          className="image-responsive approch-banner"
          src={Our_approch}
        />
        <Box className="our-approch-mainBox" sx={{ position: "relative" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 0, sm: 0, md: 6 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={7}>
              <Box className="our-approuch-box">
                <Typography className="our-approach-title">
                  Our approach
                </Typography>

                <div className="our-approch">
                  <img src={Explore} className="our-approch-object" alt="" />
                  <div className="our-approch-body">
                    <h3 className="our-approch-heading"> Explore</h3>
                    <Typography
                      variant="body2"
                      className="who-we-are-right-block"
                    >
                      There are a wide vareity of solutions to problems that the
                      goverment has to deal with - some solutions are better
                      suited to a context than others hence, the platter must be
                      explored.
                    </Typography>
                  </div>
                </div>

                <div className="our-approch">
                  <img src={Experiment} className="our-approch-object" alt="" />
                  <div className="our-approch-body">
                    <h3 className="our-approch-heading"> Experiment</h3>
                    <Typography
                      variant="body2"
                      className="who-we-are-right-block"
                    >
                      Through the entire process, even scale-up learning and
                      evaluating are key as the project is multisectoral
                      involving a growing and agile science. Consulting with all
                      stakeholders including the implementers, researchers and
                      decision makers is ongoing.
                    </Typography>
                  </div>
                </div>

                <div className="our-approch">
                  <img src={Scale} className="our-approch-object" alt="" />
                  <div className="our-approch-body">
                    <h3 className="our-approch-heading"> Scale-up/retry/discard</h3>
                    <Typography
                      variant="body2"
                      className="who-we-are-right-block"
                    >
                      Basis the key performance indicators and hypotheses of the
                      experiment/pilot the future course of the solution is
                      decided. Here, scale-up could entail exploring more use
                      cases for WBE as well as taking it to other cities of
                      India.
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
            <span className="divider-approch"></span>
            <div className="right-rotate-text">
              {" "}
             &nbsp; Learning, Consulting & Evaluating &nbsp;
            </div>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <Typography
                variant="body2"
                className="our-approach-right-side-text who-we-are-right-block"
              >
                Through the entire process, even scale-up learning and
                evaluating are key as the project is multisectoral involving a
                growing and agile science. Consulting with all stakeholders
                including the implementers, researchers and decision makers is
                ongoing.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
<Box sx={{ backgroundColor:"#fff",  display: { xs: 'block', sm: 'none' }}}>
<OurApproch />
</Box>

      <OurTeams />

      <Footer />
    </>
  );
};

export default Newaboutus;
