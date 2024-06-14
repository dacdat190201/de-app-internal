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
        <div>LOGO</div>
        <div>NAME</div>
      </div>
    </div>
  );
};

export default TheHeader;
