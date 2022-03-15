
import * as React from "react";
import { Grid, InputAdornment, TextField, Box } from "@mui/material";
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../Icons/hero_logo.svg";

function TopHeader(){
return(
    <>
<Container sx={{my:1}}>
<Grid container spacing={2} 
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
  <Grid item xs={12} sm={8}>
  <Box>
<img alt="Logo" src={Logo} className="header-logo" />
</Box>
  </Grid> 
  <Grid item xs={12} sm={3}>
  <TextField fullWidth 
          id="filled-search"
          type="search"
          placeholder="Search"
          variant="outlined"
          size="small"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}

        />
  </Grid>
  
</Grid>   




    </Container>
    </>
);
}

export default TopHeader;