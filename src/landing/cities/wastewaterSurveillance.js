import { Box, Typography, Grid, Divider } from "@mui/material";
import * as React from "react";
import CityBreadcrumbs from "./breadcrumbs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SurveillanceSuratBanner from "../../images/city-images/surveillance-surat-banner.png"

function WastewaterSurveillance(props){

    const handleClickSuratTabIndex = (e) => {
 
        setTimeout(() => {
          
          props.executeScrollPageSurat(e.target.innerText);
          
        }, 100);
      };


    return(
      <>
        <Box  sx={{ mt: 3, mb:3 }}>
        <Grid container spacing={2} columnSpacing={3} className="columnReverse">
          <Grid item sm={12} xs={12} md={6} lg={8}>
          <Typography  className="cities_title">
             Surat
            </Typography>
            <Typography variant="h4" className="cities_heading ">
              Wastewater surveillance in surat
            </Typography>
            <p className="surat-content">
              Surat Municipal Corporation (SMC) in close coordination with
              National Institute of Urban Affairs (NIUA) has deployed
              Wastewater Intelligence Network (WIN) which is a wastewater
              surveillance system to monitor SARS-CoV-2 and other pathogens in
              the City. SMC has partnered with various stakeholders at the
              city level to enable WIN with funding from NIUA. In building
              this surveillance system, SMC coordinates expertise from
              multiple partners to identify possible collection sites, collect
              samples, conduct SARS-CoV-2 testing and quantification of viral
              load in wastewater samples. These partners include other City
              departments (e.g. the Drainage Department, Health Department),
              Veer Narmad South Gujarat University (VNSGU).
            </p>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={4}>
          <Box className="onthispage_box">

          
            {/* <CityBreadcrumbs /> */}
        
            <p className="onthipage-title">On this page</p>
            <Divider sx={{ color: "primary" }} />
            <div className="cities_navigation">
              <List>
                <ListItem disablePadding>
                  <ListItemButton id="WastewaterSurveillance" onClick={handleClickSuratTabIndex} component="a">
                    <ListItemText>
                      Wastewater Surveillance in Surat
                    </ListItemText>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component="a"  id="ScopeOfSampling" onClick={handleClickSuratTabIndex}>
                    <ListItemText>Scope of Sampling</ListItemText>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component="a"  id="SamplingStrategy" onClick={handleClickSuratTabIndex}>
                    <ListItemText>Sampling Strategy</ListItemText>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton component="a" id="SamplingLocation" onClick={handleClickSuratTabIndex}>
                    <ListItemText>Sampling Location</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
            {/* <Divider sx={{ color: "primary" }} /> */}
            </Box>
          </Grid>
        </Grid>
        <img alt="surat banner" src={SurveillanceSuratBanner} className="image-responsive" />
      </Box>
      <Box>
        
      </Box>
      </>
    );
}
export default WastewaterSurveillance;


       