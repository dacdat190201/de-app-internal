import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../components/layout/Main";
const TheLayoutAdmin = () => {
  return (
    <div className="admin-custom">
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default TheLayoutAdmin;
