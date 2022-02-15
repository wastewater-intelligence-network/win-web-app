

import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import AddScheduleForm from './AddScheduleForm';
import Datatable from './Datatable';
import Date from './Date';
import ScheduleDetails from './ScheduleDetails';


function Schedules(){
  const [team, setTeam] = React.useState('all team');

  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
  };


  var columns = [
    {
     "field": "schedule id",
     "headerName": "Schedule Id",
     "id": "1",
     "width": "100"
    },
    {
     "field": "date",
     "headerName": "Schedule Date",
     "id": "2",
     "width": "200"
    },
    {
      "field": "collection point",
      "headerName": "Collection Point",
      "id": "3",
      "width": "400"
     },
     {
      "field": "status",
      "headerName": "Status",
      "id": "4",
      "width": "200"
     },
     {
      "field": "team",
      "headerName": "Team",
      "id": "5",
      "width": "200"
     },
     {
      "field": "update",
      "headerName": "Last Update",
      "id": "6",
      "width": "200"
     },
   ];
   

return(
    
    <Box sx={{mt:2, ml:'80px',mr:'10px'}}>

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
  <Grid item xs={6} sx={{pl:0}}>
  <AddScheduleForm />
 <ScheduleDetails />
  </Grid>
  
</Grid>


<Grid container spacing={2}>
<Grid item xs={12}>
{/* <Datatable /> */}
</Grid>
</Grid>

       
       
       {/* <AdduserForm /> */}
       {/* <ViewUserForm /> */}
      {/* <Datatable columns ={arr1} rowData = {arr2}  title= "Users" /> */}
    </Box>
)
}

export default Schedules;