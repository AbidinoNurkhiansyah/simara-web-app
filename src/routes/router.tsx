import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'

// Page components
import Beranda from '../pages/Beranda'
import Profil from '../pages/Profil'
import Edukasi from '../pages/Edukasi'
import Program from '../pages/Program'
import Suscatin from '../pages/Suscatin'
import TempatIbadah from '../pages/TempatIbadah'
import TempatIbadahDetail from '../pages/TempatIbadahDetail'
import Wakaf from '../pages/Wakaf'
import Madrasah from '../pages/Madrasah'

import MadrasahDetail from '../pages/MadrasahDetail'



const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export const AppRouter = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/program" element={<Program />} />
          <Route path="/layanan/suscatin" element={<Suscatin />} />
          <Route path="/layanan/tempat-ibadah" element={<TempatIbadah />} />
          <Route path="/layanan/tempat-ibadah/:id" element={<TempatIbadahDetail />} />
          <Route path="/layanan/wakaf" element={<Wakaf />} />
          <Route path="/layanan/madrasah" element={<Madrasah />} />
          <Route path="/layanan/madrasah/:id" element={<MadrasahDetail />} />
          <Route path="*" element={
            <div className="container-custom py-20 text-center">
              <h1 className="text-4xl font-extrabold text-primary mb-4">404</h1>
              <p className="text-gray-500 mb-8">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
              <a href="/" className="px-6 py-3 rounded-xl bg-primary text-white font-nunito font-bold hover:bg-primary-hover shadow-md transition-all">Kembali ke Beranda</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
