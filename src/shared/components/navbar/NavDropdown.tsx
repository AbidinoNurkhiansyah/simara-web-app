import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DropdownItem {
  name: string;
  path: string;
  desc: string;
  icon: LucideIcon;
}

interface NavDropdownProps {
  label: string;
  basePath: string;
  items: DropdownItem[];
  isActive: (path: string) => boolean;
  pathname: string;
}

export const NavDropdown = ({
  label,
  basePath,
  items,
  pathname,
}: NavDropdownProps) => {
  return (
    <div className="relative group">
      <button
        className={`relative flex items-center gap-1 px-3 py-2 font-nunito font-semibold text-sm transition-all after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px] after:bg-accent after:transition-transform after:duration-300 after:origin-left ${
          pathname.startsWith(basePath)
            ? "text-accent after:scale-x-100"
            : "text-white/80 group-hover:text-accent after:scale-x-0 group-hover:after:scale-x-100"
        }`}
      >
        {label}
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
        <div className="w-72 rounded-b-xl rounded-t-none bg-primary p-2 shadow-xl shadow-black/20 overflow-hidden">
          <div className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors group/item"
              >
                <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-md bg-white/10 text-white/80 group-hover/item:text-accent transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-[13px] text-white group-hover/item:text-accent transition-colors leading-tight">
                    {item.name}
                  </h4>
                  <p className="font-roboto text-[11px] text-white/60 mt-1 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
