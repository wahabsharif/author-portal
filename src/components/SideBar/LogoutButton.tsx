"use client";

import { useAuth } from "@/contexts/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout}>
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
