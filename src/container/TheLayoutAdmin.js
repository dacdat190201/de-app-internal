import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/layout/Main";
const TheLayoutAdmin = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default TheLayoutAdmin;
