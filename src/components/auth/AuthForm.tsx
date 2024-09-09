"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

function AuthForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section
      className="w-full min-h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/auth-library-image.jpg')",
      }}
    >
      {/* Form */}
      <div className="bg-white bg-white/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Author
        </h2>
        <p className="text-xl text-gray-800 text-center">Welcome back!</p>
        <div className="mt-4">
          <label className="block text-gray-900 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="bg-gray-200 text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-900 text-sm font-bold mb-2">
              Password
            </label>
            <Link href="#" className="text-xs text-gray-800">
              Forget Password?
            </Link>
          </div>
          <div className="relative">
            <input
              className="bg-gray-200 text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type={passwordVisible ? "text" : "password"}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-gray-900 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
