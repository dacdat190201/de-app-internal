import React from "react";

const ThePublicLayout = React.lazy(
  () => import("./container/ThePublicLayout"),
  "ThePublicLayout"
);
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"), "AboutUs");
const Products = React.lazy(
  () => import("./pages/products/Products"),
  "Products"
);

export const AppInternal = [
  { path: "/", exact: true, name: "Internal" },
  { path: "/home", name: "Trang chủ", component: ThePublicLayout },
  { path: "/about-us", name: "About ne~", component: AboutUs },
  { path: "/property", name: "property", component: Products },
];
export const AdminInternal = [{ path: "/admin", exact: true, name: "Admin" }];
