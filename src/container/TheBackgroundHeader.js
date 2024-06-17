import React from "react";
import headerShadowsbox from "../assets/images/backgrounds/header-shadowsbox.png";
import headerHome from "../assets/images/backgrounds/header-home.png";
const TheBackgroundHeader = () => {
  return (
    <div className="c-wapper-home-header-background">
      <div className="header-background-left">
        <img src={headerShadowsbox} alt="" />
      </div>
      <div className="header-background-right">
        <img src={headerHome} alt="" />
      </div>
    </div>
  );
};

export default TheBackgroundHeader;
