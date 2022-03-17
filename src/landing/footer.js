import * as React from "react";
import Box from "@mui/material/Box";
import './footer.css';
import { Container, Grid } from "@mui/material";
import Logo from "../Icons/hero_logo.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <>
            <Container className="footer-upper-section">
                <Grid
                    container
                    spacing={2}
                    columnSpacing={{ xs:0, sm: 2, md: 3 }}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        <img alt="Logo" src={Logo} className="header-logo" />
                        <p>
                            1ˢᵗ and 2ⁿᵈ Floor, Core 4B,
                            India Habitat Centre, Lodhi Road,
                            New Delhi, Delhi 110003
                        </p>
                        <h4>win@niua.org</h4>


                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <ul>
                            <li>Knowledge </li>
                            <li>Blog</li>
                            <li>About WBE</li>
                            <li>WIN Intro</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <ul>
                            <li>Collaborate  </li>
                            <li>Contact us</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <ul>
                            <li>Deployment  </li>
                            <li>Surat</li>
                        </ul>


                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <ul  className="social-icons">
                            <li><InstagramIcon /> </li>

                            <li><TwitterIcon /></li>

                            <li><FacebookIcon /></li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>


            <footer className="footer-main">
                <div className="footer-wrap">
                    <p className="made-in-india-para">Made in India by Government of India. Reach out to us at <a href="mailto:name@email.com">win@niua.org</a></p>
                    <p className="ministry-of-housing-para">&copy; Ministry of Housing and Urban Affairs</p>
                </div>
            </footer>
        </>

    )
}

export default Footer;


