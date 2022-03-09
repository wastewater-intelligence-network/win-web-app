import * as React from "react";
import Box from "@mui/material/Box";
import Niua from "../Icons/niua.svg";
import Iscf from "../Icons/iscf.svg";
import Mohua from "../Icons/mohua.svg";
import Smc from "../Icons/smc.svg";
import Sscdl from "../Icons/sscdl.svg";
import { Divider, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partners.css";


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
          <img style={{ maxWidth: "100%", width: '85px' }} alt="Iscf" src={Iscf} />
        </div>
        <div>
          <img style={{ maxWidth: "100%", width: '192px' }} alt="Nius" src={Niua} />
        </div>
        <div>
          <img style={{ maxWidth: "100%", width: '194px' }} alt="Mohua" src={Mohua} />
        </div>
        <div>
          <img style={{ maxWidth: "100%", width: ' 95px' }} alt="Smc" src={Smc} />
        </div>
        <div>
          <img style={{ maxWidth: "100%", width: '221px' }} alt="Sscdl" src={Sscdl} />
        </div>
      </Slider>
    </>
  );
}

export default Partners;
