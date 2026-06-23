import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-primary-light shadow-sm transition-all duration-300">
      <div className="container-custom">
        <div className="flex justify-between h-17">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-primary shadow-md shadow-black/10 overflow-hidden">
                <img
                  src="/images/logo-simara.webp"
                  alt="Logo Simara"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-roboto font-medium text-md tracking-wide text-accent leading-tight">
                  KUA PUSAKA KARAWANG BARAT
                </span>
                <span className="font-roboto font-regular text-xs text-white tracking-widest">
                  Sistem Manajemen data Religi & Agama
                </span>
              </div>
            </div>
          </div>

          <DesktopNav isActive={isActive} pathname={location.pathname} />

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isOpen} isActive={isActive} />
    </nav>
  );
};
