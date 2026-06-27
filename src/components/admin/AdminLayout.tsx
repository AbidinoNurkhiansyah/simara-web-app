import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import simaraLogo from "../../assets/simara-no-title.png";
import kemenagLogo from "../../assets/KUA.webp";
import { logout } from "../../features/auth/authSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// SVG Icons matching the design
const IconDashboard = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconPernikahan = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconTempatIbadah = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconMadrasah = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconWakaf = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconProgram = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const IconKeluar = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <IconDashboard /> },
  { name: "Pernikahan", path: "/admin/pernikahan", icon: <IconPernikahan /> },
  {
    name: "Tempat Ibadah",
    path: "/admin/tempat-ibadah",
    icon: <IconTempatIbadah />,
    hasChevron: true,
  },
  { name: "Madrasah", path: "/admin/madrasah", icon: <IconMadrasah /> },
  { name: "Wakaf", path: "/admin/wakaf", icon: <IconWakaf /> },
  { name: "Program KUA", path: "/admin/program", icon: <IconProgram /> },
];

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-[#f4f6f8] overflow-hidden font-nunito">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[260px] flex flex-col bg-[#1e4d2b] transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 px-6 pt-7 pb-6">
          {/* Mosque icon */}
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <img
              src={simaraLogo}
              alt="Simara Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-accent font-semibold text-sm">
              Sistem Manajemen Data
            </p>
            <p className="text-accent font-semibold text-sm">
              Religi &amp; Agama
            </p>
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
        <nav className="flex-1 pl-3 pr-0 mt-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 transition-all duration-200 group ${
                  isActive
                    ? "sidebar-nav-active text-[#1e4d2b] font-semibold"
                    : "mr-3 rounded-2xl text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className={
                    isActive
                      ? "text-[#1e4d2b]"
                      : "text-white/70 group-hover:text-white"
                  }
                >
                  {item.icon}
                </span>
                <span className="flex-1 text-[15px]">{item.name}</span>
                {item.hasChevron && (
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
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 pb-6 mt-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="flex items-center gap-4 w-full px-4 py-3 rounded-2xl text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer">
                <IconKeluar />
                <span className="text-[15px]">Keluar</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah Anda yakin ingin keluar?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Sesi Anda akan diakhiri dan Anda harus login kembali untuk
                  mengakses panel admin.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="rounded-full cursor-pointer hover:bg-gray-100">
                  Batal
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleLogout}
                  className="cursor-pointer bg-red-600 text-white hover:bg-red-700 rounded-full"
                >
                  Ya, Keluar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex items-center gap-4 px-6 py-4 bg-[#f4f6f8] border-b border-gray-200 z-30">
          <button
            className="p-2 -ml-1 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          {/* Toggle icon for desktop */}
          <button className="hidden md:flex p-2 text-gray-500 rounded-lg hover:bg-gray-100">
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
            <span className="text-lg font-bold text-gray-800 sm:hidden">
              KUA PUSAKA
            </span>
          </div>
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-[#1e4d2b] flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
            A
          </div>
        </header>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f4f6f8] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
