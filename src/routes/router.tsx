import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

// Page components
import Beranda from "../pages/Beranda";
import Profil from "../pages/Profil";
import Edukasi from "../pages/Edukasi";
import EdukasiPernikahan from "../pages/EdukasiPernikahan";
import EdukasiPranikah from "../pages/EdukasiPranikah";
import Program from "../pages/Program";
import ProgramDetail from "../pages/ProgramDetail";
import Suscatin from "../pages/Suscatin";
import TempatIbadah from "../pages/TempatIbadah";
import TempatIbadahDetail from "../pages/TempatIbadahDetail";
import Wakaf from "../pages/Wakaf";
import Madrasah from "../pages/Madrasah";

import MadrasahDetail from "../pages/MadrasahDetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

import { AdminLayout } from "../features/admin-layout";
import { ProtectedRoute } from "../components/admin/ProtectedRoute";
import AdminLogin from "../pages/admin/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import { PernikahanAdminPage } from "../features/pernikahan";
import { TempatIbadahAdminPage } from "../features/tempat-ibadah";
import { MadrasahAdminPage } from "../features/madrasah";

export const AppRouter = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-nunito">
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="pernikahan" element={<PernikahanAdminPage />} />
          <Route path="tempat-ibadah" element={<TempatIbadahAdminPage />} />
          <Route path="madrasah" element={<MadrasahAdminPage />} />
          <Route path="master" element={<div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">Halaman Data Master (Coming Soon)</div>} />
          <Route path="settings" element={<div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">Halaman Pengaturan (Coming Soon)</div>} />
        </Route>

        {/* Public Routes with Shared Layout */}

        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Beranda />} />
                  <Route path="/profil" element={<Profil />} />
                  <Route path="/edukasi" element={<Edukasi />} />
                  <Route path="/edukasi/pernikahan" element={<EdukasiPernikahan />} />
                  <Route path="/edukasi/pranikah" element={<EdukasiPranikah />} />
                  <Route path="/program" element={<Program />} />
                  <Route path="/program/:id" element={<ProgramDetail />} />
                  <Route path="/layanan/suscatin" element={<Suscatin />} />
                  <Route path="/layanan/tempat-ibadah" element={<TempatIbadah />} />
                  <Route
                    path="/layanan/tempat-ibadah/:id"
                    element={<TempatIbadahDetail />}
                  />
                  <Route path="/layanan/wakaf" element={<Wakaf />} />
                  <Route path="/layanan/madrasah" element={<Madrasah />} />
                  <Route path="/layanan/madrasah/:id" element={<MadrasahDetail />} />
                  <Route
                    path="*"
                    element={
                      <div className="container-custom py-20 text-center">
                        <h1 className="text-4xl font-extrabold text-primary mb-4">
                          404
                        </h1>
                        <p className="text-gray-500 mb-8">
                          Maaf, halaman yang Anda cari tidak dapat ditemukan.
                        </p>
                        <a
                          href="/"
                          className="px-6 py-3 rounded-xl bg-primary text-white font-nunito font-bold hover:bg-primary-hover shadow-md transition-all"
                        >
                          Kembali ke Beranda
                        </a>
                      </div>
                    }
                  />
                </Routes>
              </main>
              <Footer />
              <FloatingWhatsApp />
            </div>
          }
        />
      </Routes>
    </div>
  );
};
