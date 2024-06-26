import React from "react";
import ThePopular from "./Popular/ThePopular";
import TheSeeHouse from "./SeeHouse/TheSeeHouse";
import TheReview from "./Review/TheReview";
import TheSeeTips from "./seetips/TheSeeTips";
import TheSubscribe from "./subscribe/TheSubscribe";
import TheContentHeader from "../../container/TheContentHeader";

const HomePage = () => {
  return (
    <div>
      <TheContentHeader />
      <ThePopular />
      <TheSeeHouse />
      <TheReview />
      <TheSeeTips />
      <TheSubscribe />
    </div>
  );
};

export default HomePage;
