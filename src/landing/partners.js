import * as React from "react";
import Box from "@mui/material/Box";
import Niua from "../Icons/niua-white.svg";
import Iscf from "../Icons/iscf-white.svg";
import Mohua from "../Icons/mohua-white.svg";
import Smc from "../Icons/smc-white.svg";
import Sscdl from "../Icons/sscdl.svg";
import { Divider, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partners.css";
import Logo01 from "../images/partners/logo-01.svg"
import Logo02 from "../images/partners/logo-02.svg"
import Logo03 from "../images/partners/logo-03.svg"
import Logo04 from "../images/partners/logo-04.svg"

function Partners() {

  let imageCount = 5;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: imageCount > 7 ? true : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <>

      {/* 
      <Box className="specingBottomSection" sx={{ width: "100%", my: 4 }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%", width: '85px'}} alt="Iscf" src={Iscf} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%", width: '192px' }} alt="Nius" src={Niua} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%", width: '194px' }} alt="Mohua" src={Mohua} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%", width:' 95px'}} alt="Smc" src={Smc} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%",width: '221px' }} alt="Sscdl" src={Sscdl} />
          </Grid>
          
        </Grid>
      </Box> */}


      <Slider {...settings}>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Iscf" src={Logo01} />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Nius" src={Logo02} />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Mohua" src={Logo03} />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Smc" src={Logo01} />
        </div>
        <div>
          <img style={{ maxWidth: "100%" }} alt="Sscdl" src={Logo04} />
        </div>

        <div>
          <img style={{ maxWidth: "100%" }} alt="Sscdl" src={Logo02} />
        </div>

        <div>
          <img style={{ maxWidth: "100%" }} alt="Sscdl" src={Logo01} />
        </div>
      </Slider>
    </>
  );
}

export default Partners;
