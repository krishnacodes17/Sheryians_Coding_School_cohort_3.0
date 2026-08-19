import { useState } from "react";
import {
  NavLink,
  useNavigate,
} from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  LogOut,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const navStyle = ({ isActive }) =>
    `transition-all duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <NavLink
          to="/main"
          className="text-3xl font-bold"
        >
          <span className="text-blue-600">Shop</span>
          <span className="text-black">Kart</span>
        </NavLink>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/main"
            className={navStyle}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className={navStyle}
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={navStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/main/cart"
            className={`${navStyle} flex items-center gap-2`}
          >
            <ShoppingCart size={18} />
            Cart
          </NavLink>

        </div>

        {/* Logout */}

        <button
          onClick={logout}
          className="hidden md:flex items-center gap-2 rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="space-y-4 border-t bg-white px-5 py-5 shadow-md md:hidden">

          <NavLink
            to="/main"
            onClick={() => setOpen(false)}
            className={navStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            onClick={() => setOpen(false)}
            className={navStyle}
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            onClick={() => setOpen(false)}
            className={navStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/main/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ShoppingCart size={18} />
            Cart
          </NavLink>

          <button
            onClick={logout}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-3 text-white"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;