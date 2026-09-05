import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuthHook } from "../hooks/authHooks";

function RegisterPage() {

  const {registerForm, register, handleSubmit, watch , errors} = useAuthHook();

  const password = watch("password");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Register Card */}
        <div className="bg-white border border-gray-200 rounded-md px-8 py-8">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-center tracking-tight mb-2">
            Instagram
          </h1>

          <p className="text-center text-gray-500 text-sm font-semibold mb-6">
            Sign up to see photos and videos from your friends.
          </p>

          <form onSubmit={handleSubmit(registerForm)} className="space-y-3">
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
                placeholder="Email"
                className={`w-full px-3 py-2.5 text-sm bg-gray-50 border rounded-md outline-none focus:border-gray-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
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
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="text"
                placeholder="Confirm Password"
                className={`w-full px-3 py-2.5 text-sm bg-gray-50 border rounded-md outline-none focus:border-gray-400 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Bio */}
            <div>
              <input
                type="text"
                placeholder="Bio"
                className={`w-full px-3 py-2.5 text-sm bg-gray-50 border rounded-md outline-none focus:border-gray-400 ${
                  errors.bio ? "border-red-500" : "border-gray-300"
                }`}
                {...register("bio", {
                  required: "bio is required",
                  minLength: {
                    value: 3,
                    message: "bio must be at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Username cannot exceed 50 characters",
                  },
                })}
              />

              {errors.bio && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.bio.message}
                </p>
              )}
            </div>



            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md text-sm transition"
            >
              Sign up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-300 flex-1"></div>

            <span className="text-xs font-semibold text-gray-500">OR</span>

            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <p className="text-xs text-gray-500 text-center leading-5">
            By signing up, you agree to our Terms, Privacy Policy and Cookies
            Policy.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-md mt-3 py-5 text-center">
          <p className="text-sm text-gray-700">
            Have an account?{" "}
            <Link
              to="/"
              className="text-blue-500 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
