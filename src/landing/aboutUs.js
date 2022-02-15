import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import Header from "./header";

function AboutUs() {
  return (
    <>
      <Header />

      <Box className="customeMarginBottom about">
        <Typography
          className="customeMarginBottom heading"
          sx={{
            typography: { sm: "h3", xs: "h6" },
            textApgn: "center",
            mt: 4,
          }}
        >
          ABOUT US
        </Typography>

        <Typography variant="h6" className="wbeDetailsContent">
        Wastewater Intelpgence Network is an initiative to bring together experts to manage the spread and impact of SARS-CoV-2 through Wastewater-based Epidemiology in Indian cities.
        </Typography>

        <Divider className="customeMarginBottom customeMarginTop"></Divider>

        <Typography sx={{ mb: 2 }} variant="h5" className="wbeDetailsHeading">
        How can we help you?
        </Typography>

        <Typography variant="body2" className="wbeDetailsContent">
          
            <p> 1- SOPs for end-to-end adoption of WBE in a city</p>
            <p> 2- Enhancement of data-led decision making by geospatial data dashboard</p>
            <p> 3- Real-time status of the on-ground situation for optimised pandemics’ management </p>
            <p> 4- Knowledge sharing and proactive collaboration with domain experts through the national and city-specific working groups</p>
         
          
        </Typography>

        <Divider className="customeMarginBottom customeMarginTop"></Divider>

        <Typography sx={{ mb: 2 }} variant="h5" className="wbeDetailsHeading">
        Meet the amazing team
        </Typography>

        <Typography variant="h6" className="wbeDetailsContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing ept. Etiam
          hendrerit pellentesque nisl, ut accumsan eros. Vivamus rhoncus, turpis
          nec ultrices cursus, dolor risus vehicula eros, eget apquam tellus
          est ultrices odio. Donec laoreet, lacus vitae consequat cursus, lorem
          turpis semper est, ac tincidunt risus lorem id diam. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Ut id tortor eros.
          Duis vept purus, molps non ullamcorper id, varius et justo. Nam
          molps consequat tellus eget suscipit. Proin ultrices in nisl sed
          dapibus. Sed tortor est, vulputate eget sem in, lacinia ultrices quam.
          Duis est dolor, apquet sed maximus a, pulvinar eu ante. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Curabitur posuere feps eu dolor solpcitudin mattis.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;
