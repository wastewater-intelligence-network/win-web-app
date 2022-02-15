import {  Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Sidetab = (props) => {
  const [sideTabValue, setSideTabValue] = useState(0);
   const menuLabels = props.menuLabels;
//  const menuLabels = ["Users", "Teams", "Collection points"]

  console.log("🚀 ~ file: side-tab.js ~ line 11 ~ SideTab ~ menus", menuLabels)
  const handleTabeChange = (event, newValue) => {
  console.log("🚀 ~ file: side-tab.js ~ line 15 ~ handleTabeChange ~ newValue", newValue)

    setSideTabValue(newValue);
     props.handleChangeOnParent(newValue);
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

// const handleMenuChange = (value) => {
// console.log("🚀 ~ file: side-tab.js ~ line 26 ~ handleMenuChange ~ value", value)

// }

  return (

    
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={sideTabValue}
        onChange={handleTabeChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, boxShadow: 1, borderColor: 'divider', borderBottom: 1 }}
      >

<Tab label='User'
  onChange={<Link to='/ab'></Link>}
/>
<Tab label='Team'
  onChange={<Link to='/cd'></Link>}
/>
<Tab label='My ideas'
  onChange={<Link to='/datatable'></Link>}
/>
      </Tabs>
   
  )

}



export default Sidetab;