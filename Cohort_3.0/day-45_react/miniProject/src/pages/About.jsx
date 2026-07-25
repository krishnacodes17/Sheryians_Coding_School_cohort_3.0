import React from "react";
import { ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";

function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          About <span className="text-indigo-600">FakeStore</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          FakeStore is a modern e-commerce platform built with React and
          Tailwind CSS. It provides a smooth shopping experience with
          categorized products, detailed product pages, shopping cart
          functionality, and responsive design.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        <div className="p-6 rounded-2xl shadow-md border text-center hover:shadow-xl transition">
          <ShoppingBag className="mx-auto text-indigo-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">
            Quality Products
          </h3>
          <p className="mt-2 text-gray-600">
            Explore a wide range of premium products across multiple categories.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md border text-center hover:shadow-xl transition">
          <Truck className="mx-auto text-green-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">
            Fast Delivery
          </h3>
          <p className="mt-2 text-gray-600">
            Enjoy quick and reliable shipping to your doorstep.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md border text-center hover:shadow-xl transition">
          <ShieldCheck className="mx-auto text-blue-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">
            Secure Payments
          </h3>
          <p className="mt-2 text-gray-600">
            Safe and secure payment options for a worry-free shopping experience.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md border text-center hover:shadow-xl transition">
          <Headphones className="mx-auto text-red-600" size={40} />
          <h3 className="mt-4 text-xl font-semibold">
            24/7 Support
          </h3>
          <p className="mt-2 text-gray-600">
            Our support team is always ready to help whenever you need us.
          </p>
        </div>

      </div>

      {/* Mission */}
      <div className="mt-20 bg-indigo-50 rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Mission
        </h2>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
          Our mission is to create a simple, fast, and enjoyable online shopping
          experience while helping developers learn modern React concepts like
          Context API, Routing, State Management, API Integration, and reusable
          component architecture.
        </p>
      </div>

    </section>
  );
}

export default About;