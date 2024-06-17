import React from "react";
import TheHeader from "../components/TheHeader";
import TheBackgroundHeader from "./TheBackgroundHeader";
import TheContentHeader from "./TheContentHeader";
import ThePopular from "../components/ThePopular";
import TheFooter from "../components/TheFooter";

const TheLayout = () => {
  return (
    <div className="c-wapper-home">
      <TheBackgroundHeader />
      <div className="c-warrap-size">
        <TheHeader />
        <TheContentHeader />
        <ThePopular />
      </div>
      <TheFooter />
    </div>
  );
};

export default TheLayout;
