import React from "react";
import TheHeader from "../components/TheHeader";
import TheContentHeader from "../container/TheContentHeader";
import TheFooter from "../components/TheFooter";
import HomePage from "../pages/homepage/HomePage";

const TheLayout = () => {
  return (
    <div className="c-wapper-home">
      <div className="c-wrapper-home-header-background ">
        <div className="container">
          <TheHeader />
          <TheContentHeader />
        </div>
      </div>
      <HomePage />
      <TheFooter />
    </div>
  );
};

export default TheLayout;
