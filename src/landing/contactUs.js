import { Box, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import Header from "./header";
import HEROLOGO from "../Icons/hero_logo.svg";

 function ContactUs() {
    

    return(
        <>
        <Header />
 <Box className="customeMarginBottomc about">
        <Typography
          className="customeMarginBottom heading"
          sx={{
            typography: { sm: "h3", xs: "h6" },
            textAlign: "center",
            mt: 4,
          }}
        >
          CONTACT US
        </Typography>

        <Grid container spacing={2}
  justifyContent="space-around"
  alignItems="center">
  <Grid item xs={4}>
    <img alt="contact logo" src={HEROLOGO} />
  </Grid>
  <Grid item xs={8}>
    
  <Typography variant="h5" sx={{mb:2}}>National Institute of Urban Affairs
</Typography>
 <Typography variant="h5" sx={{mb:2}}>1ˢᵗ and 2ⁿᵈ Floor, Core 4B, <br /> India Habitat Centre, Lodhi Road, <br /> New Delhi, Delhi 110003
</Typography>

<Typography variant="h5" className="">win@niua.org
</Typography>

  </Grid>
  
</Grid>
        </Box>

        </>
    );
}

export default ContactUs;