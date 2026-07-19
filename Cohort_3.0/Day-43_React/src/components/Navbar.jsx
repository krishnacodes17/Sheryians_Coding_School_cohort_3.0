import React from "react";
import { Link, Links, NavLink } from "react-router";

function Navbar({ setToggle }) {
  return (
    <div>
      <nav className="flex justify-between p-4 items-center bg-blue-100 ">
        <h1>LOgo</h1>
        <div className="flex gap-6 ">
          {/* <p onClick={()=> setToggle("home")}>Home</p>
            <p onClick={()=> setToggle("about")}>About</p>
            <p onClick={()=> setToggle("Contact")}>Contect</p> */}

          <NavLink to={"/"}>Home </NavLink>
          <NavLink to={"/about"}>About </NavLink>
          <NavLink to={"/Contact"}>Contect</NavLink>
        </div>
        <button className="border px-4 py-2 bg-blue-600 text-white font-medium cursor-pointer">
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
