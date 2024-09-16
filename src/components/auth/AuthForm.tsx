"use client";

import BookImage from "@/assets/images/books-image.jpg";
import BlurFade from "@/components/magicui/blur-fade";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { loginUser } from "@/redux/store/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";

function AuthForm() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { loading } = useSelector((state: RootState) => state.auth);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
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
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </BlurFade>
    </section>
  );
}

export default AuthForm;
