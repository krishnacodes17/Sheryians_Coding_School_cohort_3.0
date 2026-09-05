import React from "react";
import { useForm } from "react-hook-form";
import { useAuthHook } from "../hooks/authHooks";
import {Link} from "react-router-dom"

function LoginPage() {


  let {loginForm,register,handleSubmit,errors} = useAuthHook()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-sm">

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-md px-8 py-10">

          {/* Logo */}
          <h1 className="text-4xl font-bold text-center mb-8 tracking-tight">
            Instagram
          </h1>

          <form onSubmit={handleSubmit(loginForm)} className="space-y-3">

            {/* Username */}
            <div>
              <input
                type="text"
                placeholder="Username"
                className={`w-full px-3 py-2.5 text-sm bg-gray-50 border rounded-md outline-none focus:border-gray-400 ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Username cannot exceed 30 characters",
                  },
                })}
              />

              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email/username"
                className={`w-full px-3 py-2.5 text-sm bg-gray-50 border rounded-md outline-none focus:border-gray-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email/username is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email"
                  }
                })}
              />

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div> 

            {/* Password */}
            <div>
              <input
                type="text"
                placeholder="Password"
                className={`w-full px-3 py-2.5 text-sm bg-gray-50 border rounded-md outline-none focus:border-gray-400 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 3,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md text-sm transition"
            >
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-300 flex-1"></div>

            <span className="text-xs font-semibold text-gray-500">
              OR
            </span>

            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Forgot Password */}
          <button className="block mx-auto text-sm text-blue-900 hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Register Card */}
        <div className="bg-white border border-gray-200 rounded-md mt-3 py-5 text-center">

          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            
            <Link to={"/register"} className="text-blue-500 font-semibold cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default LoginPage;