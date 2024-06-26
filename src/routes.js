import React from "react";

const ThePublicLayout = React.lazy(
  () => import("./container/ThePublicLayout"),
  "ThePublicLayout"
);

export const AppIntertal = [
  { path: "/", exact: true, name: "Internal" },
  { path: "/homae", name: "Trang chủ", component: ThePublicLayout },
];
