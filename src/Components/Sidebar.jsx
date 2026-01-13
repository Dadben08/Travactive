import { NavLink } from "react-router-dom";
import {
  Compass,
  Bookmark,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "../assets/TravactiveLogo.png"; // import your logo image
import OverviewIcon from "../assets/OverviewIcon.png"; // import your logo image
import SavedIcon from "../assets/SavedItemIcon.png"; // import your logo image
import ExploreIcon from "../assets/ExploreIcon.png"; // import your logo image
import AskTravactIcon from "../assets/AskTravIcon.png"; // import your logo image
import SettingIcon from "../assets/SettingsIcon.png"; // import your logo image

const Sidebar = () => {
  return (
    <aside
      className="relative flex flex-col"
      style={{
        width: "250px",
        height: "1024px",
        background: "#FFFFFF",
        boxShadow: "0px 5px 12px 0px #1212120A",
        borderRight: "0.16px solid #DADADA",
        opacity: 1,
      }}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Travactive Logo"
            className="w-[127px] h-[32px] object-contain"
          />
        </NavLink>
      </div>

      {/* Links */}
      <nav className="px-4 space-y-2 flex-1 pt-9">
        <NavLink to="/dashboard/overview" className={navClass}>
          <img src={OverviewIcon} alt="" size={18} className="opacity-100"/>
          <span
            className="
    w-[70px] 
    h-[20px] 
    font-[Outfit] 
    font-semibold 
    text-[16px] 
    leading-[100%] 
    tracking-[0px]
    opacity-100
    inline-flex 
    items-center
  "
          >
            Overview
          </span>
        </NavLink>

        <NavLink to="/dashboard/explore" className={navClass}>
          <img src={ExploreIcon} alt="" size={18} />
          <span
            className="
    w-[70px] 
    h-[20px] 
    font-[Outfit] 
    font-semibold 
    text-[16px] 
    leading-[100%] 
    tracking-[0px]
    opacity-100
    inline-flex 
    items-center
  "
          >
            Explore
          </span>
        </NavLink>

        <NavLink to="/dashboard/saved" className={navClass}>
          <img src={SavedIcon} alt="" size={18} />
          <span
            className="
    w-[70px] 
    h-[20px] 
    font-[Outfit] 
    font-semibold 
    text-[16px] 
    leading-[100%] 
    tracking-[0px]
    opacity-100
    inline-flex 
    items-center
  "
          >
            Saved
          </span>
          
        </NavLink>

        <NavLink to="/dashboard/ask" className={navClass}>
          <img src={AskTravactIcon} alt="" size={18} />
          <span
            className="
    w-[90px] 
    h-[20px] 
    font-[Outfit] 
    font-semibold 
    text-[16px] 
    leading-[100%] 
    tracking-[0px]
    opacity-100
    inline-flex 
    items-center
  "
          >
            Ask Travact
          </span>
          
        </NavLink>

        <NavLink to="/dashboard/settings" className={navClass}>
          <img src={SettingIcon} alt="" size={18} />
          <span
            className="
    w-[70px] 
    h-[20px] 
    font-[Outfit] 
    font-semibold 
    text-[16px] 
    leading-[100%] 
    tracking-[0px]
    opacity-100
    inline-flex 
    items-center
  "
          >
            Settings
          </span>
         
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 w-full px-4">
        <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

const navClass = ({ isActive }) => `
  flex items-center gap-2
  w-[202px] h-[44px]
  rounded-[12px]
  px-[24px] py-[10px]
  text-sm font-medium
  opacity-100
  shadow-[0px_8px_24px_0px_#8888881F]
  ${
    isActive
      ? "bg-[#023436] text-white border-l-2 border-[#023436]"
      : "text-gray-600 hover:bg-gray-100"
  }
`;

export default Sidebar;
