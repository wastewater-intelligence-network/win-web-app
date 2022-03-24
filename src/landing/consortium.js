import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import Structure from "../images/structure.jpg";
import NewHeader from "./newHeader";
import "./consortium.css";
import { $ }  from 'react-jquery-plugin'

import MemberLogo from "../images/consoritum/member-logo.png"
import ConsortiumBanner from "../images/consoritum/consortium-banner.png"
import NewHeaderSticky from "./newHeaderSticky";
const Consortium = () => {
 // sticky header animation
 React.useEffect(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() >= 150) {
        $('.header-main-sticky').addClass('fixed-header');
        // $('.header-main').slideUp(500);
        $('.header-main-sticky').slideDown(300);
    }
    else {
        // $('.header-main').slideDown(500);
        $('.header-main-sticky').slideUp(300);

        setTimeout(() => {
          $('.header-main-sticky').removeClass('fixed-header');
        }, 300)
    }
});

});
// End//


  return (
    <>
     <div className="header-main">
      <NewHeader  />
      </div>  
      <div className="header-main-sticky">
      <NewHeaderSticky  />
      </div>

      <Box className="consortium-main">
        <Typography className="consortium-title">Consortium</Typography>
        <Typography className="consortium-heading">
          STRUCTURE OF WIN CONSORTIUM
        </Typography>

        <Typography className="consortium-text">
        Wastewater Based Epidemiology is not a new concept. It is a tried and tested method across the world by various scientists to determine the presence of pathogens, consumption patterns and exposure to chemicals in the population by analysing wastewater. In India, there are various experts and institutions working on the prevalence of SARS-CoV-2  in wastewater and a considerable amount of research has gone into it. To implement wastewater surveillance using WBE smoothly in the cities, it is essential to ensure a concordance among the national and city experts and stakeholders. Hence to institutionalise health surveillance and to bolster the urban healthcare governance in Indian cities, the deployment in the city entails end-to-end strategies and processes for collecting and testing wastewater samples by bringing together medical experts, private companies, researchers, scientists and other relevant persons/institutions working in the field of WBE through the ‘WIN Consortium’. The consortium members will come together to design strategies, standardised protocols and support in the deployment of relevant infrastructure to track the outbreak of CoViD-19 and regularly occurring diseases that can be tracked through sewage. These members will also undertake and share their research developments related to methods and technologies in WBE.

        </Typography>

        <Typography className="consortium-text">
        The consortium is structured into two groups: The national working group and the City working group. The National working group will comprise members from research institutes, technical experts, knowledge partners and start-ups. They will act as an advisory body, helping the city in strategising the project and overseeing the project’s functioning in the city while providing inputs to the city stakeholders. The City working group will comprise members from the city who are enabling the project locally. This would include the municipal corporation or the smart city SPV, testing labs (testing partners), startups and associated departments for executing the project on the ground.  NIUA is the governing body of the WIN Consortium and each city will govern the city working group and will also be members of the National Working Group. 

        </Typography>
      </Box>

      <Box className="consortium-member">
      <Typography className="consortium-heading">Consortium members</Typography>
      <Typography className="consortium-title">National working group</Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} sm={6} md={4}>
    <img alt="member logo" src={MemberLogo} className="image-responsive" />
  </Grid>
  <Grid item xs={6}  sm={6} md={4}>
  <img alt="member logo" src={MemberLogo} className="image-responsive" />
    
  </Grid>
  <Grid item xs={6}  sm={6} md={4}>
  <img alt="member logo" src={MemberLogo} className="image-responsive" />
    
  </Grid>
  
</Grid>

<Typography className="consortium-title">National working group</Typography>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item xs={6} sm={6} md={4}>
<img alt="member logo" src={MemberLogo} className="image-responsive" />
</Grid>
<Grid item xs={6}  sm={6} md={4}>
<img alt="member logo" src={MemberLogo} className="image-responsive" />

</Grid>
<Grid item xs={6}  sm={6} md={4}>
<img alt="member logo" src={MemberLogo} className="image-responsive" />

</Grid>

</Grid>


<Typography className="consortium-text">
To know more or to get in touch regarding the consortium.

</Typography>


      </Box>
      <Box>
<img alt="banner" src={ConsortiumBanner} className="image-responsive" />
</Box>
      {/* <Container maxWidth="lg">
        <Box className="customeMarginBottom ">
          <Typography
            className="consortium-title"
            sx={{
              typography: { sm: "h3", xs: "h6" },
              mt: 4,
            }}
          >
            Structure of WIN Consortium
          </Typography>

          <Typography variant="body2" className="consortium-text">
            To institutionalise health surveillance and to bolster the urban
            healthcare governance in Indian cities, the pilot deployment will
            entail end-to-end strategies and processes for collecting and
            testing wastewater samples by bringing together medical experts,
            private companies, researchers, scientists and other relevant
            resource persons/institutions working in the field of WBE through
            the ‘WIN Consortium’. They will come together to design strategies,
            standardised protocols and/or support in the deployment of relevant
            infrastructure to track the immediate outbreak of CoViD-19 and
            regularly occurring diseases that can be tracked through sewage.
            These members will also undertake research to develop methods and
            technologies related to WBE.
          </Typography>

          <Typography variant="body2" className="consortium-text">
            In order to have an efficient and functioning Consortium, the team
            has come up with a simplified structure. The WIN Consortium shall
            have a National Working Group which will act as an advisory body
            where research institutes, technical experts, knowledge partners,
            innovation-based organization, start-ups will be a part and City
            Working Group at the city level will help in operationalisation and
            advisory of the WIN Programme. The National Institute of Urban
            Affairs will be the governing body of the WIN Consortium and each
            city will govern the city working group and will also be members of
            the National Working Group. The structure becomes holistic as the
            city becomes the common agent to capture the experts advice from the
            National Working Group and be the implementer of the programme on
            the ground.
          </Typography>

          <Typography  className="consortium-text" sx={{my:8}}>
         <span className="textBold">  The figure below will give an overview of a stratified structure:</span>  
          </Typography>

          <Box sx={{mt:5}}>
            <img alt="structure" className="image-responsive" src={Structure} />
          </Box>
        </Box>
      </Container> */}
      <Footer />
    </>
  );
};

export default Consortium;
