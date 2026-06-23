import { Link } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";
import { layananItems, edukasiItems } from "../../constants/navigation";

interface DesktopNavProps {
  isActive: (path: string) => boolean;
  pathname: string;
}

export const DesktopNav = ({ isActive, pathname }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
      <Link
        to="/"
        className={`relative px-3 py-2 font-nunito font-semibold text-sm transition-all after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:bg-accent after:transition-transform after:duration-300 after:origin-left ${
          isActive("/")
            ? "text-accent after:scale-x-100"
            : "text-white/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100"
        }`}
      >
        Beranda
      </Link>

      <Link
        to="/profil"
        className={`relative px-3 py-2 font-nunito font-semibold text-sm transition-all after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:bg-accent after:transition-transform after:duration-300 after:origin-left ${
          isActive("/profil")
            ? "text-accent after:scale-x-100"
            : "text-white/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100"
        }`}
      >
        Profil
      </Link>

      <NavDropdown
        label="Layanan"
        basePath="/layanan"
        items={layananItems}
        isActive={isActive}
        pathname={pathname}
      />

      <NavDropdown
        label="Edukasi"
        basePath="/edukasi"
        items={edukasiItems}
        isActive={isActive}
        pathname={pathname}
      />

      <Link
        to="/program"
        className={`relative px-3 py-2 font-nunito font-semibold text-sm transition-all after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:bg-accent after:transition-transform after:duration-300 after:origin-left ${
          isActive("/program")
            ? "text-accent after:scale-x-100"
            : "text-white/80 hover:text-accent after:scale-x-0 hover:after:scale-x-100"
        }`}
      >
        Program
      </Link>
    </div>
  );
};
