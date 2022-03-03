

import { Box, Grid } from '@mui/material';
import * as React from 'react';
import Leftsidebar from './Leftsidebar';
import Datatable from './Datatable';
import AddcollectionPoint from './AddcollectionPoint';
import Layout from "../components/app-layout/Layout";

function CollectionPoint(){
return(
  <>
  <Layout />

  <Box sx={{mt:2, ml:'80px',mr:'10px'}}>
 
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
<Grid item xs={10} sx={{pl:0}}>

{/* <Datatable title= "Collection Point" /> */}
</Grid>

</Grid>
</Box>
</>

  

      //  { <Leftsidebar activeIndex= '1' /> }
      //  {/* <AdduserForm /> */}
      //  {/* <ViewUserForm /> */}
      // {/* <Datatable columns ={arr1} rowData = {arr2}  title= "teams" /> */}
    
)
}

export default CollectionPoint;