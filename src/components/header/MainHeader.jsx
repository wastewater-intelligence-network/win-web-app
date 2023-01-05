import { Link, NavLink, useNavigate } from "react-router-dom";
import * as React from "react";
import "./MainHeader.css";
import { Box, Grid, Container } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import Logo from "./img/hero_logo.svg";

function MainHeader(props) {
	const navigate = useNavigate();

	const handleClick = () => {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	};

	const handleLogOut = () => {
		var token = localStorage.getItem("login_token");
		if (token) {
			localStorage.setItem("login_token", "");
			alert("you're Logged Out !");
			navigate("/login");
		}
	};

	// const handleClickknowledgeitem = (e) => {
	//   document.getElementById(e.target.id).setAttribute("selected", true);
	//   setTimeout(() => {
	//     props.executeScrollWbe(e.target.id);
	//   }, 1000);
	// };

	return (
		<>
			<Container sx={{ my: 1 }} className="top-header">
				<Grid
					container
					spacing={2}
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					className="top-header-inner"
				>
					<Grid item xs={8} sm={8}>
						<Box>
							<Link to={"/"}>
								{" "}
								<img
									alt="Logo"
									src={Logo}
									className="header-logo"
								/>
							</Link>
						</Box>
					</Grid>
					{/* <Grid
						item
						sx={{ display: { xs: "none", sm: "block" } }}
						sm={3}
					>
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
					</Grid> */}

					<Grid item xs={4} sm={1} sx={{ textAlign: "right" }}>
						<NavLink
							id="login_button"
							to="/login"
							className={({ isActive }) =>
								isActive ? "active" : "nonActive"
							}
						>
							Login
						</NavLink>
					</Grid>
				</Grid>
			</Container>

			<div className="topnav" id="myTopnav">
				<Container>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "active" : "nonActive"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/aboutus"
						className={({ isActive }) =>
							isActive ? "active" : "nonActive"
						}
					>
						About Us
					</NavLink>

					<div className="dropdown">
						<button className="dropbtn">
							Cities
							<i className="fa fa-caret-down"></i>
						</button>
						<div className="dropdown-content">
							<NavLink
								to="/surat"
								className={({ isActive }) =>
									isActive ? "active" : "nonActive"
								}
							>
								Surat
							</NavLink>
						</div>
					</div>

					{/* <div className="dropdown only-on-home">
            <button className="dropbtn">
              Knowledge
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <span
                className="custome-link"
                id="wasteWaterBased"
                onClick={handleClickknowledgeitem}
              >
                {" "}
                Wastewater-Based Epidemiology (WBE)
              </span>
              <span
                className="custome-link"
                id="howWbeWork"
                onClick={handleClickknowledgeitem}
              >
                How does WBE Work?
              </span>
              <span
                className="custome-link"
                id="decisionMakers"
                onClick={handleClickknowledgeitem}
              >
                Decision Makers
              </span>
              <span
                className="custome-link"
                id="coreComponents"
                onClick={handleClickknowledgeitem}
              >
                Core Components
              </span>
              <span
                className="custome-link"
                id="partners"
                onClick={handleClickknowledgeitem}
              >
                Partners
              </span>
            </div>
          </div> */}
					{/* <NavLink
            to="/knowledge"
            className={({ isActive }) => 
            isActive ? "active" : "nonActive" }
          >
            Knowledge
          </NavLink> */}

					<NavLink
						to="/consortium"
						className={({ isActive }) =>
							isActive ? "active" : "nonActive"
						}
					>
						Consortium
					</NavLink>

					<NavLink
						to="/contactus"
						className={({ isActive }) =>
							isActive ? "active" : "nonActive"
						}
					>
						Contact Us
					</NavLink>

					{/* {
            localStorage.getItem("login_token") && localStorage.getItem("login_token").length > 0 ?

              <Button className="logoutBtn"
                //to="/login"
                onClick={handleLogOut}
              >
                Logout
              </Button>
              :
              <NavLink className="loginBtn"
              to="/login"
              
            >
              Login
            </NavLink>
          } */}

					<span className="icon" onClick={handleClick}>
						&#9776;
					</span>
				</Container>
			</div>
		</>
	);
}
export default MainHeader;
