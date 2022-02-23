import { Box, Typography, Grid } from "@mui/material";
import * as React from "react";
import ScopeSamplingImgae from "../../images/city-images/zone_west.png";
import Sps_small from "../../images/city-images/sps_small.png";
function ScopeOfSampling() {
  const westzoneFact = {
    data: [
      {
        name: "Population",
        value: "4,49,943 (9.7 % of Surat)",
      },
      {
        name: "Area (sq km)",
        value: "86.639 (18.7 % of Surat)",
      },
      {
        name: "# of Sewage Pumping Stations (SPS)",
        value: "9",
      },
      {
        name: "# of Sewage Treatment Plants (STP)",
        value: "2",
      },
    ],
  };

  return (
    <>
      <Box className="customeMarginBottom ">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4" className="cities_heading">
              Scope of Sampling
            </Typography>

            <Typography variant="body2">
              For the pilot deployment from 1st Jan, 2022 to 31st March, 2022,
              samples are being collected from the West Zone. Table below shows
              some of the relevant facts about the West Zone.
            </Typography>
            <h4>Some facts about the West Zone</h4>

            {westzoneFact.data.map((item) => {
              return (
                <Box sx={{ml:2}}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <p className="textBold">{item.name}</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p>{item.value}</p>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}

            <Typography variant="body2">
              Total of 14 samples are being collected; 9 from SPSs and 5 from
              outlet manholes originating from residential complexes.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <img
              alt="Scope sampling"
              className="image-responsive"
              src={ScopeSamplingImgae}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              alt="Scope sampling"
              className="image-responsive"
              src={Sps_small}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="Scope sampling"
              className="image-responsive"
              src={Sps_small}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              alt="Scope sampling"
              className="image-responsive"
              src={Sps_small}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ScopeOfSampling;
