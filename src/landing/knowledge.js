import * as React from "react";
import NewHeader from "./newHeader";
import NewHeaderSticky from "./newHeaderSticky";
import { $ } from "react-jquery-plugin";
import Slack from "../images/knowledge/slack.png";
import LeftImage from "../images/knowledge/image-1.png";
import Image2 from "../images/knowledge/image2.png";
import Image3 from "../images/knowledge/image3.png";
import Image4 from "../images/knowledge/image4.png";
import Image5 from "../images/knowledge/image5.png";
import Image6 from "../images/knowledge/image6.png";



import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import "./knowledge.css";
import Footer from "./footer";
function Knowledge(props) {
  const handleClickSuratTabIndex = (e) => {
    setTimeout(() => {
      props.executeScrollPageSurat(e.target.innerText);
    }, 100);
  };

  // sticky header animation
  React.useEffect(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() >= 150) {
        $(".header-main-sticky").addClass("fixed-header");
        // $('.header-main').slideUp(500);
        $(".header-main-sticky").slideDown(300);
      } else {
        // $('.header-main').slideDown(500);
        $(".header-main-sticky").slideUp(300);

        setTimeout(() => {
          $(".header-main-sticky").removeClass("fixed-header");
        }, 300);
      }
    });
  });
  // End//

  return (
    <>
      <div className="header-main">
        <NewHeader />
      </div>
      <div className="header-main-sticky">
        <NewHeaderSticky />
      </div>

      <Container maxWidth="lg" className="knowldge-main">
        <Box className="" sx={{ mt: 3, mb: 3 }}>
        <Typography  className="cities_title">
        Sampling Strategy: Where, How, and What to Sample
            </Typography>
          <Typography variant="h4" className="knowledge_heading">
            National Wastewater Surveillance System (NWSS)
          </Typography>
          <Grid
            container
            spacing={2}
            columnSpacing={3}
            className="columnReverse"
          >
            <Grid item sm={12} xs={12} md={6} lg={9}>
              <Typography variant="h4" className="knowledge_sub_heading">
                Sub Heading
              </Typography>

              <Typography variant="h4" className="knowledge_2nd_sub_heading">
                Sub Heading 2
              </Typography>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={3}>
              <Box className="knowledge_onthispage_box">
                {/* <CityBreadcrumbs /> */}

                <p className="onthipage-title">On this page</p>
                <Divider sx={{ color: "primary" }} />
                <div className="cities_navigation">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        id="WastewaterSurveillance"
                        onClick={handleClickSuratTabIndex}
                        component="a"
                      >
                        <ListItemText>
                          Wastewater Surveillance in Surat
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component="a"
                        id="ScopeOfSampling"
                        onClick={handleClickSuratTabIndex}
                      >
                        <ListItemText>Scope of Sampling</ListItemText>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component="a"
                        id="SamplingStrategy"
                        onClick={handleClickSuratTabIndex}
                      >
                        <ListItemText>Sampling Strategy</ListItemText>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton
                        component="a"
                        id="SamplingLocation"
                        onClick={handleClickSuratTabIndex}
                      >
                        <ListItemText>Sampling Location</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </Box>
              <Box sx={{ mt: 2 }}>
                <img alt="slack" className="image-responsive" src={Slack} />
              </Box>
            </Grid>
          </Grid>


<Box className="box_section">
          <Grid container spacing={2} columnSpacing={0}>
          <Grid item sm={5} xs={12} md={3} className="sideimage">
              <img alt="sideimage" src={LeftImage} className="image-responsive" />
          </Grid>
          <Grid item sm={7} xs={12} md={9} >
          <Typography variant="h4" className="knowledge_2nd_sub_heading">
                Sub Heading 2
              </Typography>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
          </Grid>

          </Grid>

          </Box>

<Box className="knowledge_image_section">
          <Grid container spacing={2} columnSpacing={0}>
          
          <Grid item sm={12} xs={12} md={5}>
            <img
              alt="sampling"
              className="image-responsive bigimage"
              src={Image2}
            />

            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} md={6}>
                <img
                  alt="sampling"
                  className="image-responsive"
                  src={Image3}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={6}>
                <img
                  alt="sampling"
                  className="image-responsive"
                  src={Image4}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={7}>
            <img
              alt="sampling"
              className="image-responsive bigimage"
              src={Image5}
            />
          </Grid>
          </Grid>
</Box>


<Box className="box_section">
          <Grid container spacing={2} columnSpacing={0}>
          <Grid item  xs={12} >
          <Typography variant="h4" className="knowledge_2nd_sub_heading">
                Sub Heading 2
              </Typography>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
          </Grid>

          </Grid>

          </Box>

          <Box className="box_section">
          <Grid container spacing={2} columnSpacing={0}>
          <Grid item  xs={12} md={6} >
          
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
            
          </Grid>
          <Grid item  xs={12} md={6}>
          <Box sx={{backgroundColor:'#AED5EA', p:2}}>

          <Grid container rowSpacing={2} columnSpacing={2}>
           <Grid item xs={4}>
               <img alt="last" src={Image6}  className="image-responsive"/>
           </Grid> 
           <Grid item xs={8}>
           <Typography variant="h4" className="knowledge_2nd_sub_heading">
                Sub Heading 2
              </Typography>
              <p className="knowledge_content">
                We use wastewater-based epidemiology (WBE) which analyses
                wastewater to determine exposure to pathogens in a population.
                This is done by collecting samples of wastewater from sewers,
                STPs, lakes etc. and testing these samples for the presence of
                pathogens.
              </p>
           </Grid> 

          </Grid>
          
              
              </Box>
          </Grid>
          </Grid>

          </Box>

        </Box>
      </Container>

      <Footer />
    </>
  );
}

export default Knowledge;
