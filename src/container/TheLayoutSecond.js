import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import { AppInternal } from "../routes";

const TheLayoutSecond = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const route = AppInternal.find((route) => route.path === currentPath);
  return (
    <>
      <div className="c-layout-wrapper ">
        <TheHeader />
        <div className="bread-title container">
          <h4>{route.name}</h4>
          <div className="bread-title-sub">
            <h4>
              Home / <span>{route.name}</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
      <TheFooter />
    </>
  );
};

export default TheLayoutSecond;
