import { Box, Typography, Grid } from "@mui/material";
import * as React from "react";
import Sps_big from "../../images/city-images/sps_big.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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
"Sharda Row House", "Jay Ambe Society", "Mangaldeep Complex", "Amrapali Society", "Nildhara Row House"
  ]
  return (
    <Box className="customeMarginBottom ">
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12} md={6}>
          <Typography variant="h4" className="cities_heading">
            Sampling Locations
          </Typography>
          <Typography variant="body2" sx={{mb:3}}>
            Samples are being collected 2 times every week from 14 locations in
            the west zone. These include 9 SPSs and 5 manholes. A grab sample of
            500 ML is collected by dipping the bottle tied to a rope.
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} md={6}>

              <Typography variant="h4" className="title-bg">SPS Collection Locations</Typography>
              {SPSCollectionLoacation.map((item) => {
                return (  
                  <ul className="location_list">
                  <li>{item}</li>
                  </ul>
                );
              })}

            </Grid>
            <Grid item sm={6} xs={12} md={6}>
              <Typography variant="h4" className="title-bg title-bg-1">Manhole Collection Locations</Typography>
              {manholeCollectionLocations.map((item) => {
                return (  
                  <ul className="location_list">
                  <li>{item}</li>
                  </ul>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8} xs={12} md={6} >
          <img
            alt="Scope sampling"
            className="image-responsive"
            src={Sps_big}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SamplingLocation;
