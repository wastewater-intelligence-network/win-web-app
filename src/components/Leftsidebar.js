import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from "@mui/material";
import { Link, useNavigate, NavLink } from 'react-router-dom';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Leftsidebar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    if (newValue === 0) {
      navigate("/user")
    } else if (newValue === 1) {
      navigate("/team")
    } else if (newValue === 2) {
      navigate("/collectionpoint")
    }
    else if(newValue === 3) {
      navigate("/fileupload");
    }


  };

  return (
    <Box sx={{ width: '100%', mt: '5', height: '80vh', boxShadow: '1' }}>
      <Tabs orientation="vertical" value={value} onChange={handleChange} className="tabs-box">
        <LinkTab label="Users" />
        <LinkTab label="Teams" />
        <LinkTab label="Collection Points" />
        <LinkTab label="Sample Upload" />
        
      </Tabs>
      <div className="topnav" id="myTopnav">
        <Container>
      <NavLink
            to="/setting/user"
            className={({ isActive }) => 
            isActive ? "active" : "nonActive" }
          >
            user
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) => 
            isActive ? "active" : "nonActive" }
          >
            team
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => 
            isActive ? "active" : "nonActive" }
          >
            Home2
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => 
            isActive ? "active" : "nonActive" }
          >
            Home3
          </NavLink>
          </Container>
          </div>
    </Box>
  );
}

export default Leftsidebar;