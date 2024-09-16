import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <SideBar />
        <main className="min-h-screen w-full p-4">{children}</main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
