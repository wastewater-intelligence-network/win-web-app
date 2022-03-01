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
  // const [value, setValue] = React.useState(0);
  // const navigate = useNavigate();
  // const handleChange = (event, newValue) => {
  //   console.log(newValue);
  //   setValue(newValue);
  //   if (newValue === 0) {
  //     navigate("/user")
  //   } else if (newValue === 1) {
  //     navigate("/team")
  //   } else if (newValue === 2) {
  //     navigate("/collectionpoint")
  //   }
  //   else if(newValue === 3) {
  //     navigate("/fileupload");
  //   }


  // };

  return (
    <Box sx={{ width: '100%', mt: '5', height: '70vh', boxShadow: '1' }}>
      {/* <Tabs orientation="vertical" value={value} onChange={handleChange} className="tabs-box">
        <LinkTab label="Users" />
        <LinkTab label="Teams" />
        <LinkTab label="Collection Points" />
        <LinkTab label="Sample Upload" />
        
      </Tabs> */}
      <div className="left-sidebar-tabs">
    
          <NavLink
            to="/setting/user"
            className={({ isActive }) => 
            isActive ? "tab-active" : "nonActive" }
          >
            User
          </NavLink>
          <NavLink
            to="/setting/team"
            className={({ isActive }) => 
            isActive ? "tab-active" : "nonActive" }
          >
            Team
          </NavLink>

          <NavLink
            to="/setting/collectionpoint"
            className={({ isActive }) => 
            isActive ? "tab-active" : "nonActive" }
          >
            Collection Point
          </NavLink>
          <NavLink
            to="/setting/fileupload"
            className={({ isActive }) => 
            isActive ? "tab-active" : "nonActive" }
          >
            Sample Upload
          </NavLink>

          
          </div>
    </Box>
  );
}

export default Leftsidebar;