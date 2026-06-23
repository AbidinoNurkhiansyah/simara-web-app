import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  ChevronLeft,
  ChevronRight,
  Users,
  ExternalLink,
  FileCheck,
  School,
  Handshake,
} from "lucide-react";

// Dummy Data
const stats = {
  marriagesThisMonth: 93,
  isbatsThisMonth: 5,
  yearToDatePartners: 384,
};

const services = [
  {
    title: "Suscatin",
    description:
      "Kursus singkat yang diselenggarakan oleh Kantor Urusan Agama (KUA) untuk calon pengantin",
    path: "/layanan/suscatin",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Tempat Ibadah",
    description:
      "List data tempat atau fasilitas Keagamaan antar umat beragama di Kecamatan Karawang Barat",
    path: "/layanan/tempat-ibadah",
    icon: Compass,
    image: "/images/tempat-ibadah.webp",
  },
  {
    title: "Waqaf",
    description:
      "konsep dalam Islam di mana seseorang menyerahkan harta benda untuk tujuan amal secara permanen",
    path: "/layanan/wakaf",
    icon: Handshake,
    image: "/images/wakaf.webp",
  },
  {
    title: "Madrasah",
    description:
      "List data sekolah agama islam dari berbagai tingkatan di Kecamatan Karawang Barat",
    path: "/layanan/madrasah",
    icon: School,
    image: "/images/madrasah.webp",
  },
];

const steps = [
  {
    id: 1,
    title: "Siapkan Berkas Persyaratan",
    image: "/images/step-pernikahan/step-1.webp",
    desc: [
      "Foto Copy KTP",
      "Foto Copy KTP Orang Tua",
      "Foto Copy KTP Wali Nikah",
      "Foto Copy KTP Saksi Nikah",
      "Foto Copy Ijazah",
      "Foto Copy KK",
      "Foto Copy Akta Kelahiran",
      "Pas Photo 2x3 (4 lembar) & 4x6(1 lembar)",
      "Akta Cerai (Bagi Duda/Janda cerai)",
      "N6 (Bagi Duda/Janda Mati)",
      "Surat Izin Kawin dari Komandan (Bagi Anggota TNI.POLRI)",
    ],
  },
  {
    id: 2,
    title: "Datang Ke Kelurahan/Desa",
    image: "/images/step-pernikahan/step-2.webp",
    desc: [
      "Meminta Formulir N1,N2,N3,N4,N5,N6 & SKW",
      "Mengisi Formulir dan ditandatangani oleh Lurah/Kepala Desa",
    ],
  },
  {
    id: 3,
    title: "Membawa Persyaratan ke KUA",
    image: "/images/step-pernikahan/step-3.webp",
    desc: [
      "Membawa Semua Persyaratan dari Kelurahan/Desa",
      "Meminta  Billing Pembayaran untuk ke Kantor POS",
    ],
  },
  {
    id: 4,
    title: "Membayar Billing Pembayaran",
    image: "/images/step-pernikahan/step-4.webp",
    desc: [
      "Menyerahkan Billing Pembayaran dari KUA",
      "Menyetorkan biaya Nikah",
      "Meminta Slip Setoran",
    ],
  },
  {
    id: 5,
    title: "Mempersiapkan Kelengkapan Administrasi",
    image: "/images/step-pernikahan/step-5.webp",
    desc: [
      "Menyerahkan Slip Setoran dari Kantor POS (Asli & 4 Rangkap Foto Copy)",
      "Menerima Surat untuk Penataran Calon Pengantin",
    ],
  },
  {
    id: 6,
    title: "Penataran (Suscatin)",
    image: "/images/step-pernikahan/step-6.webp",
    desc: [
      "Menerima Materi Bimbingan Kursus Calon Pengantin (Suscatin) dan Praktek Ijab Qobul.",
    ],
  },
  {
    id: 7,
    title: "Prosesi Akad Nikah",
    image: "/images/step-pernikahan/step-7.webp",
    desc: [
      "Menunggu dan Menghubungi Petugas KUA (Penghulu) pada saat pelaksanaan Akad Nikah.",
    ],
  },
  {
    id: 8,
    title: "Penyerahan Buku Nikah",
    image: "/images/step-pernikahan/step-8.webp",
    desc: [
      "Penyerahan Buku Nikah kepada pengantin sebagai tanda bukti bahwa perkawinan yang telah dilaksanakan sah secara hukum negara.",
    ],
  },
];

