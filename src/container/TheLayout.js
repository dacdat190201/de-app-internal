import React from "react";
import TheHeader from "../components/TheHeader";
import TheBackgroundHeader from "./TheBackgroundHeader";
import TheContentHeader from "./TheContentHeader";

const TheLayout = () => {
  return (
    <div className="c-wapper-home-header">
      <TheBackgroundHeader />
      <div className="c-warrap-size">
        <TheHeader />
        <TheContentHeader />
      </div>
    </div>
  );
};

export default TheLayout;
