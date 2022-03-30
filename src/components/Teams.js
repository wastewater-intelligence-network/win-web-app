import { Box, Grid } from "@mui/material";
import * as React from "react";
import Leftsidebar from "./Leftsidebar";
import Datatable from "./Datatable";
import AddteamsForm from "./AddteamsForm";
import axios from "axios";
import Layout from "../components/app-layout/Layout";

function Teams() {

  const [data, setData] = React.useState([]);
  const title = "";

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

  const rows= [{
    _id: 123,
    userName:"Tusar",
    team: "Team 1",
    jobTitle:"Collector",
    email:"tusar@gmail.com",
    id: 123,
  },
  {
    _id:124,
    userName:"Asishi",
    team: "Team 1",
    jobTitle:"Collector",
    email:"asish@gmail.com",
    id:124,
  },
  {
    _id: 125,
    userName:"Kalia",
    team: "Team 2",
    jobTitle:"Collector",
    email:"Binso@gmail.com",
    id: 125,
  }
]

  async function fetchData() {
    try {
      const response = await axios.get("http://10.92.51.45:3030/team");
      const { data } = response;
      console.log(response, "responseeeeeeeeeeeeeeeeeeeeee");
      setData(data);
    } catch (error) {}
  }

  React.useEffect(() => {
   // fetchData();
     setData(rows);
  }, []);

  return (
    <>
    <Layout />
    <Box sx={{ mt: 2, ml: "80px", mr: "10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h5>Setting</h5>
        </Grid>

        <Grid item xs={10} sx={{ pl: 0 }}>
          <AddteamsForm />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Leftsidebar />
        </Grid>
        <Grid item xs={10} sx={{ pl: 0 }}>
        <Datatable columns ={columns} rows = {rows}  title= "teams" /> 
        </Grid>
      </Grid>
    
   </Box>
   </>
  );
}

export default Teams;
