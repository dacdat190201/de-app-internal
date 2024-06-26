import React from "react";

const ThePublicLayout = React.lazy(
  () => import("./container/ThePublicLayout"),
  "ThePublicLayout"
);
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"), "AboutUs");

export const AppIntertal = [
  { path: "/", exact: true, name: "Internal" },
  { path: "/home", name: "Trang chủ", component: ThePublicLayout },
  { path: "/about-us", name: "Trang chủ", component: AboutUs },
];
