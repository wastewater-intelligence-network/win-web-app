import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Divider, Grid, Typography } from "@mui/material";
import Sneezing from "../Icons/sneezing.svg";
import Shedding from "../Icons/Shedding.svg";
import SampleCollectionImg from '../Icons/Sample_Collection.svg';
import SampleConcentrationImg from '../Icons/Sample_Concentration.svg';
import RNAExtraction from '../Icons/RNA_Extraction.svg';
import RNAMeasurement from '../Icons/RNA_Measurement.svg';
import DataAnalytics from '../Icons/Data_Analytics.svg';
import "./wbeworkDetailsBScarusel.css";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import HomeBanner from "../images/banner-image.png";



// function WbeWorkDetails(props) {
//   const items = [
//     {
//       Name: "Pizza begin",
//       Image: "https://source.unsplash.com/featured/?macbook",
//       contentPosition: "left"
//     },
//     {
//       Name: "Home Appliances",
//       Caption: "Say no to manual home labour!",
//       contentPosition: "middle",
//       Image: "https://source.unsplash.com/featured/?washingmachine"
//     },
//     {
//       Name: "Decoratives",
//       Caption: "Give style and color to your living room!",
//       contentPosition: "right",
//       Image: "https://source.unsplash.com/featured/?lamp"
//     }
//   ];

//   // return (
//   //   <Carousel>
//   //     {
//   //       items.map((item, i) => <Item key={i} item={item} />)
//   //     }
//   //   </Carousel>
//   // )
// }

function WbeWorkDetails(){
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"> Infection</button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Shedding</button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Sample Collection</button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <Grid container spacing={2}>
    <Grid item xs={6} md={7}>
    <h4>Infection</h4>
      <p>
  
  CoViD-19 is caused by the SARS-CoV-2 virus that spreads through aerosol droplets discharged by an infected person. The incubation period of SARS-CoV-2 has been proven to be of a duration of 2 to 14 days.</p>
    </Grid>
    <Grid item xs={6} md={5}>
    <img src={HomeBanner} className="d-block w-100" alt="..." />
    </Grid>
    
  </Grid>
  
      
       
      </div>
      <div className="carousel-item">
      <Grid container spacing={2}>
    <Grid item xs={6} md={7}>
    <h4>Infection</h4>
      <p>
  
  CoViD-19 is caused by the SARS-CoV-2 virus that spreads through aerosol droplets discharged by an infected person. The incubation period of SARS-CoV-2 has been proven to be of a duration of 2 to 14 days.</p>
    </Grid>
    <Grid item xs={6} md={5}>
    <img src={HomeBanner} className="d-block w-100" alt="..." />
    </Grid>
    
  </Grid>
      </div>
      <div className="carousel-item">
      <Grid container spacing={2}>
    <Grid item xs={6} md={7}>
    <h4>Infection</h4>
      <p>
  
  CoViD-19 is caused by the SARS-CoV-2 virus that spreads through aerosol droplets discharged by an infected person. The incubation period of SARS-CoV-2 has been proven to be of a duration of 2 to 14 days.</p>
    </Grid>
    <Grid item xs={6} md={5}>
    <img src={HomeBanner} className="d-block w-100" alt="..." />
    </Grid>
    
  </Grid>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      {/* <span className="visually-hidden">Previous</span> */}
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      {/* <span className="visually-hidden">Next</span> */}
    </button>
  </div>
  )
}

export default WbeWorkDetails;

// function Item(props) {
   

//       <Grid
//         container
//         rowSpacing={3}
//         columnSpacing={{ xs: 3, sm: 3, md: 12 }}
//         justifyContent="center"
//         alignItems="center">
//         <Grid item xs={12} sm={6} md={6} >
//           {props.item.Caption}
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo
//           img elements must have an alt prop, either with meaningful text, or an empty string fo

//         </Grid>
        
//           <Grid item xs={12} sm={6} md={6} >
//             <img src={props.item.Image} style={{ width: 100 + '%' }} />
//           </Grid>
//         </Grid>
//   )
// }