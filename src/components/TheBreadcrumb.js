import React from "react";

const TheBreadcrumb = ({ title }) => {
  return (
    <div className="breadcrum-bar">
      <svg
        width="32"
        height="1"
        viewBox="0 0 32 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="1" fill="#F59E0B" />
      </svg>
      <div className="breadcrum-bar-title">{title}</div>
    </div>
  );
};

export default TheBreadcrumb;
