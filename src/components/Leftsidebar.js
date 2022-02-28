import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from 'react-router-dom';


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
      <Tabs orientation="vertical" value={value} onChange={handleChange}>
        <LinkTab label="Users" />
        <LinkTab label="teams" />
        <LinkTab label="Collection Point" />
        <LinkTab label="Sample Upload" />
      </Tabs>
    </Box>
  );
}

export default Leftsidebar;