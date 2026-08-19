import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Eye, EyeOff } from "lucide-react";
import { useAuthHook } from "../../hooks/useAuthHook";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  let { navigate, register, registerForm, handleSubmit, watch, errors } = useAuthHook();
  const password = watch("password");

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
              Join Our
              <br />
              Shopping Family.
            </h2>

            <p className="mt-6 text-gray-600 leading-7">
              Create your account and enjoy premium products, exclusive offers,
              fast delivery and secure checkout.
            </p>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-black"></div>
                <span>Exclusive Member Discounts</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-black"></div>
                <span>Track Orders Easily</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-black"></div>
                <span>Wishlist & Personalized Shopping</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:hidden">
                <div className="rounded-xl bg-black p-3">
                  <ShoppingBag className="text-white" />
                </div>
              </div>

              <h2 className="mt-6 text-4xl font-bold">Create Account</h2>

              <p className="mt-2 text-gray-500">
                Start your shopping journey today.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Only letters are allowed",
                    },
                  })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>

                <input
                  {...register("email", {
                    required: "email isrequired",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "please enter a vaild email address",
                    },
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

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
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-black"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-0/2 rounded-full bg-yellow-500"></div>
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Use at least 8 characters with numbers and symbols.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    {...register("confirmPassword", {
                      required: "confirmPassword is required",
                      validate: (value) => {
                       return value === password || "Password do not match ";
                      },
                    })}
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-black"
                  />

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>

                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <button 
              onClick={handleSubmit(registerForm)}
              className="w-full rounded-xl bg-black py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900">
                Create Account
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
              Already have an account?{" "}
              <Link to="/" className="font-semibold text-black">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
