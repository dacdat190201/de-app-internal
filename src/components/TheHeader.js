import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
const TheHeader = () => {
  return (
    <div className="home-header-sidebar container">
      <div className="home-header-sidebar-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
        <Link to="/sign-up" className="signup-btn menu-link">
          Sign Up!
        </Link>
      </div>
    </div>
  );
};

export default TheHeader;
