import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full z-40 fixed bg-black border-b border-gray-400  px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-100">Instagram</h1>

        {/* Create Post Button */}
        <Link to="/home/create-post"
          type="button"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} strokeWidth={2.5} />
          <span>Create Post</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
