import { Box, Typography, Grid, Button } from "@mui/material";
import * as React from "react";
import Sps_big from "../../images/city-images/sps_big.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DSC_big from "../../images/city-images/DSC_big.png";
import DSC_small from "../../images/city-images/DSC_small.png";
import { $ } from "react-jquery-plugin";

function SamplingLocation() {
  const SPSCollectionLoacation = [
    "Pisad",
    "Pal",
    "Pal TP 74",
    "Rander",
    "Variav College",
    "Variav Khadi",
    "Jahangirabad",
    "Adajan",
    "Pal Palanpore",
  ];

  const manholeCollectionLocations = [
    "Sharda Row House",
    "Jay Ambe Society",
    "Mangaldeep Complex",
    "Amrapali Society",
    "Nildhara Row House",
  ];
  function oneFunction() {
    $("#first").show();
    $("#secnd").hide();
    $("#first_btn").addClass("active_btn");
    $("#secnd_btn").removeClass("active_btn");
  }

  function twoFunction() {
    $("#secnd").show();
    $("#first").hide();
    $("#secnd_btn").addClass("active_btn");
    $("#first_btn").removeClass("active_btn");
  }

  return (
    <Box className="samplingLocationBox">
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12} md={6}>
          <Typography variant="h4" className="cities_2ndheading">
            Sampling frequency and locations
          </Typography>
          <p className="surat-content">
            The samples are being collected twice a week, i.e.Monday and
            Thursday, from 14 locations. Out of these 14 locations, samples are
            collected from nine SPS and five manholes. The manholes have been
            chosen in order to move upstream The samples are being collected
            from all the nine SPS.
          </p>
          <div>
            {" "}
            <Button
            id="first_btn"
              onClick={oneFunction}
              variant="outlined"
              className="location_button active_btn"
            >
              SPS Collection Locations
            </Button>
          </div>
          <div>
            {" "}
            <Button
            id="secnd_btn"
              onClick={twoFunction}
              variant="outlined"
              className="location_button"
            >
              Manhole Collection Locations
            </Button>{" "}
          </div>

          {/* <Grid container spacing={2}>
            <Grid item sm={6} xs={12} md={6}>
              <Typography variant="h4" className="title-bg">
                SPS Collection Locations
              </Typography>
              {SPSCollectionLoacation.map((item) => {
                return (
                  <ul className="location_list">
                    <li>{item}</li>
                  </ul>
                );
              })}
            </Grid>
            <Grid item sm={6} xs={12} md={6}>
              <Typography variant="h4" className="title-bg title-bg-1">
                Manhole Collection Locations
              </Typography>
              {manholeCollectionLocations.map((item) => {
                return (
                  <ul className="location_list">
                    <li>{item}</li>
                  </ul>
                );
              })}
            </Grid>
          </Grid> */}
        </Grid>
        <Grid item sm={8} xs={12} md={6}>
          <img id="first"
            alt="Scope sampling"
            className="image-responsive"
            src={Sps_big}
          />

          <img id="secnd"
            alt="Scope sampling"
            className="image-responsive"
            src={DSC_big}
          />
        </Grid>

        <Box className="p_top">
          <p className="surat-content">
            The details of the collected samples (location, date, time,
            pH/temperature of the sample, etc.) are tracked by the sample
            collection staff using the WIN mobile application. The collected
            samples are then transported to the lab for testing where the
            further process takes place.
          </p>
        </Box>
      </Grid>
      <Box className="zone_selection_box">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="ceter"
          alignItems="start"
        >
          <Grid item sm={12} xs={12} md={4}>
            <Typography variant="h4" className="cities_sub_heading">
              Zone selection
            </Typography>
            <p className="surat-content">
              Veer Narmad South Gujarat University (VNSGU) is the testing
              partner for the pilot in Surat. The lab staff, while receiving the
              samples, intimate the same on the WIN mobile application. After
              the testing process is done, the results are uploaded as a
              document on the mobile app.
            </p>
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <img
              alt="sampling"
              className="image-responsive bigimage"
              src={DSC_big}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <img
              alt="sampling"
              className="image-responsive bigimage"
              src={DSC_big}
            />

            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} md={6}>
                <img
                  alt="sampling"
                  className="image-responsive"
                  src={DSC_small}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={6}>
                <img
                  alt="sampling"
                  className="image-responsive"
                  src={DSC_small}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SamplingLocation;
