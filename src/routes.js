import React from "react";
import TheLayoutSecond from "./container/TheLayoutSecond";

const ThePublicLayout = React.lazy(
  () => import("./container/ThePublicLayout"),
  "ThePublicLayout"
);
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"), "AboutUs");
const Products = React.lazy(
  () => import("./pages/products/Products"),
  "Products"
);

//ADMIN
const Home = React.lazy(() => import("./pagesadmin/Home"), "Home");
const Tables = React.lazy(() => import("./pagesadmin/Tables"), "HTablesome");
const Billing = React.lazy(() => import("./pagesadmin/Billing"), "Billing");
const Rtl = React.lazy(() => import("./pagesadmin/Rtl"), "Rtl");
const Profile = React.lazy(() => import("./pagesadmin/Profile"), "Profile");

export const AppInternal = [
  { path: "/", exact: true, name: "Internal", component: ThePublicLayout },
  { path: "/home", name: "Trang chủ", component: TheLayoutSecond },
  { path: "/about-us", name: "About ne~", component: AboutUs },
  { path: "/property", name: "property", component: Products },
];
export const AdminInternal = [
  { path: "/admin", exact: true, name: "Home", component: Home },
  { path: "/dashboard", exact: true, name: "Home", component: Home },
  { path: "/tables", exact: true, name: "Tables", component: Tables },
  { path: "/billing", exact: true, name: "Billing", component: Billing },
  { path: "/rtl", exact: true, name: "Rtl", component: Rtl },
  { path: "/profile", exact: true, name: "Profile", component: Profile },
];
