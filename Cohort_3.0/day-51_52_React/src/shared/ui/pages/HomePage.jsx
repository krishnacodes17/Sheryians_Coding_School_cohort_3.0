import React from 'react'
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

      <div className="grid items-center gap-10 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="mb-3 text-lg font-medium text-blue-600">
            Welcome to ShopKart
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Discover Amazing Products at
            <span className="text-blue-600"> Best Prices</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Shop from thousands of quality products with fast delivery,
            secure payment, and the best shopping experience.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              to="/main/shop"
              className="rounded-xl bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              to="/main/about"
              className="rounded-xl border border-blue-600 px-7 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
            alt="Shopping"
            className="w-full max-w-lg rounded-3xl shadow-xl"
          />

        </div>

      </div>

    </section>
    </div>
  )
}

export default HomePage

