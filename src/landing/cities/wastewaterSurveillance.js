import { Box, Typography, Grid, Divider } from "@mui/material";
import * as React from "react";
import CityBreadcrumbs from "./breadcrumbs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


function WastewaterSurveillance(props){
    const [targetScrollMenu, settargetScrollMenu] = React.useState(null);


    const handleClickSuratTabIndex = (e) => {
        console.log(targetScrollMenu + "bdjfbjdsbfsjbfj");
        settargetScrollMenu(null);
        document.getElementById(e.target.id);
        setTimeout(() => {
            console.log("executeScrollPage testing");
          props.executeScrollPage(e.target.id);
        }, 1000);
      };


    return(
        <Box className="customeMarginBottom" sx={{ mt: 3 }}>
        <Grid container spacing={2} columnSpacing={6}>
          <Grid item xs={8}>
            <Typography variant="h4" className="cities_heading">
              Wastewater Surveillance in Surat
            </Typography>
            <Typography variant="body2">
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
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <CityBreadcrumbs />
            <Divider sx={{ color: "primary" }} />
            <h5>On this page</h5>
            <nav className="cities_navigation">
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
            </nav>
            <Divider sx={{ color: "primary" }} />
          </Grid>
        </Grid>
      </Box>
    );
}
export default WastewaterSurveillance;


       