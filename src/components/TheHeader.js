import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
const TheHeader = () => {
  return (
    <div className="home-header-sidebar container">
      <div className="home-header-sidebar-left">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="home-header-sidebar-title">Hounter</div>
      </div>
      <div className="home-header-sidebar-right">
        <div className="home-header-sidebar-right-menu">
          <Link to="/about-us" className="menu-link">
            About Us
          </Link>
          <Link to="/article" className="menu-link">
            Article
          </Link>
          <Link to="/property" className="menu-link">
            Property
          </Link>
        </div>
        <div className="signup-btn">Sign Up!</div>
      </div>
    </div>
  );
};

export default TheHeader;
