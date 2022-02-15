import * as React from "react";
import Box from "@mui/material/Box";
import Niua from "../Icons/niua.svg";
import Iscf from "../Icons/iscf.svg";
import Mohua from "../Icons/mohua.svg";
import Smc from "../Icons/smc.svg";
import Sscdl from "../Icons/sscdl.svg";
import { Divider, Grid, Typography } from "@mui/material";
function Partners() {
 

  return (
    <>


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
      </Box>

      
    </>
  );
}

export default Partners;
