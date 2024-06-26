import React from "react";
import TheHeader from "../components/TheHeader";
import HomePage from "../pages/homepage/HomePage";
import TheFooter from "../components/TheFooter";

const ThePublicLayout = () => {
  return (
    <div className="c-wrapper">
      <TheHeader />
      <HomePage />
      <TheFooter />
    </div>
  );
};

export default ThePublicLayout;
