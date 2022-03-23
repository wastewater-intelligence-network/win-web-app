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
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12} md={6}>
            <Typography variant="h4" className="cities_2ndheading">
            Sampling scope and strategy
            </Typography>
            <Typography variant="h4" className="cities_sub_heading">
            City drainage profile
            </Typography>
            <p className="surat-content">
            Surat, also known as the textile city and the diamond city, is located in the western part of India with the Tapi river flowing across. The area of the city served by the drainage network is 74% with 71.2% of the population connected to these networks. The city is divided into seven operational zones. The number of STPs and SPSs operational in these zones are 12 and 68 respectively. 
            </p>
            
            
            <Grid item sm={8} xs={12} className="mobile-sampling-map">
            <img
              alt="Scope sampling"
              className="image-responsive"
              src={ScopeSamplingImgae}
            />
            </Grid>

            {/* <p className="textBold">Some facts about the West Zone</p> */}

            {/* {westzoneFact.data.map((item) => {
              return (
                <Box sx={{ml:2}}>
                  <Grid container spacing={2} >
                    <Grid item xs={6}>
                      <p style={{marginTop:"10px", marginBottom:"10px"}} className="textBold">{item.name}</p>
                    </Grid>
                    <Grid item xs={6}>
                      <p style={{marginTop:"10px", marginBottom:"10px"}}>{item.value}</p>
                    </Grid>
                  </Grid>
                </Box>
              );
            })} */}

            {/* <p className="surat-content">
              Total of 14 samples are being collected; 9 from SPSs and 5 from
              outlet manholes originating from residential complexes.
            </p> */}
          </Grid>
          <Grid item sm={12} xs={12} md={6} className="desktop-sampling-map">
            <img
              alt="Scope sampling"
              className="image-responsive"
              src={ScopeSamplingImgae}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography variant="h4" className="cities_sub_heading">
            Zone selection
            </Typography>

            <p className="surat-content">
            For conducting the pilot it was essential to start with a particular zone and then scale it up to other zones in the city. After discussions with the city drainage team, health team and experts, it was decided to conduct the surveillance in the “west zone''. The west zone was chosen as it is covered majorly with residential spaces with a good coverage of the sewerage network, and the data of the catchment population of these sewerage points could help in quantification of the results.
During the deployment from 1st Jan, 2022, estimated up to 31st March, 2022, the samples are being collected from the west zone. Few facts about the west zone are given below:
            </p>
</Grid>


            </Grid>


            {westzoneFact.data.map((item) => {
              return (
                <Box sx={{mt:2, mb:2}} className>
                  <Grid container spacing={2} >
                    <Grid item xs={6} className="nopadding">
                      <p style={{marginTop:"10px", marginBottom:"10px"}} className="zone_fact_name">{item.name}</p>
                    </Grid>
                    <Grid item xs={6} className="nopadding">
                      <p className="surat-content" style={{marginTop:"10px", marginBottom:"10px"}}>{item.value}</p>
                    </Grid>
                  </Grid>


                </Box>
              );
            })}

            <p className="surat-content"><small>Total of 14 samples are being collected; 9 from SPSs and 5 from outlet manholes originating from residential complexes.</small></p>
     
        <Grid container spacing={4} >
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
       
        <p className="surat-content">
        Apart from these, the zone also has manholes if we go upstream, which in turn gets connected to the sewage pumping stations. 
        </p>
      </Box>
    </>
  );
}

export default ScopeOfSampling;
