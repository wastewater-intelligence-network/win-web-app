

import { Box, Grid } from '@mui/material';
import * as React from 'react';
import Datatable from './Datatable';
import Date from './Date';
import SampleStatusDetails from './SampleStatusDetails';
import Layout from "./app-layout/Layout";
import axios from "axios";
import moment from 'moment';
import { API_URL_WIN_WEB_APP } from './api-client';

function SampleStatus(props) {
  const [team, setTeam] = React.useState('all team');
  const [rows, setRows] = React.useState([]);
  const [rowsdata, setRowsdata] = React.useState([]);
  const [responsedata, setResponsedata] = React.useState([]);
  const [scheduledetails, setScheduledetails] = React.useState([]);
  const [opendrawer, setOpendrawer] = React.useState(false);

  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
  };

  const OnShowSampleStatus = (params, event) => {
    const filteredArray = responsedata.filter((item, index) => index == params.id);
    console.log(filteredArray);
    setScheduledetails(filteredArray);
    console.log(scheduledetails);
    setOpendrawer(true);
  }

  async function getSampleStatus(formatedDate) {
    console.log(formatedDate);
    let url = API_URL_WIN_WEB_APP+"/getSamplesCollectedOn?date="+formatedDate;
    console.log(url);
    let headers = {
      Authorization:
        "Bearer " +
        localStorage.getItem("login_token")
    };
    console.log(headers);

    try {
      const response = await axios.get(url, {
        headers: headers,
      });
      console.log(response);
      const { data } = response;
      if (data) {
        console.log(data);
        setResponsedata(data);
        let rowsData = data.map((item, index) => ({
          sampleTakenOn: item.sampleTakenOn,
          containerId: item.containerId,
          locationName: item.sampleCollectionLocation.name,
          locationId: item.sampleCollectionLocation.pointId,
          locationType: item.sampleCollectionLocation.type,
          samplingStatus: item.status,
          id: index,
          width: '160px'

        }));
        setRows(rowsData);
      }
    } catch (error) {}
  }

  const selectedDate =(date) => {
    let formatedDate = moment(date).format('YYYY-MM-DD');
    getSampleStatus(formatedDate);
  }

  var columns = [
    {
      "field": "sampleTakenOn",
      "headerName": "sample Taken On",
      "id": "1",
      width: '190'
     
    },
    {
      "field": "containerId",
      "headerName": "Container Id",
      "id": "2",
      width: '180'
      
    },
    {
      "field": "locationName",
      "headerName": "Location Name",
      "id": "3",
      width: '180'
      
    },
    {
      "field": "locationId",
      "headerName": "Location Id",
      "id": "4",
      width: '180'
      
    },
    {
      "field": "locationType",
      "headerName": "Location Type",
      "id": "5",
      width: '180'
      
    },
    {
      "field": "samplingStatus",
      "headerName": "Sampling Status",
      "id": "6",
      width: '180'
     
    },
  ];

  return (
    <>
      <Layout />
      <Box sx={{ mt: 2, ml: '80px', mr: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h5>Sample Status</h5>
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
            <Date dateSelected={selectedDate} />
          </Grid>
          <Grid item xs={6} sx={{ pl: 0 }}>
            <SampleStatusDetails opendrawer={opendrawer} scheduledetails={scheduledetails.length > 0 ? scheduledetails : [] } />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Datatable columns ={columns} rows = {rows}  title= "Sample Status" ShowSampleStatus={OnShowSampleStatus} />
      </Box>
    </>
  )
}

export default SampleStatus;