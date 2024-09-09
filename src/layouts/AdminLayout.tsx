import React, { ReactNode } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import "@/styles/globals.css";
// import SideBar from "@/components/SideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        {/* <SideBar /> */}
        <main className="min-h-screen w-full p-4 sm:ml-44">{children}</main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
