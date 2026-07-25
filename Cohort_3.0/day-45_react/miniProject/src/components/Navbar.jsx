import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";


export const ROUTES = {
  HOME: "/main",
  SHOP: "/main/shop",
  ABOUT: "/main/about",
  LOGIN: "/",
  SIGNUP: "/signup",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
            ShopKart
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li>
              <NavLink
              end
                to={ROUTES.HOME}
                className={({isActive})=> isActive  ? "font-bold  duration-500 underline text-blue-500" :  "hover:text-indigo-600 transition duration-300" }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.SHOP}
                className={({isActive})=> isActive  ? "font-bold underline duration-300 text-blue-500" :  "hover:text-indigo-600 transition duration-300"}

              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.ABOUT}
                className={({isActive})=> isActive  ? "font-bold underline text-blue-500" :  "hover:text-indigo-600 transition duration-300"}

              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-5 py-5 font-medium text-gray-700 border-t">
            <li>
              <NavLink to={ROUTES.HOME} className="hover:text-indigo-600">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.SHOP} className="hover:text-indigo-600">
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to={ROUTES.ABOUT} className="hover:text-indigo-600">
                About
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;