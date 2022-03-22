import * as React from "react";

import {Grid, Typography } from "@mui/material";

import "./wbeworkDetailsBScarusel.css";
import Infection from "../images/wbeWorkDetails/infection.png";
import Shedding from "../images/wbeWorkDetails/Shedding.png";
import SampleCollection from "../images/wbeWorkDetails/Sample-collection.png";
import SampleConcentration from "../images/wbeWorkDetails/Sample-concentration.png";
import RNAExtraction from "../images/wbeWorkDetails/RNA-extraction.png";
import RNAMeasurement from "../images/wbeWorkDetails/RNA-measurement.png";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// function WbeWorkDetails(props) {
//   const items = [
//     {
//       Name: "Pizza begin",
//       Image: "https://source.unsplash.com/featured/?macbook",
//       contentPosition: "left"
//     },
//     {
//       Name: "Home Appliances",
//       Caption: "Say no to manual home labour!",
//       contentPosition: "middle",
//       Image: "https://source.unsplash.com/featured/?washingmachine"
//     },
//     {
//       Name: "Decoratives",
//       Caption: "Give style and color to your living room!",
//       contentPosition: "right",
//       Image: "https://source.unsplash.com/featured/?lamp"
//     }
//   ];

//   // return (
//   //   <Carousel>
//   //     {
//   //       items.map((item, i) => <Item key={i} item={item} />)
//   //     }
//   //   </Carousel>
//   // )
// }

function WbeWorkDetails() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        >
          {" "}
         <span>Infection</span> 
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        >
          <span>Shedding</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        >
          <span>Sample Collection</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        >
          <span>Sample Concentration</span>
        </button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        >
          <span>RNA Extraction</span>
        </button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        >
          <span>RNA Measurement</span>
        </button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        >
          <span>Data Analysis</span>
        </button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Grid container spacing={2} columnSpacing={{ xs: 0, sm: 0, md: 4, lg: 6, xl: 6 }}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">Infection</h4>

              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
               The beginning of the end
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
              CoViD-19 is caused by the SARS-CoV-2 virus that spreads through aerosol droplets discharged by an infected person. The incubation period of SARS-CoV-2 has been proven to be of a duration of 2 to 14 days.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={Infection} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">Shedding</h4>
              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
                Spilling the beans
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
              Humans start excreting the virus in the stools as soon as they are infected by it regardless of whether they are showing symptoms. Therefore, testing wastewater for SARS-CoV-2 can aid in the early detection of the virus in a given area, even before the infected individual(s) develop symptoms or before they are aware they are infected
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={Shedding} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">Sample Collection</h4>
              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
               Exploring uncharted waters
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
              Samples from sewers, pumping stations, sewerage treatment plants or chambers in buildings are collected for testing. WIN uses grab and composite sampling at a set interval. In grab, a single sample is collected manually from the source. In composite, samples are collected by pooling multiple grab samples.

              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={SampleCollection} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">Sample Concentration</h4>
              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
                Un-muddying the waters
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
              By reducing the amount of water or any non-relevant materials in a diluted sample, the resulting concentrated sample contains higher amounts of SARS-CoV-2 RNA. This concentrated sample will yield better results.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={SampleConcentration} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>
        <div className="carousel-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">RNA Extraction</h4>
              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
                Let's extract the RNA
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
                To count the SARS-CoV-2 RNA we first need to extract, isolate and purify the RNA from a complex sample mixture. It is performed by utilising a commercial kit for environmental sample extraction.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={RNAExtraction} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>

        <div className="carousel-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">RNA Measurement</h4>
              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
                Testing the waters
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
                Count of RNA in the sample is important to quantify the load of the virus in the wastewater. This quantification is done with RNA Measurement using RT-qPCR and RT-ddPCR.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={RNAMeasurement} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>

        <div className="carousel-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <h4 className="WBEWork-title">Data Analysis</h4>
              <Typography
                className="WbeWorkDetails-heading"
                sx={{ typography: { sm: "h4", xs: "h6" } }}
              >
                Do the samples hold water?
              </Typography>
              <Typography className="wbeDetailsContent" variant="h6">
                The measured RNA data along with additional datasets are analysed to infer the count of infected population, identify trends and patterns of infection in the catchment area. This will enable informed decision making by the governments and other stakeholders.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={RNAMeasurement} className="d-block w-100" alt="..." />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="next_prevous_btn">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span style={{color:"#677171;"}}
            // className="carousel-control-prev-icon"
            aria-hidden="true"
          > <ArrowBackIosNewIcon fontSize="small" /></span>
          {/* <span className="visually-hidden">Previous</span> */}
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
        
        
          <span style={{color:"#677171;"}}
            // className="carousel-control-next-icon"
            aria-hidden="true"
          > <ArrowForwardIosIcon fontSize="small" /></span>
          {/* <span className="visually-hidden">Next</span> */}
        </button>
      </div>
    </div>
  );
}

export default WbeWorkDetails;

// function Item(props) {

//       <Grid
//         container
//         rowSpacing={3}
//         columnSpacing={{ xs: 3, sm: 3, md: 12 }}
//         justifyContent="center"
//         alignItems="center">
//         <Grid item xs={12} sm={6} md={6} >
//           {props.item.Caption}
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo

//         </Grid>

//           <Grid item xs={12} sm={6} md={6} >
//             <img src={props.item.Image} style={{ width: 100 + '%' }} />
//           </Grid>
//         </Grid>
//   )
// }
