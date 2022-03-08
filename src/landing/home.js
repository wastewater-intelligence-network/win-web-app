import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WbeTesting from "../Icons/wbe_testing.svg";
import "./home.css";
import HomeBanner from "../images/banner-image.png";
import { Button, Container, Divider, Grid } from "@mui/material";
import WbeWork from "./wbeWorke";
import WbeWorkDetails from "./wbeWorkDetails";
import DecisionMakers from "./decisionMakers";
import CoreComponents from "./coreComponents";
import Footer from "./footer";
import Partners from "./partners";
import { useEffect, useMemo, useRef } from "react";
import ScrollButton from "./scrollToTopButton";
import NewHeader from "./newHeader";
import BannerLogos from "./bannerLogos";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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

  return (
    <>
      <NewHeader executeScrollWbe={OnexecuteScrollWbe} />
      <Box className="banner-section">
      
        <img alt="Banner" src={HomeBanner} className="banner-image" />
        <div className="background-opacity"></div>
        <Box className="banner-content">
        <Typography
          className="banner-text"
          sx={{ typography: { sm: "h4", xs: "h6" } }}
        >
          <span>Wastewater </span> &nbsp; is a reservoir of information about{" "}
          <span>your health</span> &nbsp; and we mine it to &nbsp;{" "}
          <span> build insights for the city governments</span>
        </Typography>


<Button className="button_style" sx={{backgroundColor:"#0080C8"}} variant="contained" endIcon={<ArrowRightAltIcon />}>
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
                className="specingBottomSection larsseitextrabold-font-family heading"
                sx={{ typography: { sm: "h3", xs: "h6" } }}
              >
                How do we mine insights from wastewater?
              </Typography>

              <iframe width="100%" height="315" src="https://www.youtube.com/embed/FvPakzqM3h8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <video width="320" height="240" controls>
  <source src="https://www.youtube.com/embed/FvPakzqM3h8" />
 
 </video>

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
                A method of{" "}
                <span>
                  collecting samples of wastewater from sewers, STPs, lakes etc.
                  and testing these samples for the presence and load of
                  pathogens{" "}
                </span>{" "}
                like viruses and bacteria. Erstwhile, this method was
                successfully used in India to track Polio and Hepatitis A.
              </Typography>
            </Box>
          </div>

          <Divider className="customeMarginTop customeMarginBottom"></Divider>

          <div id="howWbeWorkId">
            <WbeWork />
          </div>
        </Box>

        <WbeWorkDetails />

        <div id="decisionMakersId">
          <DecisionMakers />
        </div>

        <div id="coreComponentsId">
          <CoreComponents />
        </div>

        <div id="partnersId">
          <Box sx={{ textAlign: "center", my: 6, mx: 6 }}>
            <Typography
              className="specingBottomSection heading"
              sx={{ typography: { sm: "h2", xs: "h4" } }}
            >
              Partners
            </Typography>
            <Partners />
          </Box>
        </div>
      </Container>
      <Footer />
      <ScrollButton />
    </>
  );
}
export default Home;
