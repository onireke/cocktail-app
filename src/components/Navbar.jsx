import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

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
          <li>
            <Link to="/about">
              <li className="nav-about">About page</li>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
