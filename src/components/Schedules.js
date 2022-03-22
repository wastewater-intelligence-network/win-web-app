

import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import AddScheduleForm from './AddScheduleForm';
import Datatable from './Datatable';
import Date from './Date';
import ScheduleDetails from './ScheduleDetails';
import Layout from "../components/app-layout/Layout";


function Schedules(props) {
  const [team, setTeam] = React.useState('all team');
  const [scheduledetails, setScheduledetails] = React.useState(null);

  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
  };

  const OnShowSchedule = (params, event) => {
    setScheduledetails(params);
  }

  var columns = [
    {
      "field": "scheduleId",
      "headerName": "Schedule Id",
      "id": "1",
     
    },
    {
      "field": "scheduleDate",
      "headerName": "Schedule Date",
      "id": "2",
      
    },
    {
      "field": "collectionPoint",
      "headerName": "Collection Point",
      "id": "3",
      
    },
    {
      "field": "status",
      "headerName": "Status",
      "id": "4",
      
    },
    {
      "field": "team",
      "headerName": "Team",
      "id": "5",
      
    },
    {
      "field": "lastUpdate",
      "headerName": "Last Update",
      "id": "6",
     
    },
  ];

  let rows =   [{
    "scheduleId": "121",
    "scheduleDate": "13 Jan, 2022",
    "collectionPoint": "MG Road, Gandhi Bazar",
    "status": "In Progress",
    "team": "Team 1",
    "lastUpdate": "12:40 PM, 13 Jan 2022",
    "id": "1"
  },
{
    "scheduleId": "122",
    "scheduleDate": "13 Jan, 2022",
    "collectionPoint": "MG Road, Gandhi Bazar",
    "status": "Not Started",
    "team": "Team 2",
    "lastUpdate": "12:40 PM, 13 Jan 2022",
    "id": "2"
  },
{
    "scheduleId": "123",
    "scheduleDate": "13 Jan, 2022",
    "collectionPoint": "MG Road, Gandhi Bazar",
    "status": "Not Started",
    "team": "Team 3",
    "lastUpdate": "12:40 PM, 13 Jan 2022 lokesh",
    "id": "3"
  }
];



  return (
    <>
      <Layout />

      <Box sx={{ mt: 2, ml: '80px', mr: '10px' }}>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h5>Schedules</h5>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={team}
                  label="Team"
                  onChange={handleChangeTeam}
                  size='small'
                >
                  <MenuItem value={'all team'}>All Team</MenuItem>
                  <MenuItem value={'team1'}>Team 1</MenuItem>
                  <MenuItem value={'team2'}>Team 2</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Date />
          </Grid>
          <Grid item xs={6} sx={{ pl: 0 }}>
            <AddScheduleForm />
            <ScheduleDetails scheduledetails={scheduledetails === null ? null : scheduledetails} />
          </Grid>

        </Grid>


        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <Datatable /> */}
          </Grid>
        </Grid>



        {/* <AdduserForm /> */}
        {/* <ViewUserForm /> */}
        <Datatable columns ={columns} rows = {rows}  title= "Schedule" showSchedule={OnShowSchedule} />
      </Box>
    </>
  )
}

export default Schedules;