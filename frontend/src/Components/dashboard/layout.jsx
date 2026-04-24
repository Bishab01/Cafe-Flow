import AdminDashboard from "./sidebar.jsx";
import Header from "../layouts/header.jsx";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <AdminDashboard />

      {/* Right side */}
      <div className="flex flex-col flex-1">

        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
