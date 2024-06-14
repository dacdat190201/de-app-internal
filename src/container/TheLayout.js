import React from "react";
import TheHeader from "../components/TheHeader";
import headerShadowsbox from "../assets/images/backgrounds/header-shadowsbox.png";
import headerHome from "../assets/images/backgrounds/header-home.png";

const TheLayout = () => {
  return (
    <div className="c-wapper-home-header">
      <div className="header-background-left">
        <img src={headerShadowsbox} alt="" />
      </div>
      <div className="header-background-right">
        <img src={headerHome} alt="" />
      </div>
      <TheHeader />
    </div>
  );
};

export default TheLayout;
