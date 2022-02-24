import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Grid } from "@mui/material";
import Consortium from "../Icons/Consortium.svg";
import Deployment from "../Icons/Deployment.svg";

function CoreComponents() {
  return (
    <>
      <Box className="p-0100 customeMarginBottom">
        <Typography
          className=" heading"
          sx={{ typography: { sm: "h2", xs: "h4" } }}
        >
          Core components
        </Typography>

        <Typography
          className="wbeDetailsContent CoreComponentsSubheading"
          variant="h6"
          
        >
          The measured RNA data along with additional datasets are analysed to
          infer the count of infected population, identify trends and patterns
          of infection in the catchment area. This will enable informed decision
          making by the governments and other stakeholders.
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6}>
            <Card className="CoreComponentCard">
              <CardContent>
                <img alt="Sample" src={Consortium} width={80} />
                <Typography
                  className="wbeDetailsHeading"
                  variant="h5"
                  component="div"
                  sx={{ my: 2 }}
                >
                  Consortium
                </Typography>
                <Typography className="wbeDetailsContent" variant="h6">
                  WIN consortium will provide a platform to <span className="textBold">bring together </span> 
                  researchers, scientists, start-ups, innovation based
                  institutions and <span className="textBold">aggregate</span>  knowledge, technology and funds to
                  strengthen Wastewater-Based Epidemiology (WBE) for healthcare
                  in India.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Card className=" CoreComponentCardTwo">
              <CardContent>
                <img alt="Sample" src={Deployment} width={80} />
                <Typography
                  className="wbeDetailsHeading"
                  variant="h5"
                  component="div"
                  sx={{ my: 2 }}
                >
                  Deployment
                </Typography>
                <Typography className="wbeDetailsContent" variant="h6">
                  WIN will be <span className="textBold"> piloted in Indian cities </span> to track SARS-CoV-2 which
                  will strengthen practices for pre-emptive approaches to public
                  health. The pilot will involve wastewater sampling, testing
                  and using the results to inform decision-makers with
                  <span className="textBold">  evidence-based CoViD-19 management.. </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider className="customeMarginBottom customeMarginTop"></Divider>
    </>
  );
}

export default CoreComponents;
