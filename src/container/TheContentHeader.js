import React from "react";
import SearchBar from "../components/SearchBar";
import travel from "../assets/icon/traveloka_logo 2.png";
import ticket from "../assets/icon/traveloka_logo 5.png";
import air from "../assets/icon/traveloka_logo 3.png";
import trip from "../assets/icon/traveloka_logo 4.png";
const TheContentHeader = () => {
  return (
    <div className="home-page-content">
      <div className="home-page-content-title">
        Find The Place To
        <br /> Live
        <span className="home-page-content-title-white"> Your Dreams</span>
        <br /> Easily Here
        <div className="home-page-content-sub-title">
          Everything you need about finding your place to live will be
          <br /> here, where it will be easier for you
        </div>
      </div>
      <SearchBar />
      <div className="home-page-content-our-partnership">
        <span>Our Partnership</span>
        <div className="home-page-content-list-icon">
          <img src={travel} alt="travel" />
          <img src={ticket} alt="ticket" />
          <img src={air} alt="air" />
          <img src={trip} alt="trip" />
        </div>
      </div>
    </div>
  );
};

export default TheContentHeader;
