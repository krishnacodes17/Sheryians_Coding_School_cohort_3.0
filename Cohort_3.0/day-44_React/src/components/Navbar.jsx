// import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide text-black"
        >
          Shop<span className="text-blue-600">Ease</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 font-medium text-gray-700">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600 transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600 transition"
          >
            Login
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingCart size={25} />

            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              2
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;