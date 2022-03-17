import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WbeTesting from "../Icons/wbe_testing.svg";
import "./home.css";
import HomeBanner from "../images/banner-image.png";
import { Button, Card, Container, Divider, Grid } from "@mui/material";
import WbeWork from "./wbeWorke";
import WbeWorkDetails from "./wbeWorkDetails";
import DecisionMakers from "./decisionMakers";
import CoreComponents from "./coreComponents";
import Footer from "./footer";
import Partners from "./partners";
import { useEffect, useMemo, useRef } from "react";
import ScrollButton from "./scrollToTopButton";
import NewHeader from "./newHeader";
import NewHeaderSticky from "./newHeaderSticky";
import BannerLogos from "./bannerLogos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WbeSurveillance from "./wbeSurveillance";
import WorkOnThecities from "./workOnThecities";
import { $ }  from 'react-jquery-plugin'

function Home() {
  const wbeRef = useRef(null);

  const OnexecuteScrollWbe = (props) => {
    console.log(props + " Testing Props");
    if (props === "wasteWaterBased") {
      let _elmScroll = document.getElementById("wasteWaterBasedId");
      _elmScroll.scrollIntoView();
    } else if (props === "howWbeWork") {
      let _elmScroll = document.getElementById("howWbeWorkId");
      _elmScroll.scrollIntoView();
    } else if (props === "decisionMakers") {
      let _elmScroll = document.getElementById("decisionMakersId");
      _elmScroll.scrollIntoView();
    } else if (props === "coreComponents") {
      let _elmScroll = document.getElementById("coreComponentsId");
      _elmScroll.scrollIntoView();
    } else if (props === "partners") {
      let _elmScroll = document.getElementById("partnersId");
      _elmScroll.scrollIntoView();
    }
  };

  useEffect(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() >= 150) {
          $('.header-main-sticky').addClass('fixed-header');
          $('.header-main').hide(500);
          $('.header-main-sticky').show(500);
      }
      else {
          $('.header-main-sticky').removeClass('fixed-header');
          $('.header-main').show(500);
          $('.header-main-sticky').hide(500);
      }
  });
  
  });

  return (
    <>
    <div className="header-main">
      <NewHeader executeScrollWbe={OnexecuteScrollWbe} />
      </div>  
      <div className="header-main-sticky">
      <NewHeaderSticky executeScrollWbe={OnexecuteScrollWbe} />
      </div>  
      <Box className="banner-section">
     
        <img alt="Banner" src={HomeBanner} className="banner-image" />
        <div className="background-overlay"></div>
        <div className="background-opacity"></div>
        <Box className="banner-content">
          <Typography
            className="banner-text"
            sx={{ typography: { sm: "h4", xs: "h6" } }}
          >
            <span>Wastewater is a reservoir of information about
            your </span> health  and we mine it to 
             build insights for the city <span> governments</span>
          </Typography>

          <Button
            className="button_style"
            sx={{ backgroundColor: "#0080C8" }}
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
          >
            How Does it work
          </Button>
          <BannerLogos />
        </Box>
        {/* <Box className="banner-logos">
          
        </Box> */}
      </Box>

      <Container className="mainContainer">
        <Box sx={{ textAlign: "center" }} className="mainBox">
          {/* <Typography
            className="customeMarginBottom firstTitle"
            sx={{ typography: { sm: "h4", xs: "h6" } }}
          >
            <span>Wastewater Intelligence Network</span>
            is an initiative to bring together experts to manage the spread and
            impact of SARS-CoV-2 through
            <span> Wastewater-based Epidemiology</span> in Indian cities.
          </Typography>

          <Partners /> */}

          <div id="wasteWaterBasedId">
            <Box className="specingBottomSection">
              <Typography
                className="specingBottomSection  heading"
                sx={{ typography: { sm: "h3", xs: "h6" } }}
              >
                How do we mine insights from wastewater?
              </Typography>

             
                <iframe
                  width="100%"
                  height="506"
                  src="https://www.youtube.com/embed/FvPakzqM3h8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              

              {/* 
              <video width="320" height="240" controls>
  <source src="https://www.youtube.com/embed/FvPakzqM3h8" />
 
 </video> */}

              {/* <img
                alt="WbeTesting"
                src={WbeTesting}
                width="200px"
                height="166px"
              /> */}
              <Typography
                className="subheading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
               We use wastewater-based epidemiology (WBE) which analyses wastewater to determine exposure to pathogens in a population. This is done by collecting samples of wastewater from sewers, STPs, lakes etc. and testing these samples for the presence of pathogens.
              </Typography>
            </Box>
          </div>

          {/* <div id="howWbeWorkId">
            <WbeWork />
          </div> */}
        </Box>
      </Container>

      <Box className="wbe-details-box" sx={{ backgroundColor: "#F9F9F9" }}>
        
          <Box className="mainBox">
            <WbeWorkDetails />
          </Box>
        
      </Box>

      <WbeSurveillance />

      <WorkOnThecities />

      
        <Box className="mainBox">
          <div id="decisionMakersId">
            <DecisionMakers />
          </div>
        </Box>
 

      {/* <div id="coreComponentsId">
        <CoreComponents />
      </div> */}


      <Box sx={{ backgroundColor: "#f9f9f9", py:2, mb:2}}>
        <Box className="mainBox">
        <Typography
                className="heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
            Partners
          </Typography>
          <Partners />
        </Box>
        </Box>
     

      <Footer />
      <ScrollButton />
    </>
  );
}
export default Home;
