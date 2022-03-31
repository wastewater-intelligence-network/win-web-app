import * as React from "react";
import { Box,  Typography } from "@mui/material";
import "./ourApproch.css";
import Explore from "../images/about-us/explore.svg";
import Experiment from "../images/about-us/experiment.svg";
import Scale from "../images/about-us/scale.svg";
function OurApproch(){
return(
<>
<Box className="our-approuch-mobile-box">
                <Typography className="our-approach-mobile-title">
                  Our approach
                </Typography>



                {/* <!-- Carousel --> */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Box>
      <div className="mobile-approch">
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
</Box>
    </div>
    <div className="carousel-item">
    <Box>
        <div className="mobile-approch">
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
        </Box>
    </div>
    <div className="carousel-item">
    <Box>
        <div className="mobile-approch">
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
    </div>
  </div>
</div>


<Box className="our-approach-mobile-last">
  <Typography className="our-approach-mobile-heading">
                Learning, Consulting & Evaluating
                </Typography>

                <Typography className="our-approach-mobile-content">
                Through the entire process, even scale-up learning and
                evaluating are key as the project is multisectoral involving a
                growing and agile science. Consulting with all stakeholders
                including the implementers, researchers and decision makers is
                ongoing.
                </Typography>


</Box>
                </Box>
</>
);
}

export default OurApproch;