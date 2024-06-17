import React from "react";
import headerShadowsbox from "../assets/images/backgrounds/header-shadowsbox.png";

const TheBackgroundHeader = () => {
  return (
    <div className="c-wapper-home-header-background">
      <div className="header-background-left">
        <img src={headerShadowsbox} alt="" />
      </div>
      <div className="header-background-right"></div>
    </div>
  );
};

export default TheBackgroundHeader;
