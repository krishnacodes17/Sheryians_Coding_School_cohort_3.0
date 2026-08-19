import React from 'react'
import { Truck, ShieldCheck, Headphones, RefreshCcw } from "lucide-react";
import { useNavigate } from"react-router-dom"

function OrderPage() {
  let navigate = useNavigate()
  const features = [
    {
      icon: <Truck size={34} />,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly and safely to your doorstep.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Secure Payment",
      description: "100% secure payment with trusted payment gateways.",
    },
    {
      icon: <RefreshCcw size={34} />,
      title: "Easy Returns",
      description: "7-day hassle-free return and replacement policy.",
    },
    {
      icon: <Headphones size={34} />,
      title: "24/7 Support",
      description: "Our support team is always available to help you.",
    },
  ];

  return (
    <div>
      <section className="bg-gray-50">

      {/* Hero */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="font-semibold text-blue-600">
              ABOUT US
            </p>

            <h1 className="mt-4 text-5xl font-bold text-gray-900">
              Shopping Made
              <span className="text-blue-600"> Simple & Smart.</span>
            </h1>

            <p className="mt-6 leading-8 text-gray-600">
              Welcome to ShopKart, your one-stop destination for quality
              products at affordable prices. Our mission is to provide a smooth,
              secure, and enjoyable shopping experience for everyone.
            </p>

            <button onClick={()=>navigate("/main/shop")} className="mt-8 rounded-xl bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-700">
              Explore Products
            </button>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
              alt="Shopping"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>

      </div>

      {/* Features */}

      <div className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-10 text-center text-4xl font-bold text-gray-900">
          Why Choose Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-5 text-blue-600">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Stats */}

      <div className="bg-blue-600 py-16 text-white">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="mt-2">Premium Products</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">99%</h2>
            <p className="mt-2">Customer Satisfaction</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="mt-2">Customer Support</p>
          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default OrderPage




