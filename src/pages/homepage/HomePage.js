import React from "react";
import TheLayout from "../../container/TheLayout";
import ThePopular from "./Popular/ThePopular";
import TheSeeHouse from "./SeeHouse/TheSeeHouse";
const HomePage = () => {
  return (
    <div>
      <TheLayout />
      <ThePopular />
      <TheSeeHouse />
    </div>
  );
};

export default HomePage;
