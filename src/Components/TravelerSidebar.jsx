import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import Logo from "../assets/TravactiveLogo.png";

// Icons
import OverviewIcon from "../assets/OverviewIcon1.png";
import ExploreIcon from "../assets/ExploreIcon.png";
import SavedIcon from "../assets/SavedItemIcon.png";
import AskTravactIcon from "../assets/AskTravIcon.png";
import SettingIcon from "../assets/SettingsIcon.png";

// Active Icons
import OverviewIconActive from "../assets/OverviewIconActive.png";
import ExploreIconActive from "../assets/ExploreIconActive.png";
import SavedIconActive from "../assets/SavedItemIconActive.png";
import AskTravactIconActive from "../assets/AskTravIconActive.png";
import SettingIconActive from "../assets/SettingsIconActive.png";

const TravelerSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`
          fixed md:relative z-50
          flex flex-col bg-white
          transition-all duration-300 ease-in-out
          ${open ? "translate-x-0 w-[250px]" : "-translate-x-full"}
          md:translate-x-0 md:w-[250px] lg:w-[250px]
        `}
        style={{
          minHeight: "150vh",
          boxShadow: "0px 5px 12px 0px #1212120A",
          borderRight: "0.16px solid #DADADA",
        }}
      >
        {/* 🔹 Close Button (mobile) */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* 🔹 Logo */}
        <div className="p-6 flex items-center justify-left">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Travactive Logo"
              className={`object-contain transition-all duration-300 ${
                open ? "w-[127px] h-[32px]" : "w-[100px] h-[32px]"
              }`}
            />
          </NavLink>
        </div>

        {/* 🔹 Navigation */}
        <nav className="px-4 space-y-2 flex-1 pt-4 md:pt-9">
          <NavItem
            to="/traveler-dashboard/Travoverview"
            icon={OverviewIcon}
            activeIcon={OverviewIconActive}
            label="Overview"
            open={open}
            onClick={() => setOpen(false)}
          />
          <NavItem
            to="/traveler-dashboard/TravExplore"
            icon={ExploreIcon}
            activeIcon={ExploreIconActive}
            label="Explore"
            open={open}
            onClick={() => setOpen(false)}
          />
          <NavItem
            to="/traveler-dashboard/TopPicks"
            icon={SavedIcon}
            activeIcon={SavedIconActive}
            label="Top Picks"
            open={open}
            onClick={() => setOpen(false)}
          />
          <NavItem
            to="/traveler-dashboard/TravAsk"
            icon={AskTravactIcon}
            activeIcon={AskTravactIconActive}
            label="Ask Travact"
            open={open}
            onClick={() => setOpen(false)}
          />
          <NavItem
            to="/traveler-dashboard/TravSettings"
            icon={SettingIcon}
            activeIcon={SettingIconActive}
            label="Settings"
            open={open}
            onClick={() => setOpen(false)}
          />
        </nav>

        {/* 🔹 Logout */}
        <div className="mt-auto w-full px-4 pb-6">
          <NavLink
            to="/get-started"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-xl transition-all duration-200"
          >
            <LogOut size={18} />
            {open && <span>Logout</span>}
          </NavLink>
        </div>
      </aside>
    </>
  );
};

// 🔹 NavItem
const NavItem = ({ to, icon, activeIcon, label, open, onClick }) => (
  <NavLink to={to} className={navClass} onClick={onClick}>
    {({ isActive }) => (
      <>
        <img
          src={isActive ? activeIcon : icon}
          alt={label}
          className="w-[20px] h-[20px]"
        />
        <span
          className={`font-semibold text-[16px] transition-all duration-200 ${
            open ? "inline" : "hidden md:hidden lg:inline"
          }`}
        >
          {label}
        </span>
      </>
    )}
  </NavLink>
);

// 🔹 Nav styles
const navClass = ({ isActive }) => `
  flex items-center gap-3
  w-full h-[44px]
  rounded-[12px]
  px-[24px] md:px-[12px] lg:px-[24px]
  justify-start md:justify-center lg:justify-start
  text-sm font-medium
  shadow-[0px_8px_24px_0px_#8888881F]
  transition-all duration-200
  ${isActive ? "bg-[#023436] text-white border-l-2 border-[#023436]" : "text-gray-600 hover:bg-gray-100"}
`;

export default TravelerSidebar;
