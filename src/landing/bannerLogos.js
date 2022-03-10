import * as React from "react";
import Box from "@mui/material/Box";
import Niua from "../Icons/niua-white.png";
import Iscf from "../Icons/iscf-white.png";
import Mohua from "../Icons/mohua-white.png";
import Smc from "../Icons/smc-white.png";
import Sscdl from "../Icons/sscdl.png";
import { Divider, Grid, Typography } from "@mui/material";
function BannerLogos() {
 

  return (
    <>


      <Box>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%"}} alt="Iscf" src={Iscf} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%"}} alt="Nius" src={Niua} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%"}} alt="Mohua" src={Mohua} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%"}} alt="Smc" src={Smc} />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <img style={{ maxWidth: "100%"}} alt="Sscdl" src={Sscdl} />
          </Grid>
          
        </Grid>
      </Box>

      
    </>
  );
}

export default BannerLogos;
