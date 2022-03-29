import { Box, Divider, Grid, Typography, TextareaAutosize, Button } from "@mui/material";
import * as React from "react";
import Header from "./header";
import Niua from "../Icons/niua.svg";
import Footer from "./footer";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NewHeader from "./newHeader";
import TextField from '@mui/material/TextField';
import "./contactUs.css";
import NewHeaderSticky from "./newHeaderSticky";
import { $ }  from 'react-jquery-plugin'


function ContactUs() {
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
      <Box className="contact-us-main">
      <Box className="contact-us-over-bg"></Box>
      <Box className="contact-us-banner-text">
      <Typography
          className="contact-us-title"
        >
          Contact us
        </Typography>
        <Typography variant="body2" className="contact-us-desc">
          Let's have a talk
        </Typography>
      </Box>

      
        
      </Box>

      <Box className="address-block-main">
        <Grid
          container
          rowSpacing={3} className="address-block-main-container">
          <Grid item xs={12} sm={4} md={4} className="address-block">
            <div className="logo-block">

            </div>
            <Typography variant="body2" className="address-desc">
              1st and 2nd Floor, Core 4B, India Habitat Centre, Lodhi Road, New Delhi, Delhi 110003
            </Typography>
            <Typography variant="body2" className="address-url-txt">
              win@niua.org
            </Typography>

            <Typography variant="body2" className="address-contact-no">
              +91 96XX XX XXXX
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className="address-block">
            <div className="logo-block">

            </div>
            <Typography variant="body2" className="address-desc">
              1st and 2nd Floor, Core 4B, India Habitat Centre, Lodhi Road, New Delhi, Delhi 110003
            </Typography>
            <Typography variant="body2" className="address-url-txt">
              win@niua.org
            </Typography>

            <Typography variant="body2" className="address-contact-no">
              +91 96XX XX XXXX
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className="address-block">
            <div className="logo-block">

            </div>
            <Typography variant="body2" className="address-desc">
              1st and 2nd Floor, Core 4B, India Habitat Centre, Lodhi Road, New Delhi, Delhi 110003
            </Typography>
            <Typography variant="body2" className="address-url-txt">
              win@niua.org
            </Typography>

            <Typography variant="body2" className="address-contact-no">
              +91 96XX XX XXXX
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={3} md={3} className="address-block">
            <div className="logo-block">

            </div>
            <Typography variant="body2" className="address-desc">
              1st and 2nd Floor, Core 4B, India Habitat Centre, Lodhi Road, New Delhi, Delhi 110003
            </Typography>
            <Typography variant="body2" className="address-url-txt">
              win@niua.org
            </Typography>

            <Typography variant="body2" className="address-contact-no">
              +91 96XX XX XXXX
            </Typography>
          </Grid> */}
        </Grid>
      </Box>

      <Box className="contact-us-form-block">
        <Grid
          container
          rowSpacing={3} className="contact-us-form-block-container">
          <Grid item xs={12} sm={6} md={6} className="contact-us-form-left-block">
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="contact-us-form-right-block">
            <Typography variant="body2" className="write-to-us-txt">
              Write to us
            </Typography>

          
            <div class="form-group-main">
                  <label>Name </label>
                  <TextField fullWidth placeholder="Filled text" size="small"/>

                  <label>Email ID</label>
                  <TextField fullWidth placeholder="Filled text" size="small"/>

                  <label>Message </label>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Filled text"
                    style={{ width: 100 + '%', height: 142 +'px' }}
                  />

                  <Button variant="contained">Submit</Button>
            </div>

          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}

export default ContactUs;
