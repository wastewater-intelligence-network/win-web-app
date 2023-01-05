import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import { $ } from "react-jquery-plugin";

import "./FixedHeader.scss";

import Logo from "./img/hero_logo.svg";

function FixedHeader(props) {
	const handleClick = () => {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	};

	$(window).on('scroll', () => {
		if ($(window).scrollTop() >= 130) {
			$(".header-main-sticky").slideDown(300);
		} else {
			$(".header-main-sticky").slideUp(300);
		}
	});

	return (
		<div className="header-main-sticky">
			<div className="header-logo-block">
				<Link to={"/"}>
					{" "}
					<img alt="Logo" src={Logo} className="header-logo" />
				</Link>
			</div>

			<div className="topnav topnav-sticky" id="myTopnav">
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
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? "active" : "nonActive"
					}
				>
					Login
				</NavLink>

				<span className="icon" onClick={handleClick}>
					&#9776;
				</span>
				<a>
					<i className="fa fa-search"></i>
				</a>
			</div>
		</div>
	);
}
export default FixedHeader;
