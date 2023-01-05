import * as React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DecisionMakersMobile.css";

import EarlyWarning from "../images/decision-makers/ealry-warning.png";
import Containmentzones from "../images/decision-makers/containment-zones.png";
import TestingStrategy from "../images/decision-makers/testing-strategy.png";
import TimelyUpdates from "../images/decision-makers/timely-updates.png";
import TrackingTheSpread from "../images/decision-makers/tracking-spread.png";
import { formControlUnstyledClasses } from "@mui/base";

function DecisionMakersMobile() {

  //let imageCount = 5;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <div className="decision-makers-mobile-heading">
        Support decision makers
      </div>
      <Slider {...settings}>
        <div className="decision-makers-mobile-main">
          <img style={{ maxWidth: "100%" }} alt="Iscf" src={EarlyWarning} />
          <div className="content">
            <h3>Early warning </h3>
            <p>Early warning to cities (4 to 14 days ahead)</p>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Nius" src={TrackingTheSpread} />
          <div className="content">
            <h3>Tracking the spread </h3>
            <p> Estimating the infected population & type of variant</p>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Mohua" src={Containmentzones} />
          <div className="content">
            <h3>Containment Zones</h3>
            <p>Identification of hotspots and containment zones</p>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Smc" src={TestingStrategy} />
          <div className="content">
            <h3>Testing Strategy</h3>
            <p>Optimising testing strategy & allocation of resources</p>
          </div>
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Sscdl" src={TimelyUpdates} />
          <div className="content">
            <h3>Timely Updates</h3>
            <p>Alerts to authorities and citizens</p>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default DecisionMakersMobile;
