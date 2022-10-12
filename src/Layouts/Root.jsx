import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../components/Navbar/Navbar";

import "./Root.css";

const Root = () => {
  return (
    <div className='layout'>
      {/* <Navbar /> */}
      <NavbarComp />
      <Outlet />
    </div>
  );
};

export default Root;
