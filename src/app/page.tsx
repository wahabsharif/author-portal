import LogoutButton from "@/components/SideBar/LogoutButton";
import AdminLayout from "@/layouts/AdminLayout";

export default function HomePage() {
  return (
    <AdminLayout>
      <div>
        <h1>Admin Dashboard</h1>
      </div>
      <LogoutButton />
    </AdminLayout>
  );
}
