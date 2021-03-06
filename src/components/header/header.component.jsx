import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>

				<Link className="option" to="/signin">
					signin
				</Link>
				<Link className="option" to="/shop">
					Contact
				</Link>
			</div>
		</div>
	);
};

export default Header;
