import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, MapPin, Heart, BookOpen, GraduationCap, Compass } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false)
    setIsDropdownOpen(false)
  }, [location])

  const layananItems = [
    { name: 'Suscatin (Bimbingan Pernikahan)', path: '/layanan/suscatin', desc: 'Kursus calon pengantin berstandar PUSAKA', icon: Heart },
    { name: 'Tempat Ibadah', path: '/layanan/tempat-ibadah', desc: 'Direktori tempat ibadah Karawang Barat', icon: Compass },
    { name: 'Wakaf', path: '/layanan/wakaf', desc: 'Panduan tata cara perwakafan tanah & aset', icon: BookOpen },
    { name: 'Madrasah', path: '/layanan/madrasah', desc: 'Daftar madrasah binaan di kecamatan', icon: GraduationCap },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-accent shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                {/* Custom Kemenag-like logo shape using pure Lucide items */}
                <Compass className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-nunito font-extrabold text-lg tracking-tight text-primary leading-tight">
                  KUA PUSAKA
                </span>
                <span className="font-roboto font-medium text-xs text-gray-500 uppercase tracking-widest">
                  Karawang Barat
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg font-nunito font-semibold text-sm transition-colors ${
                isActive('/') ? 'text-primary bg-primary/5' : 'text-text-primary hover:text-primary hover:bg-gray-50'
              }`}
            >
              Beranda
            </Link>
            
            <Link
              to="/profil"
              className={`px-3 py-2 rounded-lg font-nunito font-semibold text-sm transition-colors ${
                isActive('/profil') ? 'text-primary bg-primary/5' : 'text-text-primary hover:text-primary hover:bg-gray-50'
              }`}
            >
              Profil
            </Link>

            {/* Dropdown Layanan */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg font-nunito font-semibold text-sm transition-colors ${
                  location.pathname.startsWith('/layanan') 
                    ? 'text-primary bg-primary/5' 
                    : 'text-text-primary hover:text-primary hover:bg-gray-50'
                }`}
              >
                Layanan
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-3 duration-200">
                  <div className="grid gap-2">
                    {layananItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                      >
                        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-accent transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-nunito font-bold text-sm text-text-primary group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <p className="font-roboto text-xs text-gray-500 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/edukasi"
              className={`px-3 py-2 rounded-lg font-nunito font-semibold text-sm transition-colors ${
                isActive('/edukasi') ? 'text-primary bg-primary/5' : 'text-text-primary hover:text-primary hover:bg-gray-50'
              }`}
            >
              Edukasi
            </Link>

            <Link
              to="/program"
              className={`px-3 py-2 rounded-lg font-nunito font-semibold text-sm transition-colors ${
                isActive('/program') ? 'text-primary bg-primary/5' : 'text-text-primary hover:text-primary hover:bg-gray-50'
              }`}
            >
              Program
            </Link>

            {/* CTA Button */}
            <a
              href="https://maps.google.com/?q=KUA+Kecamatan+Karawang+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-nunito font-bold text-sm hover:bg-primary-hover shadow-md hover:shadow-lg transition-all"
            >
              <MapPin className="w-4 h-4 text-accent" />
              Kunjungi Lokasi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-primary hover:bg-primary/5 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top-5 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2.5 rounded-xl font-nunito font-bold text-base ${
                isActive('/') ? 'text-primary bg-primary/5' : 'text-text-primary hover:bg-gray-50'
              }`}
            >
              Beranda
            </Link>
            
            <Link
              to="/profil"
              className={`block px-4 py-2.5 rounded-xl font-nunito font-bold text-base ${
                isActive('/profil') ? 'text-primary bg-primary/5' : 'text-text-primary hover:bg-gray-50'
              }`}
            >
              Profil
            </Link>

            {/* Layanan Submenu for Mobile */}
            <div className="py-1">
              <span className="block px-4 py-1.5 font-nunito font-extrabold text-xs uppercase tracking-widest text-gray-400">
                Layanan KUA
              </span>
              <div className="pl-4 grid gap-1 mt-1">
                {layananItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-nunito font-semibold text-text-primary hover:bg-primary/5"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/edukasi"
              className={`block px-4 py-2.5 rounded-xl font-nunito font-bold text-base ${
                isActive('/edukasi') ? 'text-primary bg-primary/5' : 'text-text-primary hover:bg-gray-50'
              }`}
            >
              Edukasi
            </Link>

            <Link
              to="/program"
              className={`block px-4 py-2.5 rounded-xl font-nunito font-bold text-base ${
                isActive('/program') ? 'text-primary bg-primary/5' : 'text-text-primary hover:bg-gray-50'
              }`}
            >
              Program
            </Link>

            <a
              href="https://maps.google.com/?q=KUA+Kecamatan+Karawang+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 mx-4 py-3 rounded-xl bg-primary text-white font-nunito font-bold text-base hover:bg-primary-hover shadow-md transition-all"
            >
              <MapPin className="w-4 h-4 text-accent" />
              Kunjungi Lokasi
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
