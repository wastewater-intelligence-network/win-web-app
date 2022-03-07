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
import "./wbeWorkDetails.css";

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function WbeWorkDetails(props) {

  const items = [
    {
      Name: "Pizza begin",
      Image: "https://source.unsplash.com/featured/?macbook",
      contentPosition: "left"
    },
    {
      Name: "Home Appliances",
      Caption: "Say no to manual home labour!",
      contentPosition: "middle",
      Image: "https://source.unsplash.com/featured/?washingmachine"
    },
    {
      Name: "Decoratives",
      Caption: "Give style and color to your living room!",
      contentPosition: "right",
      Image: "https://source.unsplash.com/featured/?lamp"
    }
  ];

  return (
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <>


      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 3, sm: 3, md: 12 }}
        justifyContent="center"
        alignItems="center"

      >
        <Grid item xs={12} sm={6} md={6} >
          {props.item.Caption}

          img elements must have an alt prop, either with meaningful text, or an empty string fo
          img elements must have an alt prop, either with meaningful text, or an empty string fo
          img elements must have an alt prop, either with meaningful text, or an empty string fo
          img elements must have an alt prop, either with meaningful text, or an empty string fo
          img elements must have an alt prop, either with meaningful text, or an empty string fo
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <img src={props.item.Image} style={{ width: 100 + '%' }} />
        </Grid>
      </Grid>
    </>
  )
}

export default WbeWorkDetails;
