import React from 'react'

function Navbar({setToggle}) {
  return (
    <div>
      <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-indigo-600 flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="font-semibold text-gray-900">MyLogo</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <a
            onClick={()=> setToggle(true)}
              className="px-3 py-2 cursor-pointer rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Home
            </a>

            <a
            onClick={()=> setToggle(false)}
              className="px-3 py-2 mr-5 cursore-pointer rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Cart
            </a>

            <a
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Login
            </a>
          </div>
          
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
