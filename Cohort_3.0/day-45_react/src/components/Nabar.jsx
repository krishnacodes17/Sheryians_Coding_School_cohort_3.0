import { Link } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-[#0d0d0d] border-b border-gray-800">
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
            to="/about"
            className="hover:text-white transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-white transition"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;