const programs = [
  {
    title: "Bimbingan Pranikah Angkatan XXI",
    tag: "Bimbingan Pasutri",
    date: "12 Agustus 2026",
    desc: "Pembekalan pranikah intensif bagi calon pengantin angkatan baru untuk pemahaman sakinah keluarga.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sertifikasi Tanah Wakaf Masjid Jami",
    tag: "Program Wakaf",
    date: "20 September 2026",
    desc: "Penyerahan akta ikrar wakaf masal secara gratis kepada pengurus masjid di wilayah Karawang Barat.",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Penyuluhan Zakat & Pemberdayaan Umat",
    tag: "Pemberdayaan Umat",
    date: "05 Oktober 2026",
    desc: "Sosialisasi pengelolaan zakat bekerjasama dengan BAZNAS untuk kemaslahatan warga pra-sejahtera.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);

  return (
    <div className="space-y-12 pb-20">
      <section className="relative w-full h-[280px] sm:h-[300px] lg:h-[300px] overflow-visible flex items-center bg-background z-20">
        {/* Background Banner Full-Bleed (Mentok Kanan-Kiri & Terlihat Semua) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/banner.webp"
            alt="KUA PUSAKA Karawang Barat"
            className="w-full h-full object-cover"
          />
          {/* Gelap overlay agar teks kuning dan putih terbaca sangat kontras, memudar ke kanan dengan lebih halus */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        {/* Konten Hero di Atas Banner */}
        <div className="container-custom w-full z-10 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6">
            {/* Sisi Kiri: Judul KUA & Jadwal */}
            <div className="w-full sm:w-3/4 text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent leading-tight tracking-wide font-nunito">
                Kantor Urusan Agama Kecamatan
                <br />
                Karawang Barat
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium tracking-wide">
                Senin - Jumat 08.00 s/d 16.00
              </p>
            </div>

            {/* Sisi Kanan: Tombol Kunjungi */}
            <div className="flex-shrink-0 self-start sm:self-center">
              <a
                href="https://www.google.com/maps/place/KUA+Kec.+Karawang+Barat/@-6.3063436,107.3046829,20z/data=!4m6!3m5!1s0x2e6977c3a733af8f:0xf597a5a216080521!8m2!3d-6.3064892!4d107.3047657!16s%2Fg%2F1hm4cgwz6?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary border border-white hover:bg-gray-50 rounded-full font-roboto font-semibold text-sm shadow-md transition-all tracking-wider"
              >
                <span>Kunjungi</span>
                <ExternalLink
                  className="w-4 h-4 text-primary"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Overlapping Stats Cards di Bawah Banner */}
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2 z-30">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {/* Card 1: PERNIKAHAN */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100/50 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                <div className="p-3 bg-primary/5 rounded-2xl text-primary flex-shrink-0">
                  <Users
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-nunito font-extrabold text-[10px] sm:text-xs md:text-lg text-primary uppercase tracking-wider">
                    PERNIKAHAN
                  </span>
                  <div className="mt-0.5 sm:mt-1 flex items-baseline justify-center md:justify-start gap-1">
                    <span className="font-roboto font-black text-2xl sm:text-3xl md:text-4xl text-accent">
                      {stats.marriagesThisMonth.toString().padStart(3, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-text-secondary">
                      / Bulan ini
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: ISBAT NIKAH */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-10 shadow-xl border border-gray-100/50 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                <div className="p-3 bg-primary/5 rounded-2xl text-primary flex-shrink-0">
                  <FileCheck
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-nunito font-extrabold text-[10px] sm:text-xs md:text-lg text-primary uppercase tracking-wider">
                    ISBAT NIKAH
                  </span>
                  <div className="mt-0.5 sm:mt-1 flex items-baseline justify-center md:justify-start gap-1">
                    <span className="font-nunito font-black text-2xl sm:text-3xl md:text-4xl text-accent">
                      {stats.isbatsThisMonth.toString().padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-text-secondary">
                      / Bulan ini
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Layanan Section (4 Card Layanan) */}
      <section className="container-custom pt-18 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.title}
              to={svc.path}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group relative"
            >
              <div className="h-40 w-full overflow-hidden bg-gray-50">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute right-5 top-40 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#2e4726] flex items-center justify-center text-[#eab308] shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                <svc.icon className="w-6 h-6" />
              </div>

              <div className="p-5 pt-7 flex flex-col flex-grow text-left">
                <span className="font-nunito font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  KUA PUSAKA
                </span>
                <h3 className="font-nunito font-extrabold text-lg text-text-primary group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="font-roboto text-sm text-text-secondary mt-2 leading-relaxed flex-grow">
                  {svc.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Alur Pendaftaran Section */}
      <section id="alur-nikah" className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
              Alur Pendaftaran Nikah
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Panduan lengkap tata cara administrasi dan pendaftaran nikah resmi
              di wilayah kerja Kantor Urusan Agama Kecamatan Karawang Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col text-left group">
                {/* Header: Number and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-accent font-nunito font-bold flex-shrink-0 shadow-md">
                    {step.id}
                  </div>
                  <h3 className="font-nunito font-extrabold text-lg text-text-primary group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Circular Image Placeholder */}
                <div className="h-30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description List */}
                <div className="space-y-2 text-text-secondary text-sm font-roboto flex-grow">
                  {step.desc.map((item, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="font-bold text-gray-400 select-none">
                        {idx + 1}.
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Slideshow Program Terbaru */}
      <section className="overflow-hidden w-full max-w-full">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Program Kerja Kami
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Berbagai inovasi program penyuluhan, bimbingan masyarakat, serta
            sertifikasi keagamaan yang aktif berjalan di KUA Karawang Barat.
          </p>
        </div>

        {/* Coverflow Carousel Container */}
        <div className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center">
          {programs.map((prog, idx) => {
            const diff = idx - currentSlide;
            let offset = diff;
            // Handle infinite visual loop mapping for 3 items
            if (diff === programs.length - 1) offset = -1;
            if (diff === -(programs.length - 1)) offset = 1;

            let transformClasses = "opacity-0 scale-75 z-0 pointer-events-none";
            if (offset === 0) {
              transformClasses =
                "opacity-100 scale-100 z-30 translate-x-0 shadow-2xl";
            } else if (offset === -1) {
              transformClasses =
                "opacity-60 scale-[0.85] md:scale-90 z-20 -translate-x-[105%] sm:-translate-x-[100%] cursor-pointer hover:opacity-80 shadow-lg";
            } else if (offset === 1) {
              transformClasses =
                "opacity-60 scale-[0.85] md:scale-90 z-20 translate-x-[105%] sm:translate-x-[100%] cursor-pointer hover:opacity-80 shadow-lg";
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  if (offset === -1) prevSlide();
                  if (offset === 1) nextSlide();
                }}
                className={`absolute w-[80%] sm:w-[60%] md:w-[50%] lg:w-[38%] h-full transition-all duration-700 ease-out rounded-3xl overflow-hidden bg-white border border-gray-100 flex flex-col ${transformClasses}`}
              >
                {/* Image Section */}
                <div className="relative w-full h-[55%] md:h-[60%] bg-gray-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-xl bg-primary text-accent font-nunito font-semibold text-[10px] sm:text-xs uppercase tracking-tight shadow-md">
                      {prog.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-center text-left">
                  <h3 className="text-lg sm:text-xl font-extrabold text-text-primary leading-tight mb-2">
                    {prog.title}
                  </h3>
                  <span className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest block mb-1.5">
                    {prog.date}
                  </span>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {prog.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-12 md:mt-16">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-primary transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {programs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all focus:outline-none ${
                  idx === currentSlide ? "bg-primary w-8" : "bg-gray-300 w-2.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-primary transition-colors focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
