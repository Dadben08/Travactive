import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { User, Search, Bell } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F6F6] ">
      {/* Sidebar first so it stretches from top */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-end h-20 bg-white border-b border-gray-200 shadow-md px-6 ">
  {/* Right Section: Search + Profile + Bell */}
  <div className="flex items-center gap-14">
    {/* Search box */}
    <div className="relative flex items-center w-[321px] h-[29px] rounded-full border-[0.2px] border-[#400097] px-3 py-1.5">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full bg-transparent text-sm placeholder-gray-500 outline-none pr-8"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#005A58] rounded-full flex items-center justify-center">
        <Search size={12} className="text-white" />
      </div>
    </div>

    {/* Profile */}
    <div className="flex items-center gap-2 h-full">
      <User size={24} className="text-gray-600" />
      <span className="font-medium text-gray-700">John Doe</span>
    </div>

    {/* Notification Bell */}
    <Bell size={24} className="text-gray-600 cursor-pointer" />
  </div>
</div>


        {/* Main Outlet */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
