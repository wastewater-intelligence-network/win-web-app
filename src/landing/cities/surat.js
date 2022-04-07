import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import { $ }  from 'react-jquery-plugin'
import ScopeOfSampling from "./scopeOfSampling";
import SamplingStrategy from "./samplingStrategy";
import SamplingLocation from "./samplingLocations";
import WastewaterSurveillance from "./wastewaterSurveillance";
import NewHeader from "../newHeader";
import ScrollButton from "../scrollToTopButton";
import NewHeaderSticky from "../newHeaderSticky";
function Surat() {


  const onExecuteScrollPageSurat = (props) => {
    
    if (props === "Wastewater Surveillance in Surat") {
      let _elmScroll = document.getElementById("WastewaterSurveillanceId");
      _elmScroll.scrollIntoView();
    } else if (props === "Scope of Sampling") {
      let _elmScroll = document.getElementById("ScopeOfSamplingId");
      _elmScroll.scrollIntoView();
    } else if (props === "Sampling Strategy") {
      let _elmScroll = document.getElementById("SamplingStrategyId");
      _elmScroll.scrollIntoView();
    } else if (props === "Sampling Location") {
      let _elmScroll = document.getElementById("SamplingLocationId");
      _elmScroll.scrollIntoView();
    }

  };

  useEffect(() => {

    console.log('ABout US')
    window.scrollTo(0, 0)
  }, [])

  // sticky header animation
  React.useEffect(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() >= 150) {
          $('.header-main-sticky').addClass('fixed-header');
          // $('.header-main').slideUp(500);
          $('.header-main-sticky').slideDown(300);
      }
      else {
          // $('.header-main').slideDown(500);
          $('.header-main-sticky').slideUp(300);

          setTimeout(() => {
            $('.header-main-sticky').removeClass('fixed-header');
          }, 300)
      }
  });
  
  });
// End//

  return (
    <>
      <div className="header-main">
      <NewHeader  />
      </div>  
      <div className="header-main-sticky">
      <NewHeaderSticky  />
      </div> 

      <Container maxWidth="lg" className="city">
      
        <div id="WastewaterSurveillanceId">
          <WastewaterSurveillance executeScrollPageSurat={onExecuteScrollPageSurat} />
        </div>
        </Container>
        
        <div id="ScopeOfSamplingId">
          <ScopeOfSampling />
        </div>
        {/* Sampling Strategy Section*/}
        {/* <div id="SamplingStrategyId">
          <SamplingStrategy />
        </div> */}
        <Container maxWidth="lg" className="city">
        <div id="SamplingLocationId">
          <SamplingLocation />
        </div>



      </Container>

      <Footer />
      <ScrollButton />
    </>
  );
}

export default Surat;
