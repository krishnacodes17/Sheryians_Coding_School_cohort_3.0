import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div >
      <div className=" sticky top-0 z-50">
      <Navbar />
      </div>
      <div className=" p-4 px-8 ">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
