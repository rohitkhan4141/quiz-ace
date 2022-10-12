import React from "react";
import { Outlet } from "react-router-dom";
import Test from "../components/Test/Test";
import "./Root.css";

const Root = () => {
  return (
    <div className='layout'>
      {/* <Navbar /> */}
      <Test />
      <Outlet />
    </div>
  );
};

export default Root;
