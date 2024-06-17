import React from "react";
import logo from "../assets/images/logo/logo.png";
const TheHeader = () => {
  return (
    <div className="home-header-sidebar">
      <div className="home-header-sidebar-left">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="home-header-sidebar-title">Hounter</div>
      </div>
      <div className="home-header-sidebar-right">
        <div className="home-header-sidebar-right-menu">
          <button>About Us</button>
          <button>Article</button>
          <button>Property</button>
        </div>
        <div className="signup-btn">Sign Up!</div>
      </div>
    </div>
  );
};

export default TheHeader;
