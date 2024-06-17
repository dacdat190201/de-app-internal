import React from "react";
import footer1 from "../assets/images/backgrounds/bg-background-1.png";
import footer2 from "../assets/images/backgrounds/bg-background-2.png";
const TheBackgroundFooter = () => {
  return (
    <div className="c-wapper-home-footer-background">
      <img src={footer1} alt="footer1" className="c-wapper-home-footer1" />
      <img src={footer2} alt="footer2" className="c-wapper-home-footer2" />
    </div>
  );
};

export default TheBackgroundFooter;
