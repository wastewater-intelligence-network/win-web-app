import { Box, Grid } from "@mui/material";
import axios from "axios";
import * as React from "react";
import Datatable from "./Datatable";
import Leftsidebar from "./Leftsidebar";
import AdduserForm from "./side-drawer/AdduserForm";
import Layout from "../components/app-layout/Layout";

function User() {
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
    "id": "1"
  },
  {
    _id:124,
    userName:"Asishi",
    team: "Team 1",
    jobTitle:"Collector",
    email:"asish@gmail.com",
    "id": "2"
  },
  {
    _id: 125,
    userName:"Binso",
    team: "Team 1",
    jobTitle:"Collector",
    email:"Binso@gmail.com",
    "id": "3"
  }
]

  async function fetchData() {
    try {
      const response = await axios.get("http://10.92.50.207:3030/users");
      const { data } = response;
      setData(data);
    } catch (error) {}
  }

  React.useEffect(() => {
    // fetchData();
     setData(rows);
     console.log("🚀 ~ file: User.js ~ line 73 ~ React.useEffect ~ rows", rows)
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
          <AdduserForm />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Leftsidebar />
        </Grid>
        <Grid item xs={10} sx={{ pl: 0 }}>
          <Datatable title="User" columns={columns} rows={data} />
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default User;
