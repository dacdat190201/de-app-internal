import React from "react";
import { Outlet } from "react-router-dom";
import TheFooter from "../components/TheFooter";

const TheLayoutSecond = () => {
  return (
    <>
      <Outlet />
      <TheFooter />
    </>
  );
};

export default TheLayoutSecond;
