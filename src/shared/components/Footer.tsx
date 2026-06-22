import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Globe, Compass } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-primary">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-nunito font-extrabold text-base tracking-tight text-white leading-tight">
                  KUA PUSAKA
                </span>
                <span className="font-roboto font-medium text-[10px] text-accent uppercase tracking-widest">
                  Karawang Barat
                </span>
              </div>
            </div>
            <p className="font-roboto text-sm text-white/80 leading-relaxed">
              Kantor Urusan Agama (KUA) PUSAKA Kecamatan Karawang Barat berdedikasi memberikan pelayanan keagamaan dan pencatatan nikah prima, kredibel, dan modern bagi seluruh masyarakat.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://kemenag.go.id" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kontak & Alamat */}
          <div className="space-y-4">
            <h3 className="font-nunito font-bold text-base text-accent uppercase tracking-wider">Hubungi Kami</h3>
            <ul className="space-y-3 font-roboto text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Jl. Raya Karawang Barat No.12, Karawang Kulon, Kec. Karawang Barat, Kab. Karawang, Jawa Barat 41311</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>(0267) 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>kua.karawangbarat@kemenag.go.id</span>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-nunito font-bold text-base text-accent uppercase tracking-wider">Jam Layanan</h3>
            <ul className="space-y-3 font-roboto text-sm text-white/85">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Senin - Kamis</p>
                  <p className="text-white/70">07:30 - 16:00 WIB</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Jumat</p>
                  <p className="text-white/70">07:30 - 16:30 WIB</p>
                </div>
              </li>
              <li className="text-xs text-accent bg-white/5 p-3 rounded-lg border border-accent/20">
                *Sabtu, Minggu & Hari Libur Nasional tutup.
              </li>
            </ul>
          </div>

          {/* Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="font-nunito font-bold text-base text-accent uppercase tracking-wider">Navigasi Cepat</h3>
            <ul className="grid grid-cols-2 gap-2 font-nunito font-semibold text-sm text-white/85">
              <li>
                <Link to="/" className="hover:text-accent transition-colors flex items-center gap-1">
                  • Beranda
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-accent transition-colors flex items-center gap-1">
                  • Profil
                </Link>
              </li>
              <li>
                <Link to="/edukasi" className="hover:text-accent transition-colors flex items-center gap-1">
                  • Edukasi
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-accent transition-colors flex items-center gap-1">
                  • Program
                </Link>
              </li>
              <li>
                <Link to="/layanan/suscatin" className="hover:text-accent transition-colors flex items-center gap-1">
                  • Suscatin
                </Link>
              </li>
              <li>
                <Link to="/layanan/wakaf" className="hover:text-accent transition-colors flex items-center gap-1">
                  • Wakaf
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-roboto text-white/60">
          <p>© {currentYear} KUA PUSAKA Kecamatan Karawang Barat. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
