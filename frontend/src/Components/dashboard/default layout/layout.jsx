import AdminDashboard from "../../layouts/sidebar.jsx";
import Header from "../../layouts/header.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <AdminDashboard 
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Right side */}
      <div className="flex flex-col flex-1 h-full min-w-0">

        <div className="shrink-0">
          <Header onMenuClick={() => setSidebarOpen(true)} />
        </div>

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
