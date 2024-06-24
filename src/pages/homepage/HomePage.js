import React from "react";
import TheLayout from "../../container/TheLayout";
import ThePopular from "./Popular/ThePopular";
import TheSeeHouse from "./SeeHouse/TheSeeHouse";
import TheReview from "./Review/TheReview";
const HomePage = () => {
  return (
    <div>
      <TheLayout />
      <ThePopular />
      <TheSeeHouse />
      <TheReview />
    </div>
  );
};

export default HomePage;
