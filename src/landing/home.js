import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WbeTesting from "../Icons/wbe_testing.svg";
import "./home.css";
import { Container, Divider } from "@mui/material";
import Header from "./header";
import WbeWork from "./wbeWorke";
import WbeWorkDetails from "./wbeWorkDetails";
import DecisionMakers from "./decisionMakers";
import CoreComponents from "./coreComponents";
import Shit from "../Icons/Shit.svg";
import Footer from "./footer";
import Partners from "./partners";
import { textAlign } from "@mui/system";
import { useEffect, useMemo, useRef } from "react";
import ScrollButton from "./scrollToTopButton";

function Home() {

  const wbeRef = useRef(null);


  const OnexecuteScrollWbe = (props) => {
    if (props === 'wasteWaterBased') {
      let _elmScroll = document.getElementById("wasteWaterBased");
      _elmScroll.scrollIntoView();
    }
    else if (props === 'howWbeWork') {
      let _elmScroll = document.getElementById("howWbeWork");
      _elmScroll.scrollIntoView();
    }
    else if (props === 'decisionMakers') {
      let _elmScroll = document.getElementById("decisionMakers");
      _elmScroll.scrollIntoView();
    }
    else if (props === 'coreComponents') {
      let _elmScroll = document.getElementById("coreComponents");
      _elmScroll.scrollIntoView();
    }
    else if (props === 'partners') {
      let _elmScroll = document.getElementById("partners");
      _elmScroll.scrollIntoView();
    }

  }

  return (
    <>
      <Header executeScrollWbe={OnexecuteScrollWbe} />
      <Container className="mainContainer">
        <Box sx={{ textAlign: "center" }} className="mainBox">
          {/* <Typography
            className="specingBottomSection larsseitextrabold-font-family headingFontSize"
            sx={{ typography: { sm: "h3", xs: "h5" } }}
          >
            Your <img alt="Shit" src={Shit} /> matters
          </Typography> */}

          <Typography
            className="customeMarginBottom firstTitle"
            sx={{ typography: { sm: "h4", xs: "h6" } }}>
            <span>Wastewater Intelligence Network</span>
            is an initiative to bring together experts to manage the spread and
            impact of SARS-CoV-2 through
            <span> Wastewater-based Epidemiology</span> in
            Indian cities.
          </Typography>

          <Partners />
          <Divider className="customeMarginTop customeMarginBottom"></Divider>

          <div id="wasteWaterBased">
            <Box className="specingBottomSection">
              <Typography
                className="specingBottomSection larsseitextrabold-font-family heading"
                sx={{ typography: { sm: "h3", xs: "h6" } }}
              >
                Wastewater-Based Epidemiology
              </Typography>

              <img
                alt="WbeTesting"
                src={WbeTesting}
                width="200px"
                height="166px"
              />
              <Typography
                className="subheading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
                A method of <span>collecting samples of wastewater from sewers, STPs,
                  lakes etc. and testing these samples for the presence and load of
                  pathogens </span> like viruses and bacteria. Erstwhile, this method was
                successfully used in India to track Polio and Hepatitis A.
              </Typography>
            </Box>
          </div>

          <Divider className="customeMarginTop customeMarginBottom"></Divider>

          <div id="howWbeWork">
            <WbeWork />
          </div>

        </Box>

        
        <WbeWorkDetails />
        

        <div id="decisionMakers">
        <DecisionMakers />
        </div>

        <div id="coreComponents">
        <CoreComponents />
        </div>

        <div id="partners">
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
