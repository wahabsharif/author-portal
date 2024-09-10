"use client";

import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      <FaSignOutAlt />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
