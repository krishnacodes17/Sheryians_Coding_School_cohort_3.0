import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, LogOut, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../utils/LocalStorageData/localStorageUSer";
import { useDispatch } from "react-redux";
import { removeUser } from "../feature/auth/authSlice";

function Navbar() {
  let [current , setCurrent] =useState(null)
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const removeCurrentUser = ()=>{
    dispatch(removeUser())
    localStorage.removeItem("currentUser");
    navigate("/")
   
}

  useEffect(()=>{
    let current = getCurrentUser()
    setCurrent(current.name)
  },[])

  return (
    <nav className="bg-[#0d0d0d]  border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap
              size={18}
              className="text-black fill-black"
            />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </Link>

        {/* Menu */}

        <div className="flex gap-10 text-gray-400 font-medium">

          <Link
            to="/"
            className="text-lime-400"
          >
            Home
          </Link>

          <Link
            to="products"
            className="hover:text-white transition"
          >
            Shop
          </Link>

          <Link
            to="about"
            className="hover:text-white transition"
          >
            About
          </Link>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* User */}

          <div className="flex items-center gap-3 border border-gray-700 rounded-xl px-4 py-2">

            <div className="w-8 h-8 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
              J
            </div>

            <span className="text-white">
              {current}
            </span>

          </div>

          {/* Cart */}

          <button className="w-12 h-12 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition">
            <ShoppingCart className="text-white" />
          </button>

          {/* Logout */}

          <button onClick={ removeCurrentUser} className="cursor-pointer w-12 h-12 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition">
            <LogOut  className="text-white" />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;