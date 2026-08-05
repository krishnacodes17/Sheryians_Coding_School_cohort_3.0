import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShoppingBag } from "lucide-react";
import { useAuthHook } from "../../hooks/useAuthHook";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  let { navigate, register, loginForm,handleSubmit, errors } = useAuthHook();

  return (
    <section className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex items-center justify-center bg-gray-50 px-16">
          <div className="max-w-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-black p-3">
                <ShoppingBag className="text-white" size={28} />
              </div>

              <h1 className="text-3xl font-bold">Little Luxe</h1>
            </div>

            <h2 className="mt-12 text-5xl font-bold leading-tight">
              Shop Smarter,
              <br />
              Live Better.
            </h2>

            <p className="mt-6 text-gray-600 leading-7">
              Discover premium products with a seamless shopping experience,
              secure payments and lightning-fast delivery.
            </p>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-black"></div>
                <span className="text-gray-700">Premium Quality Products</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-black"></div>
                <span className="text-gray-700">Fast Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-black"></div>
                <span className="text-gray-700">Secure Payments</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center lg:text-left">
              <div className="flex justify-center lg:hidden">
                <div className="rounded-xl bg-black p-3">
                  <ShoppingBag className="text-white" />
                </div>
              </div>

              <h2 className="mt-6 text-4xl font-bold">Welcome Back 👋</h2>

              <p className="mt-2 text-gray-500">Login to continue shopping.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Username</label>

                <input
                  type="text"
                  {...register("username", {
                    required: "username is required",
                    minLength: {
                      value: 3,
                      message: "please enter atleast 3 digit ",
                    },
                  })}
                  placeholder="Enter your username"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-black"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <label className="text-sm font-medium">Password</label>
                </div>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: "password is required",
                      minLength: {
                        value: 6,
                        message: "password must be at least 6 digit ",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition-all duration-300 focus:border-black"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <button
              onClick={handleSubmit(loginForm)}
               className="w-full rounded-xl bg-black py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900">
                Login
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">
                    OR
                  </span>
                </div>
              </div>
            </form>

            <p className="mt-5 text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-black">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
