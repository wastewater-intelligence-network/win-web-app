import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import Header from "./header";
import SampleCollectionImg from '../Icons/Sample_Collection.svg';
import Padam_Vijay from '../images/Padam_Vijay.png';
import Uday from '../images/Uday.jpg';

import Mahreen from '../images/Mahreen.jpeg';
import Shilpa from '../images/Shilpa.png';
import Abhisikha_Das from '../images/Abhisikha_Das.png';
import Abhishek_Upperwal from '../images/Abhishek_Upperwal.png';
import Manual from '../images/Manual.png';
import Yogada from '../images/Yogada.png';

import Default_user from '../images/default_user.png';
function AboutUs() {

  let about_us_data = {
    "niua": [
      {
        "id": 1,
        "name": "Padam Vijay",
        "about_url": "https://niua.org/cdg/Our-people",
        "designation": "Technical Advisor",
        "institute": "",
        "profile_image_src": "Padam_Vijay"
      },
      {
        "id": 2,
        "name": "Umamaheshwaran Rajasekar",
        "about_url": "https://niua.org/c-cube/content/dr-umamaheshwaran-rajasekar",
        "designation": "Head, C-Cube and Chair, Urban Resilience Unit",
        "institute": "",
        "profile_image_src": "default_user.png"
      },
      {
        "id": 3,
        "name": "Uday Bhonde",
        "about_url": "https://www.niua.org/people1?id=359",
        "designation": "Project Coordinator",
        "institute": "",
        "profile_image_src": "Uday"
      },
      {
        "id": 4,
        "name": "Mahreen Matto",
        "about_url": "https://www.niua.org/people1?id=789",
        "designation": "Program Manager",
        "institute": "",
        "profile_image_src": "Mahreen"
      },
      {
        "id": 5,
        "name": "Shilpa Shashidharan",
        "about_url": "https://www.linkedin.com/in/shilpa-shashidharan-b2537279/",
        "designation": "Engineer and Management Professional",
        "institute": "",
        "profile_image_src": "Shilpa"
      },
      {
        "id": 6,
        "name": "Abhiskha Das",
        "about_url": "https://www.linkedin.com/in/abhisikha-das-579327154/",
        "designation": "Social Development and Livelihoods Expert",
        "institute": "",
        "profile_image_src": "Abhisikha_Das"
      },
      {
        "id": 7,
        "name": "Abhishek Upperwal",
        "about_url": "https://www.linkedin.com/in/upperwal/",
        "designation": "Data Scientist",
        "institute": "IISc, Bangalore",
        "profile_image_src": "Abhishek_Upperwal"
      },
      {
        "id": 8,
        "name": "Manuel Diego",
        "about_url": "https://www.linkedin.com/in/mdfcp/",
        "designation": "Architect and Sustainability Expert",
        "institute": "University of Nottingham, England",
        "profile_image_src": "Manual"
      },
      {
        "id": 9,
        "name": "Yogada Sandeep Joshi",
        "about_url": "https://www.linkedin.com/in/yogada-joshi-428637157/",
        "designation": "Economist",
        "institute": "Christ University, Bangalore",
        "profile_image_src": "Yogada"
      }
    ],
    "nwg": [
      {
        "id": 1,
        "name": "SRM Institute of Science and Technology",
        "about_url": "https://www.srmist.edu.in/",
        "address": "SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu, 603203"
      },
      {
        "id": 2,
        "name": "Ephicacy Lifescience Analytics Private Limited",
        "about_url": "https://www.ephicacy.com/",
        "address": "No. 6, 2nd Floor, Second Main Road Arekere, Off Bannerghatta Road Bengaluru, Karnataka, 560076"
      },
      {
        "id": 3,
        "name": "Dr. B. Lal Institute of Biotechnology",
        "about_url": "https://www.blalbiotech.com/",
        "address": "6-E, Malviya Industrial Area, Jaipur, Rajastan,  302017"
      }
    ],
    "swg": [
      {
        "id": 1,
        "name": "Veer Narmad South Gujarat University (VNSGU)",
        "about_url": "https://www.vnsgu.ac.in/",
        "address": "Post Box No 49, Udhna Magdalla Road, Surat, 395007"
      },
      {
        "id": 2,
        "name": "Surat Smart City Development Limited (SSCDL",
        "about_url": "https://www.suratsmartcity.com/",
        "address": "1st Floor, South Zone Office, Surat Municipal Corporation, Opp. Satyanagar, Udhna, Surat, Gujarat, 394210"
      }
    ]
  };

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

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          justifyContent="center"
          alignItems="center"

        >
          {
            about_us_data.niua.map(item => {
              return (
                <Grid item xs={12} sm={6} md={4} >
                  <Card className={'aboutCard'}>
                    <CardContent>
                      <img alt='Sample' src={item.profile_image_src === 'Padam_Vijay' ? Padam_Vijay :
                        item.profile_image_src === 'Uday' ? Uday : //Default_user
                          item.profile_image_src === 'Mahreen' ? Mahreen :
                            item.profile_image_src === 'Shilpa' ? Shilpa :
                              item.profile_image_src === 'Abhisikha_Das' ? Abhisikha_Das :
                                item.profile_image_src === 'Abhishek_Upperwal' ? Abhishek_Upperwal :
                                  item.profile_image_src === 'Manual' ? Manual :
                                    item.profile_image_src === 'Yogada' ? Yogada : Default_user

                      } width={40} />
                      <Typography variant="h6" className="mycardHeading" component="div" sx={{ my: 2 }}>
                        {item.name}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.about_url}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.designation}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.institute}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>)
            })
          }


          <Typography sx={{ mb: 2 }} variant="h5" className="wbeDetailsHeading">
            National Working Group
          </Typography>
          {
            about_us_data.nwg.map(item => {
              return (
                <Grid item xs={12} sm={6} md={4} >

                  <Card className={'aboutCard'}>
                    <CardContent>
                      <Typography variant="h6" className="mycardHeading" component="div" sx={{ my: 2 }}>
                        {item.name}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.about_url}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.address}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>)
            })
          }


          <Typography sx={{ mb: 2 }} variant="h5" className="wbeDetailsHeading">
            Surat’s Working Group
          </Typography>
          {
            about_us_data.swg.map(item => {
              return (
                <Grid item xs={12} sm={6} md={4} >

                  <Card className={'aboutCard'}>
                    <CardContent>
                      <Typography variant="h6" className="mycardHeading" component="div" sx={{ my: 2 }}>
                        {item.name}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.about_url}
                      </Typography>
                      <Typography className="mycardSubHeading">
                        {item.address}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>)
            })
          }
        </Grid>
      </Box>
    </>
  );
}

export default AboutUs;
