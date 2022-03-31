
import * as React from "react";
import { Grid, InputAdornment, TextField, Box } from "@mui/material";
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../Icons/hero_logo.svg";
import { Link, NavLink } from "react-router-dom";

function TopHeader() {
  return (
    <>
      <Container sx={{ my: 1 }} className="top-header">
        <Grid container spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="top-header-inner"
        >
          <Grid item xs={8} sm={8}>
            <Box>
            <Link to={'/'}>  <img alt="Logo" src={Logo} className="header-logo" /></Link>
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} sm={3}>
            <TextField
              fullWidth
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

          <Grid item xs={4} sm={1} sx={{textAlign:'right'}}>
            <NavLink id="login_button"
              to="/login"
              className={({ isActive }) =>
                isActive ? "active" : "nonActive"}
            >
              Login
            </NavLink>
          </Grid>

        </Grid>




      </Container>
    </>
  );
}

export default TopHeader;