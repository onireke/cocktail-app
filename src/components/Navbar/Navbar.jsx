import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      <div className="center-nav">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-links">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li className="nav-about">About page</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
