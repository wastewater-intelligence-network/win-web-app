import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../Icons/hero_logo.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useMemo, useRef } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();



  const pages = [
    "Home",
    "About us",
    "Cities",
    "Challenge",
    "Knowledge",
    "Consortium",
    "Contact us",
    "Login",
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedid, setSelectedid] = React.useState('deskmenu0');
  // console.log(selectedid, 'after');
  const [citydd, setCitydd] = React.useState(false);
  const [knowledgedd, setKnowledgedd] = React.useState(false);


  const handleSelectMenu = (e, index) => {
    console.log(index);
    // setSelectedMenu(index);
    if (e.currentTarget.innerText === 'Challenge' || e.currentTarget.innerText === 'CHALLENGE') {
      navigate("/challenge");
      let _elm = document.getElementById(e.target.id);
      _elm.classList.add('active_menu');
      setSelectedid(e.target.id);
    }
    else if (e.currentTarget.innerText === 'Home' || e.currentTarget.innerText === 'HOME') {
      navigate("/home");
      let _elm = document.getElementById(e.target.id);
      _elm.classList.add('active_menu');
      setSelectedid(e.target.id);
    }

    else if (e.currentTarget.innerText === 'About us' || e.currentTarget.innerText === 'ABOUT US') {
      navigate("/aboutus");
      // let _elm = document.getElementById(e.target.id);
      // _elm.classList.add('active_menu');
      // setSelectedid(e.target.id);
    }
    else if (e.currentTarget.innerText === 'Contact us' || e.currentTarget.innerText === 'CONTACT US') {
      navigate("/contactus");
      // let _elm = document.getElementById(e.target.id);
      // _elm.classList.add('active_menu');
      // setSelectedid(e.target.id);
    }

    else if (e.currentTarget.innerText === 'Consortium' || e.currentTarget.innerText === 'CONSORTIUM') {
      navigate("/consortium");
    }

    else if (location.pathname === '/') {
      setSelectedid('deskmenu0');
    }
    else if (location.pathname === '/challenge' || location.pathname === '/CHALLENGE') {
      setSelectedid('deskmenu3');
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    handleSelectMenu(e);
    // let _elmclass = document.getElementsByClassName('');
    // _elmclass.classList.remove('active_menu');
    let elmlist = pages.forEach((page, index) => {
      let _elmclass = document.getElementById('deskmenu' + index);
      _elmclass.classList.remove('active_menu');
    });
    let _elm = document.getElementById(e.target.id);
    _elm.classList.add('active_menu');
    setSelectedid(e.target.id);
    setCitydd(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorElKnowledge, setAnchorElKnowledge] = React.useState(null);
  const openknowledge = Boolean(anchorElKnowledge);

  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
    setCitydd(true);
    let elmlist = pages.forEach((page, index) => {
      let _elmclass = document.getElementById('deskmenu' + index);
      _elmclass.classList.remove('active_menu');
    });
  };

  const handleClickKnowledge = (event) => {
    console.log(event);
    setAnchorElKnowledge(event.currentTarget);
    setKnowledgedd(true);
    let elmlist = pages.forEach((page, index) => {
      let _elmclass = document.getElementById('deskmenu' + index);
      _elmclass.classList.remove('active_menu');
    });
  };



  const handleClose = (e) => {
    setAnchorEl(null);
    document.getElementById(e.target.id).setAttribute('selected', true);
  };

  const handleCloseKnowledge = (e) => {
    setAnchorElKnowledge(null);
    document.getElementById(e.target.id).setAttribute('selected', true);
  };

  const handleClickknowledgeitem = (e) => {
    setAnchorElKnowledge(null);
    document.getElementById(e.target.id).setAttribute('selected', true);
    setTimeout(() => {
      props.executeScrollWbe(e.target.id);
    }, 1000);

  };






  // useMemo(() => {
  //   console.log('use memo');
  //   if(location.pathname === '/') {
  //     setSelectedid('deskmenu0');
  //   }
  //   else if(location.pathname === '/challenge' || location.pathname === '/CHALLENGE') {
  //     setSelectedid(selectedid);
  //   }
  // } , []);

  return (
    <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: "#fff", mb:4 }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img alt="Logo" src={Logo} width="250" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Box>
                  <MenuItem className={index === 2 || index === 3 ? "hide" : "show"} key={page} onClick={handleCloseNavMenu}>
                    <Typography className="quicksandmedium-font-family" textAlign="center">{page}</Typography>
                  </MenuItem>

                  <div className={index === 2 ? "show" : "hide"}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onMouseEnter={handleClick}
                      style={{ marginLeft: '5px', textTransform: 'capitalize', fontSize: '1rem', color: '#525252' }}
                      className={citydd === true ? 'active_menu' : 'no_active_menu'}
                    >
                      Cities
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}

                    >
                      <MenuItem id={'cityitem' + index} onClick={handleClose} >Surat</MenuItem>
                      <MenuItem id={'cityitem' + index} onClick={handleClose} >Ahmadabad</MenuItem>
                      <MenuItem id={'cityitem' + index} onClick={handleClose}>Krishna Nagar</MenuItem>
                    </Menu>
                  </div>


                  {/* <div className={index === 3 ? "show" : "hide"}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      style={{ marginLeft: '5px', textTransform: 'capitalize', fontSize: '1rem', color: '#525252' }}
                      className={citydd === true ? 'active_menu' : 'no_active_menu'}
                    >
                      Knowledge
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      
                    >
                      <MenuItem id={'cityitem' + index} >How WBE Work</MenuItem>
                    </Menu>
                  </div> */}
                </Box>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img alt="Logo" src={Logo} width="200" />
          </Typography>
          <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
            {pages.map((menu, index) => (
              <Box>
                <Button
                  variant="text"

                  id={'deskmenu' + index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, display: "block", justifyContent: "flex-end", color: "#525252",
                  fontFamily:"QuicksandRegular"}}

                  className={classNames((index === 2) || (index === 4) ? "hide" : "show", selectedid === 'deskmenu' + index ? 'active_menu' : 'not_active_menu')}
                //className={selectedid === 'deskmenu'+ index ? 'active_menu' : 'not_active_menu' }
                >
                  {menu}

                </Button>


                <div className={index === 2 ? "show" : "hide"}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onMouseEnter={handleClick}
                    style={{ marginTop: '15px', color: '#525252', fontFamily:"QuicksandRegular" }}
                    className={citydd === true ? 'active_menu' : 'no_active_menu'}
                  >
                    Cities <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                  >
                    <MenuItem id={'cityitem' + index} onClick={handleClose}>Surat</MenuItem>
                    <MenuItem id={'cityitem' + index} onClick={handleClose}>Ahmadabad</MenuItem>
                    <MenuItem id={'cityitem' + index} onClick={handleClose}>Krishna Nagar</MenuItem>
                  </Menu>
                </div>

                <div className={index === 4 ? "show" : "hide"}>
                  <Button
                    id="basic-button-knowledge"
                    aria-controls={openknowledge ? "basic-menu-knowledge" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openknowledge ? "true" : undefined}
                    onMouseEnter={handleClickKnowledge}
                    style={{ marginTop: '15px', color: '#525252', fontFamily:"QuicksandRegular" }}
                  // className={citydd === true ? 'active_menu' : 'no_active_menu'}
                  >
                    Knowledge <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="basic-menu-knowledge"
                    anchorEl={anchorElKnowledge}
                    open={openknowledge}
                    onClose={handleCloseKnowledge}

                  >
                    <MenuItem id='wasteWaterBased' onClick={handleClickknowledgeitem} >Wastewater-Based Epidemiology (WBE)</MenuItem>
                    <MenuItem id='howWbeWork' onClick={handleClickknowledgeitem} >How does WBE Work?</MenuItem>
                    <MenuItem id='decisionMakers' onClick={handleClickknowledgeitem} >Decision Makers</MenuItem>
                    <MenuItem id='coreComponents' onClick={handleClickknowledgeitem} >Core Components</MenuItem>
                    <MenuItem id='partners' onClick={handleClickknowledgeitem} >Partners</MenuItem>
                  </Menu>
                </div>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
