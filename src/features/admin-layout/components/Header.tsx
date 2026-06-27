import React from "react";
import { Menu } from "lucide-react";
import kemenagLogo from "../../../assets/KUA.webp";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  isDesktopCollapsed: boolean;
  setIsDesktopCollapsed: (collapsed: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  setSidebarOpen,
  isDesktopCollapsed,
  setIsDesktopCollapsed,
}) => {
  return (
    <header className="flex items-center gap-4 px-6 py-4 bg-[#f4f6f8] border-b border-gray-200 z-30">
      {/* Mobile toggle */}
      <button
        className="p-2 -ml-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={22} />
      </button>
      {/* Desktop toggle */}
      <button
        className="cursor-pointer hidden md:flex p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
        onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
      >
        <Menu size={22} />
      </button>
      {/* KUA Logo + Title */}
      <div className="flex items-center gap-3 flex-1">
        <img
          src={kemenagLogo}
          alt="KUA Logo"
          className="w-8 h-8 flex-shrink-0 object-contain"
        />
        <span className="text-lg font-bold text-gray-800 hidden sm:block">
          Kantor Urusan Agama PUSAKA Kecamatan Karawang Barat
        </span>
        <span className="text-lg font-bold text-gray-800 sm:hidden">KUA PUSAKA</span>
      </div>
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-[#1e4d2b] flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
        A
      </div>
    </header>
  );
};
