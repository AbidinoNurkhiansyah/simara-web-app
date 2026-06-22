import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../shared/components/Navbar'
import { Footer } from '../shared/components/Footer'

// Lazy loaded page components
const Beranda = lazy(() => import('../features/beranda/pages/Beranda'))
const Profil = lazy(() => import('../features/profil/pages/Profil'))
const Edukasi = lazy(() => import('../features/edukasi/pages/Edukasi'))
const Program = lazy(() => import('../features/program/pages/Program'))
const Suscatin = lazy(() => import('../features/layanan/pages/Suscatin'))
const TempatIbadah = lazy(() => import('../features/layanan/pages/TempatIbadah'))
const Wakaf = lazy(() => import('../features/layanan/pages/Wakaf'))
const Madrasah = lazy(() => import('../features/layanan/pages/Madrasah'))

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-brand-bg">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
)

export const AppRouter = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/program" element={<Program />} />
            <Route path="/layanan/suscatin" element={<Suscatin />} />
            <Route path="/layanan/tempat-ibadah" element={<TempatIbadah />} />
            <Route path="/layanan/wakaf" element={<Wakaf />} />
            <Route path="/layanan/madrasah" element={<Madrasah />} />
            <Route path="*" element={
              <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-extrabold text-primary mb-4">404</h1>
                <p className="text-gray-500 mb-8">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
                <a href="/" className="px-6 py-3 rounded-xl bg-primary text-white font-nunito font-bold hover:bg-primary-hover shadow-md transition-all">Kembali ke Beranda</a>
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
