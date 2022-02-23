import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import * as React from "react";
import Header from "../header";
import Footer from "../footer";

import ScopeOfSampling from "./scopeOfSampling";
import SamplingStrategy from "./samplingStrategy";
import SamplingLocation from "./samplingLocations";
import WastewaterSurveillance from "./wastewaterSurveillance";
function Surat() {
  const OnexecuteScrollPage = (props) => {
    console.log("testing");
    if (props === "WastewaterSurveillance") {
      let _elmScroll = document.getElementById("WastewaterSurveillance");
      _elmScroll.scrollIntoView();
    } else if (props === "ScopeOfSampling") {
      let _elmScroll = document.getElementById("ScopeOfSampling");
      _elmScroll.scrollIntoView();
    } else if (props === "SamplingStrategy") {
      let _elmScroll = document.getElementById("SamplingStrategy");
      _elmScroll.scrollIntoView();
    } else if (props === "SamplingLocation") {
      let _elmScroll = document.getElementById("SamplingLocation");
      _elmScroll.scrollIntoView();
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="city">
        {/* Wastewater Surveillance in Surat Section  */}
        <div id="WastewaterSurveillance">
          <WastewaterSurveillance executeScrollPage={OnexecuteScrollPage} />
        </div>
        {/* Scope of Sampling Section */}
        <div id="ScopeOfSampling">
          <ScopeOfSampling />
        </div>
        {/* Sampling Strategy Section*/}
        <div id="SamplingStrategy">
          <SamplingStrategy />
        </div>
        {/* Sampling Locations Section */}
        <div id="SamplingLocation">
          <SamplingLocation />
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Surat;
