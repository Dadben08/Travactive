// Components/TravDashboardLayout.jsx
import { Outlet } from "react-router-dom";

const TravDashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Traveller Sidebar/Header here */}
      <Outlet />
    </div>
  );
};

export default TravDashboardLayout;
