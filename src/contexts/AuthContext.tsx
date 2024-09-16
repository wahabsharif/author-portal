// src/contexts/AuthContext.tsx

"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  firstName: string | null;
  login: (token: string, firstName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const firstName = sessionStorage.getItem("first_name");

    if (token) {
      setIsAuthenticated(true);
      setFirstName(firstName);
    } else {
      setIsAuthenticated(false);
      setFirstName(null);
    }

    setLoading(false);
  }, []);

  const login = (token: string, firstName: string) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("first_name", firstName);
    setIsAuthenticated(true);
    setFirstName(firstName);
    router.push("/");
  };

  const logout = async () => {
    try {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("first_name");
      setIsAuthenticated(false);
      setFirstName(null);
      router.push("/auth");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, firstName, login, logout }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
