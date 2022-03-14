import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider, Grid } from '@mui/material';
import EarlyWarning from '../images/decision-makers/ealry-warning.png';
import Containmentzones from '../images/decision-makers/containment-zones.png';
import TestingStrategy from '../images/decision-makers/testing-strategy.png';
import TimelyUpdates from '../images/decision-makers/timely-updates.png';
import TrackingTheSpread from '../images/decision-makers/tracking-spread.png';
import "./decisionMakers.css";

function DecisionMakers() {

  const handleMouseEnter = (e) => {
    let $column = document.getElementsByClassName("decision-makers-block");
    $column[0].classList.remove("wide");
    $column[0].style.width = "10%";
    $column[1].classList.remove("wide");
    $column[1].style.width = "10%";
    $column[2].classList.remove("wide");
    $column[2].style.width = "10%";
    $column[3].classList.remove("wide");
    $column[3].style.width = "10%";
    $column[4].classList.remove("wide");
    $column[4].style.width = "10%";
    document.getElementById(e.currentTarget.id).classList.add("wide");
  }

  const handleMouseLeave = (e) => {
    let $column = document.getElementsByClassName("decision-makers-block");
    $column[0].style.width = "20%";
    $column[1].style.width = "20%";
    $column[2].style.width = "20%";
    $column[3].style.width = "20%";
    $column[4].style.width = "20%";
    document.getElementById(e.currentTarget.id).classList.remove("wide");
  }

  return (
    <>
      <Box className="customeMarginBottom" >
        <Typography
          className="customeMarginBottom heading decision-makers"
          sx={{ typography: { sm: "h3", xs: "h6", mx: 3 }, textAlign: 'center', mx: 9 }}
        >
          Support decision makers
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className='customeMarginBottom decision-makers-block-main'
        >
          <div id="decision-makers-block-early-morning" className="decision-makers-block decision-makers-block-early-morning" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img alt='Sample' src={EarlyWarning} width={100 + '%'} />
            <span>
              Early warning to cities (4 to 14 days ahead)
            </span>
          </div>
          <div id="decision-makers-block-tracking-spread" className="decision-makers-block decision-makers-block-tracking-spread"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img alt='Sample' src={TrackingTheSpread} width={100 + '%'} />
            <span>
              Estimating the infected population & type of variant
            </span>
          </div>
          <div id="decision-makers-block-containment-zones" className="decision-makers-block decision-makers-block-containment-zones"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img alt='Sample' src={Containmentzones} width={100 + '%'} />
            <span>
              Identification of hotspots and containment zones
            </span>
          </div>
          <div id="decision-makers-block-containment-zones" className="decision-makers-block decision-makers-block-testing-strategy"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img alt='Sample' src={TestingStrategy} width={100 + '%'} />
            <span>
              Optimising testing strategy & allocation of resources
            </span>
          </div>
          <div id="decision-makers-block-timely-updates" className="decision-makers-block decision-makers-block-timely-updates"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img alt='Sample' src={TimelyUpdates} width={100 + '%'} />
            <span>
              Alerts to authorities and citizens
            </span>
          </div>
        </Grid>


        {/* <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
          justifyContent="center"
          alignItems="center"
          className='customeMarginBottom'
        >
          <Grid item xs={12} sm={6} md={6} lg={4}>

            <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                <span>Early Warning</span>
              </div>
              <CardContent>

                <img alt='Sample' src={EarlyWarning} width={70} />
                <Typography variant="h6" className="decissionMaker-box-content" sx={{ my: 2 }}>
                  <span style={{ fontWeight: 'bold' }}> Early warning </span> <br></br> to cities (4 to 14 days ahead)
                </Typography>


              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>

            <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                <span>Tracking the spread</span>
              </div>
              <CardContent>

                <img alt='Sample' src={TrackingTheSpread} width={70} />
                <Typography variant="h6" className="decissionMaker-box-content" sx={{ my: 2 }}>
                  <span style={{ fontWeight: 'bold' }}> Estimating the infected population </span> <br /> & type of variant
                </Typography>


              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>

            <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                <span>Containment Zones</span>
              </div>
              <CardContent>

                <img alt='Sample' src={Containmentzones} width={70} />
                <Typography variant="h6" className="decissionMaker-box-content" sx={{ my: 2 }}>
                  <span style={{ fontWeight: 'bold' }}> Identification of <br /> hotspots </span>   and <br /> containment zones
                </Typography>
              </CardContent>

            </Card>

          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>

            <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                <span>Testing Strategy</span>
              </div>
              <CardContent>

                <img alt='Sample' src={TestingStrategy} width={70} />
                <Typography variant="h6" className="decissionMaker-box-content" sx={{ my: 2 }}>
                  <span style={{ fontWeight: 'bold' }}>  Optimising testing <br /> strategy </span> & allocation <br /> of resources
                </Typography>

              </CardContent>

            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>

            <Card className={'decisionMakerCard'}>
              <div className='sideContent'>
                <span>Timely Updates</span>
              </div>
              <CardContent>

                <img alt='Sample' src={TimelyUpdates} width={70} />
                <Typography variant="h6" className="decissionMaker-box-content" sx={{ my: 2 }}>
                  <span style={{ fontWeight: 'bold' }}>  Alerts </span> to authorities <br /> and citizens
                </Typography>

              </CardContent>

            </Card>

          </Grid>





        </Grid>
 */}


      </Box>

    </>
  );
}

export default DecisionMakers;
