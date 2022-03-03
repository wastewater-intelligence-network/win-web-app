// import { Link } from "@mui/material";

import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import "./newHeader.css";
import TopHeader from "./top-header";
import { Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function HomeHeader(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  const handleClickknowledgeitem = (e) => {
    document.getElementById(e.target.id).setAttribute("selected", true);
    setTimeout(() => {
      props.executeScrollWbe(e.target.id);
    }, 200);
  };

  const handleLogOut = () => {
    var token = localStorage.getItem("login_token");
    if (token) {
      localStorage.setItem("login_token", "");
      alert("you're Logged Out !");
      navigate("/login");
    }

  };

  return (
    <>
      <TopHeader />

      <div className="topnav" id="myTopnav">
        <Container>
          {/* <a href="#home" className="active">Home</a> */}
          {/* <a href="#news">About us</a> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : "nonActive"}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "active" : "nonActive"}
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
                  isActive ? "active" : "nonActive"}
              >
                Surat
              </NavLink>
            </div>
          </div>

          <div className="dropdown only-on-home">
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
          </div>
          <NavLink
            to="/consortium"
            className={({ isActive }) =>
              isActive ? "active" : "nonActive"}
          >
            Consortium
          </NavLink>

          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive ? "active" : "nonActive"}
          >
            Contact Us
          </NavLink>


         
          {
            localStorage.getItem("login_token") && localStorage.getItem("login_token").length > 0 ?

              <button
                //to="/login"
                onClick={handleLogOut}
              >
                Logout
              </button>
              :
              <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active" : "nonActive"}
            >
              Login
            </NavLink>
          }


          {/* <Link className="icon" onClick={handleClick}>&#9776;</Link> */}

          <span className="icon" onClick={handleClick}>
            &#9776;
          </span>
        </Container>
      </div>
    </>
  );
}
export default HomeHeader;
