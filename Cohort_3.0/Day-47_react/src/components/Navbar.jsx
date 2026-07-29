import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="flex  items-center justify-between m-2">
      <h1>Logo</h1>
      <div className="p-4 flex gap-3 ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/user"}>Users</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <button className="border px-4 py-1 rounded">Logout</button>
    </div>
  );
}

export default Navbar;
