import React from "react";
import TheHeader from "../components/TheHeader";
import TheContentHeader from "./TheContentHeader";
import ThePopular from "../components/ThePopular";
import TheFooter from "../components/TheFooter";

const TheLayout = () => {
  return (
    <div className="c-wapper-home">
      <div className="c-wrapper-home-header-background">
        <div className="c-warrap-size container">
          <TheHeader />
          <TheContentHeader />
        </div>
      </div>

      {/* <TheFooter /> */}
    </div>
  );
};

export default TheLayout;
