import React from "react";
import TheLayout from "../../container/TheLayout";
import ThePopular from "./Popular/ThePopular";
import TheSeeHouse from "./SeeHouse/TheSeeHouse";
import TheReview from "./Review/TheReview";
import TheSeeTips from "./seetips/TheSeeTips";
import TheSubscribe from "./subscribe/TheSubscribe";

const HomePage = () => {
  return (
    <div>
      <TheLayout />
      <ThePopular />
      <TheSeeHouse />
      <TheReview />
      <TheSeeTips />
      <TheSubscribe />
    </div>
  );
};

export default HomePage;
