

import { Box, Grid } from '@mui/material';
import * as React from 'react';
import Leftsidebar from './Leftsidebar';
import Datatable from './Datatable';
import AddcollectionPoint from './AddcollectionPoint';
import Layout from "../components/app-layout/Layout";

function CollectionPoint() {


  var columns = [
    {
      field: "userName",
      headerName: "User Name",
      id: "1",
      width: "200",
    },
    {
      field: "jobTitle",
      headerName: "Job Title",
      id: "2",
      width: "200",
    },
    {
      field: "team",
      headerName: "Team",
      id: "3",
      width: "200",
    },
    {
      field: "email",
      headerName: "Email",
      id: "4",
      width: "200",
    },
  ];

  const rows = [{
    _id: 123,
    userName: "Tusar",
    team: "Team 1",
    jobTitle: "Collector",
    email: "tusar@gmail.com",
    id: 123,
  },
  {
    _id: 124,
    userName: "Asishi",
    team: "Team 1",
    jobTitle: "Collector",
    email: "asish@gmail.com",
    id: 124,
  },
  {
    _id: 125,
    userName: "Kalia",
    team: "Team 2",
    jobTitle: "Collector",
    email: "Binso@gmail.com",
    id: 125,
  }
  ];

  return (
    <>
      <Layout />

      <Box sx={{ mt: 2, ml: '80px', mr: '10px' }}>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h4>Setting</h4>
          </Grid>
          <Grid item xs={10}>
            <AddcollectionPoint />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Leftsidebar />
          </Grid>
          <Grid item xs={10} sx={{ pl: 0 }}>

            {/* <Datatable title= "Collection Point" /> */}
          </Grid>

        </Grid>
      </Box>




      //  {<Leftsidebar activeIndex='1' />}
      //  {/* <AdduserForm /> */}
      //  {/* <ViewUserForm /> */}
      <Datatable columns={columns} rows={rows} title="teams" />
    </>
  )
}

export default CollectionPoint;