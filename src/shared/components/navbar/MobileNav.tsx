import { Link } from "react-router-dom";
import { layananItems, edukasiItems } from "../../constants/navigation";
import { UserCircle } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  isActive: (path: string) => boolean;
}

export const MobileNav = ({ isOpen, isActive }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-white/10 bg-primary animate-in slide-in-from-top-5 duration-200">
      <div className="px-2 pt-2 pb-4 space-y-1">
        <Link
          to="/"
          className={`block px-4 py-2.5 rounded-xl font-roboto font-bold text-base ${
            isActive("/")
              ? "text-accent bg-white/10"
              : "text-white/90 hover:bg-white/5"
          }`}
        >
          Beranda
        </Link>

        <Link
          to="/profil"
          className={`block px-4 py-2.5 rounded-xl font-roboto font-bold text-base ${
            isActive("/profil")
              ? "text-accent bg-white/10"
              : "text-white/90 hover:bg-white/5"
          }`}
        >
          Profil
        </Link>

        {/* Layanan Submenu for Mobile */}
        <div className="py-1">
          <span className="block px-4 py-1.5 font-roboto font-extrabold text-xs uppercase tracking-widest text-white/50">
            Layanan KUA
          </span>
          <div className="pl-4 grid gap-1 mt-1">
            {layananItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-roboto font-semibold text-white/90 hover:bg-white/5"
              >
                <item.icon className="w-4 h-4 text-accent" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Edukasi Submenu for Mobile */}
        <div className="py-1">
          <span className="block px-4 py-1.5 font-roboto font-extrabold text-xs uppercase tracking-widest text-white/50">
            Pusat Edukasi
          </span>
          <div className="pl-4 grid gap-1 mt-1">
            {edukasiItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-roboto font-semibold text-white/90 hover:bg-white/5"
              >
                <item.icon className="w-4 h-4 text-accent" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/program"
          className={`block px-4 py-2.5 rounded-xl font-roboto font-bold text-base ${
            isActive("/program")
              ? "text-accent bg-white/10"
              : "text-white/90 hover:bg-white/5"
          }`}
        >
          Program
        </Link>

        <a
          href="https://simkah4.kemenag.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent text-primary font-roboto font-bold rounded-xl hover:bg-white transition-colors"
        >
          <UserCircle className="w-5 h-5" />
          Daftar Nikah
        </a>
      </div>
    </div>
  );
};
