import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import kuaLogo from "@/assets/KUA.webp";

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <img
                  src={kuaLogo}
                  alt="Logo KUA"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-nunito font-bold text-md tracking-tight text-white leading-tight">
                  Kantor Urusan Agama
                </span>
                <span className="font-roboto font-medium text-[8px] text-accent uppercase tracking-widest">
                  Kecamatan Karawang Barat
                </span>
              </div>
            </div>
            <p className="font-roboto text-sm text-white/80 leading-relaxed">
              Kantor Urusan Agama (KUA) PUSAKA Kecamatan Karawang Barat
              berdedikasi memberikan pelayanan keagamaan dan pencatatan nikah
              prima, kredibel, dan modern bagi seluruh masyarakat.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Button asChild variant="ghost" size="icon" className="p-2 w-auto h-auto rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300">
                <a href="https://www.instagram.com/kua_karawangbarat/">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="p-2 w-auto h-auto rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300">
                <a href="http://facebook.com/kemenagjabar">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="p-2 w-auto h-auto rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300">
                <a href="https://x.com/KemenagJabar">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Kontak & Alamat */}
          <div className="space-y-4">
            <h3 className="font-nunito font-bold text-base text-accent uppercase tracking-wider">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 font-roboto text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Jl. Panatayuda 1, Nagasari, Karawang Barat, Nagasari,
                  Karawang, Jawa Barat 41312
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>(0267) 405368</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>kanwiljabar@kemenag.go.id</span>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-nunito font-bold text-base text-accent uppercase tracking-wider">
              Jam Layanan
            </h3>
            <ul className="space-y-3 font-roboto text-sm text-white/85">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Senin - Kamis</p>
                  <p className="text-white/70">08:00 - 16:00 WIB</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Jumat</p>
                  <p className="text-white/70">08:00 - 16:30 WIB</p>
                </div>
              </li>
              <li className="text-xs text-accent bg-white/5 p-3 rounded-lg border border-accent/20">
                *Sabtu, Minggu & Hari Libur Nasional tutup.
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-12 bg-white/10" />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-roboto text-white/60">
          <p className="text-center md:text-left">
            © {currentYear} KUA PUSAKA Kecamatan Karawang Barat. Hak Cipta
            Dilindungi.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:underline">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
