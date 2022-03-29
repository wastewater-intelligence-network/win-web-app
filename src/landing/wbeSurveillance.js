import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WBESurveillance from "../images/WBE_surveillance.png";

function WbeSurveillance() {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>

        <Box className="mainBox ptpb-80">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 0, sm: 0, md: 6 }}

          >
            <Grid item xs={12} sm={12} md={6} style={{ paddingLeft: '16px' }}>
              <img
                alt="Sample"
                src={WBESurveillance}
                className="image-responsive"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Typography
                className="side_heading"
                sx={{ typography: { sm: "h3", xs: "h6" } }}
              >
                WBE for surveillance
              </Typography>
              <Typography sx={{ mb: 3 }} className="wbeDetailsContent" variant="h6">
                WBE has been used for decades to track diseases as well as the efficacy of vaccination among other use cases. Due to its cost-effectiveness in terms of both time and money vis-à-vis door-to-door testing on a regular basis, WBE with a collective sample of a given catchment population can provide a bird’s eye view of trends from sampling over time in a city, zone, ward, area, lane or even a housing colony or a school – thereby making the catchment population number and boundary a key variable in successful WBE analysis.
              </Typography>
            </Grid>
            <Grid className="moreless-button-parent" item xs={12} sm={12} md={12}>
              <Typography sx={{ mb: 3 }} className="wbeDetailsContent moretext" variant="h6">
                WBE can track common disease outbreaks in India such as gastroenteritis, diarrhoea, cholera, pulmonary tuberculosis, hepatitis, malaria and acute respiratory infections among several others. WBE found its limelight in the recent past with the tracing of poliovirus cases post the polio vaccination programme across the world. However, the latest use case of WBE that has had researchers and countries across the world pushing for nation-wide surveillance programmes has been that of SARS-CoV-2.
              </Typography>
              <Typography className="wbeDetailsContent moretext" variant="h6">
                WBE has been acting as an early warning system for the coronavirus pandemic given the incubation period of the earlier variants was between 4-14 days and most cases were asymptomatic leading to the need for a solution that would not rely on citizens getting themselves tested after a half-month gap and multiplying the infections in that period by a manifold.
              </Typography>
              <button className="moreless-button">Read more</button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default WbeSurveillance;
