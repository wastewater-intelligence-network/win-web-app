
// import { Link } from "@mui/material";

import { Link } from "react-router-dom";
import * as React from "react";
import './newHeader.css'; 
import TopHeader from "./top-header";
import { Container } from "@mui/material";

function NewHeader(props){

 const handleClick = (()=>{
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
 });
 
 const handleClickknowledgeitem = (e) => {
 
  document.getElementById(e.target.id).setAttribute("selected", true);
  setTimeout(() => {
    props.executeScrollWbe(e.target.id);
  }, 1000);
};



    return(
        <>
<TopHeader />

<div className="topnav" id="myTopnav">
<Container>
  {/* <a href="#home" className="active">Home</a> */}
  {/* <a href="#news">About us</a> */}
  <Link  to="/">Home</Link>

  <Link  to="/aboutus">About Us</Link>
  <div className="dropdown">
    <button className="dropbtn">Cities 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
  <Link  to="/surat">Surat</Link>
   

    </div>
  </div> 

  <div className="dropdown">
    <button className="dropbtn">Knowledge 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
  <span className="custome-link" id="wasteWaterBased"
                        onClick={handleClickknowledgeitem} > Wastewater-Based Epidemiology (WBE)</span>
  <span className="custome-link" id="howWbeWork"
                        onClick={handleClickknowledgeitem} >How does WBE Work?</span>
  <span className="custome-link" id="decisionMakers"
                        onClick={handleClickknowledgeitem} >Decision Makers</span>
  <span className="custome-link" id="coreComponents"
                        onClick={handleClickknowledgeitem} >Core Components</span>
  <span className="custome-link" id="partners"
                        onClick={handleClickknowledgeitem}  >Partners</span>
      
    </div>
  </div>
  <Link to="/consortium">Consortium</Link>
  <Link  to="/contactus">Contact Us</Link>
  <Link  to="/login">Login</Link>
  {/* <Link className="icon" onClick={handleClick}>&#9776;</Link> */}


  <a className="icon" onClick={handleClick}>&#9776;</a>
  </Container>
</div>
 


 



        </>
    );
}
export default NewHeader;