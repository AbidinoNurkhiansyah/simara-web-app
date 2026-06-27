import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../auth/authSlice";
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
} from "../../../components/ui/alert-dialog";
import { IconKeluar } from "../constants/navigation";

interface LogoutDialogProps {
  isDesktopCollapsed: boolean;
}

export const LogoutDialog: React.FC<LogoutDialogProps> = ({ isDesktopCollapsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  return (
    <div className={`pb-6 mt-2 ${isDesktopCollapsed ? "px-0" : "px-3"}`}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className={`flex items-center transition-all duration-200 cursor-pointer text-white/80 hover:bg-white/10 hover:text-white ${
              isDesktopCollapsed
                ? "justify-center w-12 h-12 mx-auto rounded-full"
                : "gap-4 w-full px-4 py-3 rounded-2xl"
            }`}
          >
            <IconKeluar />
            <span
              className={`text-[15px] whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isDesktopCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
              }`}
            >
              Keluar
            </span>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin ingin keluar?</AlertDialogTitle>
            <AlertDialogDescription>
              Sesi Anda akan diakhiri dan Anda harus login kembali untuk mengakses panel admin.
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
  );
};
