import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Grid } from "@mui/material";
import EarlyWarning from "../images/decision-makers/ealry-warning.png";
import Containmentzones from "../images/decision-makers/containment-zones.png";
import TestingStrategy from "../images/decision-makers/testing-strategy.png";
import TimelyUpdates from "../images/decision-makers/timely-updates.png";
import TrackingTheSpread from "../images/decision-makers/tracking-spread.png";
import "./decisionMakers.css";

function DecisionMakers() {
  const handleMouseEnter = (e) => {
    let $column = document.getElementsByClassName("decision-makers-block");
    $column[0].classList.remove("wide");
    $column[0].style.width = "10%";
    $column[1].classList.remove("wide");
    $column[1].style.width = "10%";
    $column[2].classList.remove("wide");
    $column[2].style.width = "10%";
    $column[3].classList.remove("wide");
    $column[3].style.width = "10%";
    $column[4].classList.remove("wide");
    $column[4].style.width = "10%";
    document.getElementById(e.currentTarget.id).classList.add("wide");
  };

  const handleMouseLeave = (e) => {
    let $column = document.getElementsByClassName("decision-makers-block");
    $column[0].style.width = "20%";
    $column[1].style.width = "20%";
    $column[2].style.width = "20%";
    $column[3].style.width = "20%";
    $column[4].style.width = "20%";
    document.getElementById(e.currentTarget.id).classList.remove("wide");
  };

  return (
    <>
      <Box className="customeMarginBottom">
        <Typography
          className="customeMarginBottom heading decision-makers"
          sx={{
            typography: { sm: "h3", xs: "h6", mx: 3 },
            textAlign: "center",
            mx: 9,
          }}
        >
          Support decision makers
        </Typography>
        <Grid
          hoverEffectcontainer
          justifyContent="center"
          alignItems="center"
          className="customeMarginBottom decision-makers-block-main"
        >
          <div
            id="decision-makers-block-early-morning"
            className="decision-makers-block decision-makers-block-early-morning"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img alt="Sample" src={EarlyWarning} className="image-responsive"  />
            <span>Early warning to cities (4 to 14 days ahead)</span>
          </div>
          <div
            id="decision-makers-block-tracking-spread"
            className="decision-makers-block decision-makers-block-tracking-spread"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img alt="Sample" src={TrackingTheSpread} className="image-responsive" />
            <span>Estimating the infected population & type of variant</span>
          </div>
          <div
            id="decision-makers-block-containment-zones"
            className="decision-makers-block decision-makers-block-containment-zones"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img alt="Sample" src={Containmentzones} className="image-responsive" />
            <span>Identification of hotspots and containment zones</span>
          </div>
          <div
            id="decision-makers-block-containment-zones"
            className="decision-makers-block decision-makers-block-testing-strategy"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img alt="Sample" src={TestingStrategy} className="image-responsive" />
            <span>Optimising testing strategy & allocation of resources</span>
          </div>
          <div
            id="decision-makers-block-timely-updates"
            className="decision-makers-block decision-makers-block-timely-updates"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img alt="Sample" src={TimelyUpdates}  className="image-responsive" />
            <span>Alerts to authorities and citizens</span>
          </div>
        </Grid>
      </Box>



      <div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn bottom</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img alt="" className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-bottom">
        <h3 className="content-title">This is a title</h3>
        <p className="content-text">This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn top</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img alt="" className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-top">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn left</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img alt="" className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-left">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn right</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img alt="" className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-right">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn top left</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img alt="" className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-top fadeIn-left">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn top right</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-top fadeIn-right">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn bottom left</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-bottom fadeIn-left">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>

<div className="hoverEffectcontainer">
  <h3 className="title">Text fadeIn bottom right</h3>
  <div className="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div className="content-overlay"></div>
      <img className="content-image" alt="" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362" />
      <div className="content-details fadeIn-bottom fadeIn-right">
        <h3>This is a title</h3>
        <p>This is a short description</p>
      </div>
    </a>
  </div>
</div>


{/* ----------------------------- */}

<div className="my_Container">
  <div className="item">
    <div className="content">
      <h3>Early warning </h3>
      <p>Early warning to cities (4 to 14 days ahead)</p>
    </div>
  </div>
  <div className="item">
    <div className="content">
      <h3>Tracking the spread </h3>
      <p> Estimating the infected population & type of variant</p>
    </div>
  </div>
  <div className="item">
    <div className="content">
      <h3>Containment Zones</h3>
      <p>Identification of hotspots and containment zones</p>
    </div>
  </div>
  <div className="item">
    <div className="content">
      <h3>Testing Strategy</h3>
      <p>Optimising testing strategy & allocation of resources</p>
    </div>
  </div>
  <div className="item">
    <div className="content">
      <h3>Timely Updates</h3>
      <p>Alerts to authorities and citizens</p>
    </div>
  </div>
</div>

    </>
  );
}

export default DecisionMakers;
