import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/cypress-logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img className="logo-img" src={Logo} alt="" />
        </a>
        <div
          className={`menu-icon ${showMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${showMenu ? "active" : ""}`}>
          <li>
            <a href="/">Why Cypress</a>
          </li>
          <li>
            <a href="/">Platforms</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Customers</a>
          </li>
          <li>
            <a href="/">What's New</a>
          </li>
          <li>
            <a href="/">Learn</a>
          </li>
        </ul>
        <div className="login-signup">
          <a href="/" target="_blank" className="login">
            Login
          </a>
          <a href="/signup" className="signup">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
