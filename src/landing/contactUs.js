import { Box, Divider, Grid, Typography } from "@mui/material";
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
function ContactUs() {

  return (
    <>
      <Header />
      <Box className="customeMarginBottom">
        <Typography
          className="customeMarginBottom heading"
          sx={{
            typography: { sm: "h3", xs: "h6" },
            textAlign: "center",
            mt: 4,
            letterSpacing: "10px",
          }}
        >
          CONTACT US
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <img
              alt="contact logo"
              width={250}
              src={Niua}
              style={{
                marginLeft: "auto",
                display: "block",
                marginRight: "60px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              National Institute of Urban Affairs
            </Typography>
            {/* <Typography variant="h5" sx={{ mb: 2 }}>
              {" "}
              <HomeIcon /> 1ˢᵗ and 2ⁿᵈ Floor, Core 4B, <br /> India Habitat
              Centre, Lodhi Road, <br /> New Delhi, Delhi 110003
            </Typography>

            <Typography variant="h5" className="">
              {" "}
              <EmailIcon /> win@niua.org
            </Typography> */}

            <List>
              <ListItem>
              <ListItemIcon sx={{color:'#000'}}>
                    <HomeIcon />
                  </ListItemIcon>
                <ListItemText className="contactText" disableTypography >
                1ˢᵗ and 2ⁿᵈ Floor, Core 4B, <br /> India Habitat
              Centre, Lodhi Road, <br /> New Delhi, Delhi 110003
                </ListItemText>
              </ListItem>
              <ListItem>

              <ListItemIcon sx={{color:'#000'}}>
                   <EmailIcon />
                  </ListItemIcon>
                <ListItemText className="contactText" disableTypography>
                win@niua.org
                </ListItemText>
              </ListItem>
              
            </List>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default ContactUs;
