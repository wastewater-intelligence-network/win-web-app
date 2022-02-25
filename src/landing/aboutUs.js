import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import * as React from "react";
import Header from "./header";
import Padam_Vijay from "../images/padam.jpg";
import Uday from "../images/uday.jpg";
import Mahreen from "../images/mahreen.jpg";
import Shilpa from "../images/shilpa.jpg";
import Abhisikha_Das from "../images/abhisikha.jpg";
import Abhishek_Upperwal from "../images/abhishek.jpg";
import Manual from "../images/manuel.jpg";
import Yogada from "../images/yogada.jpg";
import Mahesh from "../images/mahesh.jpg";
import SRM from "../images/srm-logo.png";
import ELAPL from "../images/Ephycacy.jpeg";
import BLIB from "../images/drblal-logo.png";
import VNSGU from "../images/vnsgu-logo.png";
import SSCDL from "../images/sscdl-logo.png";
import Footer from "./footer";
import Default_user from "../images/default_user.png";
function AboutUs() {
  let about_us_data = {
    niua: [
      {
        id: 1,
        name: "Padam Vijay",
        about_url: "https://niua.org/cdg/Our-people",
        designation: "Technical Advisor",
        institute: "",
        profile_image_src: "Padam_Vijay",
      },
      {
        id: 2,
        name: "Umamaheshwaran Rajasekar",
        about_url:
          "https://niua.org/c-cube/content/dr-umamaheshwaran-rajasekar",
        designation: "Head, C-Cube and Chair, Urban Resilience Unit",
        institute: "",
        profile_image_src: "Mahesh",
      },
      {
        id: 3,
        name: "Uday Bhonde",
        about_url: "https://www.niua.org/people1?id=359",
        designation: "Project Coordinator",
        institute: "",
        profile_image_src: "Uday",
      },
      {
        id: 4,
        name: "Mahreen Matto",
        about_url: "https://www.niua.org/people1?id=789",
        designation: "Program Manager",
        institute: "",
        profile_image_src: "Mahreen",
      },
      {
        id: 5,
        name: "Shilpa Shashidharan",
        about_url: "https://www.linkedin.com/in/shilpa-shashidharan-b2537279/",
        designation: "Engineer and Management Professional",
        institute: "",
        profile_image_src: "Shilpa",
      },
      {
        id: 6,
        name: "Abhiskha Das",
        about_url: "https://www.linkedin.com/in/abhisikha-das-579327154/",
        designation: "Social Development and Livelihoods Expert",
        institute: "",
        profile_image_src: "Abhisikha_Das",
      },
      {
        id: 7,
        name: "Abhishek Upperwal",
        about_url: "https://www.linkedin.com/in/upperwal/",
        designation: "Data Scientist",
        institute: "IISc, Bangalore",
        profile_image_src: "Abhishek_Upperwal",
      },
      {
        id: 8,
        name: "Manuel Diego",
        about_url: "https://www.linkedin.com/in/mdfcp/",
        designation: "Architect and Sustainability Expert",
        institute: "University of Nottingham, England",
        profile_image_src: "Manual",
      },
      {
        id: 9,
        name: "Yogada Sandeep Joshi",
        about_url: "https://www.linkedin.com/in/yogada-joshi-428637157/",
        designation: "Economist",
        institute: "Christ University, Bangalore",
        profile_image_src: "Yogada",
      },
    ],
    nwg: [
      {
        id: 1,
        name: "SRM Institute of Science and Technology",
        about_url: "https://www.srmist.edu.in/",
        institute_logo_src: "SRM",
        address:
          "SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu, 603203",
      },
      {
        id: 2,
        name: "Ephicacy Lifescience Analytics Private Limited",
        about_url: "https://www.ephicacy.com/",
        institute_logo_src: "ELAPL",

        address:
          "No. 6, 2nd Floor, Second Main Road Arekere, Off Bannerghatta Road Bengaluru, Karnataka, 560076",
      },
      {
        id: 3,
        name: "Dr. B. Lal Institute of Biotechnology",
        about_url: "https://www.blalbiotech.com/",
        institute_logo_src: "BLIB",

        address: "6-E, Malviya Industrial Area, Jaipur, Rajastan,  302017",
      },
    ],
    swg: [
      {
        id: 1,
        name: "Veer Narmad South Gujarat University (VNSGU)",
        about_url: "https://www.vnsgu.ac.in/",
        institute_logo_src:"VNSGU",
        address: "Post Box No 49, Udhna Magdalla Road, Surat, 395007",
      },
      {
        id: 2,
        name: "Surat Smart City Development Limited (SSCDL)",
        about_url: "https://www.suratsmartcity.com/",
        institute_logo_src:"SSCDL",
        address:
          "1st Floor, South Zone Office, Surat Municipal Corporation, Opp. Satyanagar, Udhna, Surat, Gujarat, 394210",
      },
    ],
  };

  return (
    <>
      <Header />

      <Box className="customeMarginBottom about">
        <Typography
          className="customeMarginBottom heading"
          sx={{
            typography: { sm: "h3", xs: "h6" },
            mt: 4,
          }}
        >
          ABOUT US
        </Typography>

        <Typography variant="h6" className="aboutContent">
          Wastewater Intelligence Network is an initiative to bring together
          experts to manage the spread and impact of SARS-CoV-2 through
          Wastewater-based Epidemiology in Indian cities.
        </Typography>

        <Divider className="customeMarginBottom customeMarginTop"></Divider>

        
<Box sx={{textAlign:'left'}} className="p-0100">
<Typography  variant="h5" className="wbeDetailsHeading">
          How can we help you?
        </Typography>
<Typography variant="body2" className="wbeDetailsContent">
          <p> <span className="textBold">1-</span>  SOPs for end-to-end adoption of WBE in a city</p>
          <p>
            {" "}
            <span className="textBold">2-</span> Enhancement of data-led decision making by geospatial data
            dashboard
          </p>
          <p>
            {" "}
            <span className="textBold">3-</span> Real-time status of the on-ground situation for optimised
            pandemics’ management{" "}
          </p>
          <p>
            {" "}
            <span className="textBold">4-</span> Knowledge sharing and proactive collaboration with domain experts
            through the national and city-specific working groups
          </p>
        </Typography>
</Box>

       

        <Divider className="customeMarginBottom customeMarginTop"></Divider>

        <Typography  variant="h5" className="wbeDetailsHeading">
          Meet the amazing team
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          {about_us_data.niua.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={"aboutCard"}>
                  <CardContent>
                  <Link href={item.about_url} target ="_blank">
                    <img
                      alt="Sample"
                      className="OurTeamImage"
                      src={
                        item.profile_image_src === "Padam_Vijay"
                          ? Padam_Vijay
                          : item.profile_image_src === "Uday"
                          ? Uday 
                          : item.profile_image_src === "Mahesh"
                          ? Mahesh
                          : item.profile_image_src === "Mahreen"
                          ? Mahreen
                          : item.profile_image_src === "Shilpa"
                          ? Shilpa
                          : item.profile_image_src === "Abhisikha_Das"
                          ? Abhisikha_Das
                          : item.profile_image_src === "Abhishek_Upperwal"
                          ? Abhishek_Upperwal
                          : item.profile_image_src === "Manual"
                          ? Manual
                          : item.profile_image_src === "Yogada"
                          ? Yogada
                          : Default_user
                      }
                      
                    />
                    </Link>
                    <Typography
                      variant="h6"
                      className="mycardHeading"
                      component="div"
                      sx={{ my: 2 }}
                    >
                    <Link href={item.about_url} target="_blank" underline="none">
                    {item.name}</Link>
                      
                    </Typography>
                    <Typography className="mycardSubHeading">
                    
                     
                    </Typography>
                    <Typography className="mycardSubHeading">
                      {item.designation}
                    </Typography>
                    <Typography className="mycardSubHeading">
                      {item.institute}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}

          <Grid item xs={12}>
          <Typography  variant="h5" className="wbeDetailsHeading">
            National Working Group
          </Typography>
          </Grid>
          {about_us_data.nwg.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={"aboutCard"}>
                  <CardContent>
                  <Link href={item.about_url} target ="_blank">
                    <img
                      alt="Sample"
                      className="OurTeamImage"
                      src={
                        item.institute_logo_src === "SRM"
                          ? SRM
                          : item.institute_logo_src === "ELAPL"
                          ? ELAPL 
                          : item.institute_logo_src === "BLIB"
                          ? BLIB
                          : null
                      }
                      
                    />
                    </Link>
                    <Typography
                      variant="h6"
                      className="mycardHeading"
                      component="div"
                      sx={{ my: 2 }}
                    >
                    <Link href={item.about_url} target ="_blank" underline="none">{item.name}</Link>
                    </Typography>
                   
                    <Typography className="mycardSubHeading">
                      {item.address}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          <Grid item xs={12}>
          <Typography  variant="h5" className="wbeDetailsHeading">
            Surat’s Working Group
          </Typography>
          </Grid>
          {about_us_data.swg.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={"aboutCard"}>
                  <CardContent>
                  <Link href={item.about_url} target ="_blank">
                    <img
                      alt="Sample"
                      className="OurTeamImage"
                      src={
                        item.institute_logo_src === "VNSGU"
                          ? VNSGU
                          : item.institute_logo_src === "SSCDL"
                          ? SSCDL 
                          :null
                      }
                      
                    />
                    </Link>
                    <Typography
                      variant="h6"
                      className="mycardHeading"
                      component="div"
                      sx={{ my: 2 }}
                    >
                    <Link href={item.about_url} target ="_blank" underline="none">{item.name}</Link>
                      
                    </Typography>
              
                    <Typography className="mycardSubHeading">
                      {item.address}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default AboutUs;
