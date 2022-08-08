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
          <Link to="/" className="home-link">
            <li>Home</li>
          </Link>

          <Link to="/about" className="about-link">
            <li className="nav-about">About</li>
          </Link>
        </ul>
      </div>

      <h2 className="qoyum">ertyui</h2>
    </nav>
  );
}

export default Navbar;
