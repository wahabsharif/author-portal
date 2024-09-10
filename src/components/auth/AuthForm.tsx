"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "@/contexts/AuthContext";
import md5 from "md5";
import users from "@/data/users";

function AuthForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const hashedPassword = md5(password);

    const user = users.find(
      (user) => user.email === email && user.password === hashedPassword
    );

    if (user) {
      login("dummyToken");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <section
      className="w-full min-h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/auth-library-image.jpg')",
      }}
    >
      <div className="bg-white bg-white/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Author
        </h2>
        <p className="text-xl text-gray-800 text-center">Welcome back!</p>

        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block text-gray-900 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
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
                className="bg-gray-200 text-gray-900 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type={passwordVisible ? "text" : "password"}
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
              className="bg-gray-900 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
