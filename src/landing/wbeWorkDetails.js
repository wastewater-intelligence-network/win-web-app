import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Grid, Typography } from "@mui/material";
import Sneezing from "../Icons/sneezing.svg";
import Shedding from "../Icons/Shedding.svg";
import SampleCollectionImg from '../Icons/Sample_Collection.svg';
import SampleConcentrationImg from '../Icons/Sample_Concentration.svg';
import RNAExtraction from '../Icons/RNA_Extraction.svg';
import RNAMeasurement from '../Icons/RNA_Measurement.svg';
import DataAnalytics from '../Icons/Data_Analytics.svg';
function WbeWorkDetails() {


  return (
    <>
      <Box className="p-0100">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom"
        >
          <Grid item xs={12} sm={4} lg={2} className="webworkDetailsIconRight">
            <img alt="Infection" src={Sneezing} width={100} className="wbeWorkDetailsIcon" />
          </Grid>
          <Grid item xs={12} sm={8} lg={10}>
            <Typography sx={{mb:2}} variant="h5"  className="wbeDetailsHeading">Infection</Typography>

            <Typography variant="h6" className="wbeDetailsContent">
              CoViD-19 is caused by the SARS-CoV-2 virus that spreads through
              aerosol droplets discharged by an infected person. The incubation
              period of SARS-CoV-2 has been proven to be of a duration of 2 to
              14 days.
              </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom columnReverse" 
        >
          <Grid item xs={12} sm={8} lg={10} sx={{direction:'rtl'}}>
          <Typography sx={{mb:2}} variant="h5"  className="wbeDetailsHeading">Shedding</Typography>
          <Typography variant="h6"  className="wbeDetailsContent">
          Humans start excreting the virus in the stools as soon as they are infected by it regardless of whether they are showing symptoms. Therefore, testing wastewater for SARS-CoV-2 can aid in the early detection of the virus in a given area, even before the infected individual(s) develop symptoms or before they are aware they are infected.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} lg={2} >
            <img alt="Shedding" src={Shedding} width={100} className="wbeWorkDetailsIcon" />
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom"
        >
          <Grid item xs={12} sm={4} lg={2} className="webworkDetailsIconRight">
            <img alt="Sample Collection" src={SampleCollectionImg} width={100} className="wbeWorkDetailsIcon" />
          </Grid>
          <Grid item xs={12} sm={8} lg={10}>
            <Typography sx={{mb:2}} className="wbeDetailsHeading" variant="h5" >Sample Collection</Typography>

            <Typography variant="h6"  className="wbeDetailsContent">
            Samples from sewers, pumping stations, sewerage treatment plants or chambers in buildings are collected for testing. WIN uses grab and composite sampling at a set interval. In grab, a single sample is collected manually from the source. In composite, samples are collected by pooling multiple grab samples.
              </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom columnReverse"
        >
          <Grid item xs={12} sm={8} lg={10} sx={{direction:'rtl'}}>
          <Typography sx={{mb:2}} className="wbeDetailsHeading" variant="h5" >Sample Concentration</Typography>
          <Typography variant="h6"  className="wbeDetailsContent">
          By reducing the amount of water or any non-relevant materials in a diluted sample, the resulting concentrated sample contains higher amounts of SARS-CoV-2 RNA. This concentrated sample will yield better results.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} lg={2} >
            <img alt="Sample Concentration" src={SampleConcentrationImg} width={100} className="wbeWorkDetailsIcon" />
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom"
        >
          <Grid item xs={12} sm={4} lg={2} className="webworkDetailsIconRight">
            <img alt="RNA Extraction" src={RNAExtraction} width={150} className="wbeWorkDetailsIcon" />
          </Grid>
          <Grid item xs={12} sm={8} lg={10}>
            <Typography sx={{mb:2}} className="wbeDetailsHeading" variant="h5" >RNA Extraction</Typography>

            <Typography variant="h6"  className="wbeDetailsContent">
            To count the SARS-CoV-2 RNA we first need to extract, isolate and purify the RNA from a complex sample mixture. It is performed by utilising a commercial kit for environmental sample extraction.
              </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom columnReverse"
        >
          <Grid item xs={12} sm={8} lg={10} sx={{direction:'rtl'}}>
          <Typography sx={{mb:2}} className="wbeDetailsHeading" variant="h5" >RNA Measurement</Typography>
          <Typography variant="h6"  className="wbeDetailsContent">
          Count of RNA in the sample is important to quantify the load of the virus in the wastewater. This quantification is done with RNA Measurement using RT-qPCR and RT-ddPCR.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} lg={2} >
            <img alt="RNA Measurement" src={RNAMeasurement} width={100} className="wbeWorkDetailsIcon"/>
          </Grid>
        </Grid>
        

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
      
          className="customeMarginBottom"
        >
          <Grid item xs={12} sm={4} lg={2} className="webworkDetailsIconRight">
            <img alt="Data Analytics" src={DataAnalytics} width={100} className="wbeWorkDetailsIcon" />
          </Grid>
          <Grid item xs={12} sm={8} lg={10}>
            <Typography sx={{mb:2}} className="wbeDetailsHeading" variant="h5" >Data Analytics</Typography>

            <Typography variant="h6"  className="wbeDetailsContent">
            The measured RNA data along with additional datasets are analysed to infer the count of infected population, identify trends and patterns of infection in the catchment area. This will enable informed decision making by the governments and other stakeholders.
              </Typography>
          </Grid>
        </Grid>

        <Divider className="customeMarginBottom"></Divider>
      </Box>
    </>
  );
}

export default WbeWorkDetails;
