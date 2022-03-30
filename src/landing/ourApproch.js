import * as React from "react";
import { Box,  Typography } from "@mui/material";

function OurApproch(){
return(
<>
<Box className="our-approuch-mobile-box">
                <Typography className="our-approach-mobile-title">
                  Our approach
                </Typography>


                <Typography className="our-approach-mobile-heading">
                Learning, Consulting & Evaluating
                </Typography>

                <Typography className="our-approach-mobile-content">
                Through the entire procesaaaaaaaaaaaasssssssssssssssssssssssssssssssssssssssasddfgb123411234r57777789k09iuh2fmfmmgs, even scale-up learning and
                evaluating are key as the project is multisectoral involving a
                growing and agile science. Consulting with all stakeholders
                including the implementers, researchers and decision makers is
                ongoing.
                </Typography>

                <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* <!-- Indicators --> */}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div className="carousel-inner">

      <div className="item active">
        <img src="la.jpg" alt="Los Angeles" style="width:100%;" />
        
      </div>

      <div className="item">
        <img src="chicago.jpg" alt="Chicago" style="width:100%;"/>
        
      </div>
    
      <div className="item">
        <img src="ny.jpg" alt="New York" style="width:100%;" />
      
      </div>
  
    </div>

    {/* <!-- Left and right controls --> */}
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>


                </Box>
</>
);
}

export default OurApproch;