import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
// import aos from "aos";

const Navbar = () => {
	const [isVisible, setVisible] = useState(false);
	return (
		<div className="Navbar">
			<Link
				to="/Home"
				style={{ color: "white", textDecorationLine: "none" }}
			>
				<div>Home</div>
			</Link>
			<Link
				to="/Home"
				style={{ color: "white", textDecorationLine: "none" }}
			>
				<div>About</div>
			</Link>

			<img src={Logo} alt="" />

			<Link
				to="/service"
				style={{ color: "white", textDecorationLine: "none" }}
			>
				<div>Services</div>
			</Link>
			<Link
				to="/termsandcondition"
				style={{ color: "white", textDecorationLine: "none" }}
			>
				<div>Terms & Conditions</div>
			</Link>
		</div>
	);
};

export default Navbar;
