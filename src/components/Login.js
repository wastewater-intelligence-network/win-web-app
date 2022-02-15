import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginLogo from "../Icons/hero_logo.svg";
import { Divider } from "@mui/material";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main">
      <Box
      // sx={{
      //   marginTop: 8,
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      // }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4} className="rightBorder">
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, p: 5 }}
              className="login-box"
            >
              <img
                alt="login logo"
                src={LoginLogo}
                width={200}
                className="mb-40"
              />

              <Typography component="div" variant="h6">
                Log in
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
<Box className="text-center">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me Logged in"
              />
              <Link href="#" variant="body2" component="div">
                Forgot password?
              </Link>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={8}>
            <Box className="p-0100 text-center">
              <Typography variant="h6" className="wbeDetailsContent mb-40">
                Let’s{" "}
                <span style={{ color: "#2D4B9A", fontWeight: "bold" }}>
                  WIN
                </span>{" "}
                this war against CoViD-19
              </Typography>

              <Typography
                sx={{ mb: 2 }}
                variant="h5"
                className="wbeDetailsHeading mb-40"
              >
                Wastewater Intelligence Network
              </Typography>
              <Divider
                sx={{ borderColor: "#2D4B9A", borderStyle: "dashed", mb: 3 }}
              />
              <Typography variant="h6" className="mycardSubHeading">
                <span style={{ color: "#2D4B9A", fontWeight: "bold" }}>
                  WIN
                </span>{" "}
                is an initiative to bring together experts to manage the spread
                and impact of SARS-CoV-2 through{" "}
                <span style={{ color: "#2D4B9A", fontWeight: "bold" }}>
                  {" "}
                  Wastewater-based Epidemiology
                </span>{" "}
                in Indian cities.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
