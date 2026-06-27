import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import simaraLogo from "../../../assets/simara-no-title.png";
import { navItems } from "../constants/navigation";
import { LogoutDialog } from "./LogoutDialog";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isDesktopCollapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  isDesktopCollapsed,
}) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-[#1e4d2b] transition-all duration-300 ease-in-out md:relative ${
        sidebarOpen ? "translate-x-0 w-[260px]" : "-translate-x-full w-[260px]"
      } md:translate-x-0 ${isDesktopCollapsed ? "md:w-[80px]" : "md:w-[260px]"}`}
    >
      {/* Logo / Brand */}
      <div
        className={`flex items-center pt-7 pb-6 ${
          isDesktopCollapsed ? "justify-center px-0" : "gap-3 px-6"
        }`}
      >
        {/* Mosque icon */}
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
          <img
            src={simaraLogo}
            alt="Simara Logo"
            className="w-10 h-10 object-contain"
          />
        </div>
        <div
          className={`leading-tight whitespace-nowrap transition-all duration-300 overflow-hidden ${
            isDesktopCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
          }`}
        >
          <p className="text-accent font-semibold text-sm">Sistem Manajemen Data</p>
          <p className="text-accent font-semibold text-sm">Religi &amp; Agama</p>
        </div>
      </div>

      {/* Mobile close button */}
      <button
        className="absolute top-4 right-4 text-white md:hidden"
        onClick={() => setSidebarOpen(false)}
      >
        <X size={20} />
      </button>

      {/* Navigation */}
      <nav
        className={`flex-1 mt-2 space-y-1 overflow-y-auto ${
          isDesktopCollapsed ? "px-0" : "pl-3 pr-0"
        }`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center transition-all duration-200 group ${
                isDesktopCollapsed
                  ? "justify-center w-12 h-12 mx-auto rounded-full mb-1 " +
                    (isActive
                      ? "bg-white text-[#1e4d2b] shadow-sm"
                      : "text-white/80 hover:bg-white/10 hover:text-white")
                  : "gap-4 px-4 py-3 " +
                    (isActive
                      ? "sidebar-nav-active text-[#1e4d2b] font-semibold"
                      : "mr-3 rounded-2xl text-white/80 hover:bg-white/10 hover:text-white")
              }`}
            >
              <span
                className={
                  isActive ? "text-[#1e4d2b]" : "text-white/70 group-hover:text-white"
                }
              >
                {item.icon}
              </span>
              <span
                className={`flex-1 text-[15px] whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  isDesktopCollapsed
                    ? "max-w-0 opacity-0"
                    : "max-w-[200px] opacity-100"
                }`}
              >
                {item.name}
              </span>
              {item.hasChevron && (
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isDesktopCollapsed ? "max-w-0 opacity-0" : "max-w-[24px] opacity-100"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-60"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Dialog Component */}
      <LogoutDialog isDesktopCollapsed={isDesktopCollapsed} />
    </div>
  );
};
