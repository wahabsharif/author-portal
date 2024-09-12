"use client";

import BookImage from "@/assets/images/books-image.jpg";
import BlurFade from "@/components/magicui/blur-fade";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AuthForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}login`,
        {
          email,
          password,
        }
      );

      // Ensure a valid token and user details are returned
      if (response.data?.token && response.data?.author) {
        const { token, author } = response.data;

        // Use the login method from AuthProvider to store token and first name
        login(token, author.first_name);

        // Redirect or perform other actions on successful login
        window.location.href = "/"; // Adjust to your needs
      } else {
        setErrorMessage("Invalid login response");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setErrorMessage("Invalid email or password");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-center bg-cover flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={BookImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <BlurFade
        delay={0.25}
        inView
        className="relative z-10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden mx-auto w-[400px] p-8"
      >
        <h2 className="text-3xl tracking-widest font-semibold text-gray-900 text-center">
          Author
        </h2>
        <p className="text-xl text-slate-900 font-bold text-center">
          Welcome back!
        </p>
        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block text-gray-900 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none"
              type="email"
              placeholder="author@author.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-900 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                className="bg-gray-200 text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-4 block w-full appearance-none"
                type={passwordVisible ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
            <button
              type="submit"
              className="bg-gray-900 text-white tracking-widest py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
      </BlurFade>
    </section>
  );
}

export default AuthForm;
