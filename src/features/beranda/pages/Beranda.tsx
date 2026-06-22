import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Compass, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Users, CheckCircle2, ExternalLink, FileCheck } from 'lucide-react'

// Dummy Data
const stats = {
  marriagesThisMonth: 93,
  isbatsThisMonth: 5,
  yearToDatePartners: 384
}

const services = [
  {
    title: 'Kursus Calon Pengantin (Suscatin)',
    description: 'Bimbingan pranikah intensif untuk mewujudkan keluarga sakinah, mawaddah, warahmah.',
    path: '/layanan/suscatin',
    icon: Heart,
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-rose-600',
    borderColor: 'hover:border-rose-400'
  },
  {
    title: 'Tempat Ibadah',
    description: 'Direktori tempat ibadah di wilayah Karawang Barat untuk kemudahan akses ibadah masyarakat.',
    path: '/layanan/tempat-ibadah',
    icon: Compass,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-teal-600',
    borderColor: 'hover:border-teal-400'
  },
  {
    title: 'Wakaf',
    description: 'Konsultasi dan sertifikasi tanah wakaf secara aman, transparan, dan sesuai syariat.',
    path: '/layanan/wakaf',
    icon: BookOpen,
    color: 'from-amber-500/20 to-yellow-500/20',
    iconColor: 'text-amber-600',
    borderColor: 'hover:border-amber-400'
  },
  {
    title: 'Madrasah',
    description: 'Daftar dan profil lembaga pendidikan madrasah formal & non-formal di Karawang Barat.',
    path: '/layanan/madrasah',
    icon: GraduationCap,
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-indigo-600',
    borderColor: 'hover:border-indigo-400'
  }
]

const steps = [
  { id: 1, title: 'Daftar Akun Simkah', desc: 'Akses web simkah4.kemenag.go.id dan daftarkan akun Anda.' },
  { id: 2, title: 'Pilih KUA & Jadwal', desc: 'Pilih KUA Karawang Barat serta pilih tanggal & jam akad.' },
  { id: 3, title: 'Lengkapi Data', desc: 'Isi biodata lengkap calon suami, istri, dan wali nikah.' },
  { id: 4, title: 'Unggah Berkas', desc: 'Upload scan KTP, KK, Akta Lahir, dan Surat Pengantar Kelurahan (N1-N4).' },
  { id: 5, title: 'Verifikasi Petugas', desc: 'Petugas KUA akan memverifikasi berkas fisik dan online Anda.' },
  { id: 6, title: 'Bimbingan Pranikah', desc: 'Calon pengantin wajib mengikuti pembekalan suscatin di KUA.' },
  { id: 7, title: 'Pelaksanaan Akad', desc: 'Akad dilaksanakan di KUA (Gratis) atau di luar KUA (PNBP Rp 600rb).' },
  { id: 8, title: 'Buku Nikah Terbit', desc: 'Kedua mempelai menerima buku nikah resmi setelah prosesi akad selesai.' }
]

const programs = [
  {
    title: 'Bimbingan Pranikah Angkatan XXI',
    tag: 'Bimbingan Pasutri',
    desc: 'Pembekalan pranikah intensif bagi calon pengantin angkatan baru untuk pemahaman sakinah keluarga.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sertifikasi Tanah Wakaf Masjid Jami',
    tag: 'Program Wakaf',
    desc: 'Penyerahan akta ikrar wakaf masal secara gratis kepada pengurus masjid di wilayah Karawang Barat.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Penyuluhan Zakat & Pemberdayaan Umat',
    tag: 'Pemberdayaan Umat',
    desc: 'Sosialisasi pengelolaan zakat bekerjasama dengan BAZNAS untuk kemaslahatan warga pra-sejahtera.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  }
]

export default function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % programs.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length)

  return (
    <div className="space-y-24 pb-20">
      <section className="relative w-full h-[280px] sm:h-[320px] lg:h-[380px] overflow-visible flex items-center bg-background z-20">
        {/* Background Banner Full-Bleed (Mentok Kanan-Kiri & Terlihat Semua) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/banner.webp"
            alt="KUA PUSAKA Karawang Barat"
            className="w-full h-full object-cover"
          />
          {/* Gelap overlay agar teks kuning dan putih terbaca sangat kontras */}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Konten Hero di Atas Banner */}
        <div className="container-custom w-full z-10 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6">
            {/* Sisi Kiri: Judul KUA & Jadwal */}
            <div className="text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent leading-tight tracking-tight uppercase font-nunito">
                Kantor Urusan Agama Kecamatan<br />Karawang Barat
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white font-medium tracking-wide">
                Senin - Jumat 07.30 s/d 16.00
              </p>
            </div>

            {/* Sisi Kanan: Tombol Kunjungi */}
            <div className="flex-shrink-0 self-start sm:self-center">
              <a
                href="https://maps.google.com/?q=KUA+Kecamatan+Karawang+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary border border-white hover:bg-gray-50 rounded-full font-nunito font-black text-sm shadow-md transition-all uppercase tracking-wider"
              >
                <span>Kunjungi</span>
                <ExternalLink className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Overlapping Stats Cards di Bawah Banner */}
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2 z-30">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {/* Card 1: PERNIKAHAN */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100/50 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 transition-all hover:shadow-2xl">
                <div className="p-3 bg-primary/5 rounded-2xl text-primary flex-shrink-0">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-nunito font-extrabold text-[10px] sm:text-xs md:text-sm text-primary uppercase tracking-wider">PERNIKAHAN</span>
                  <div className="mt-0.5 sm:mt-1 flex items-baseline justify-center md:justify-start gap-1">
                    <span className="font-nunito font-black text-2xl sm:text-3xl md:text-4xl text-accent">
                      {stats.marriagesThisMonth.toString().padStart(3, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-text-secondary">/ Bulan ini</span>
                  </div>
                </div>
              </div>

              {/* Card 2: ISBAT NIKAH */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100/50 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 transition-all hover:shadow-2xl">
                <div className="p-3 bg-primary/5 rounded-2xl text-primary flex-shrink-0">
                  <FileCheck className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-nunito font-extrabold text-[10px] sm:text-xs md:text-sm text-primary uppercase tracking-wider">ISBAT NIKAH</span>
                  <div className="mt-0.5 sm:mt-1 flex items-baseline justify-center md:justify-start gap-1">
                    <span className="font-nunito font-black text-2xl sm:text-3xl md:text-4xl text-accent">
                      {stats.isbatsThisMonth.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-text-secondary">/ Bulan ini</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Layanan Section (4 Card Layanan) */}
      <section className="container-custom pt-20 lg:pt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Layanan Unggulan Kami
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            KUA Karawang Barat menyediakan berbagai fasilitas layanan keagamaan terpadu untuk memenuhi kebutuhan administratif dan spiritual masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((svc) => (
            <Link
              key={svc.title}
              to={svc.path}
              className={`flex flex-col bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group ${svc.borderColor}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center transition-transform group-hover:scale-105`}>
                <svc.icon className={`w-7 h-7 ${svc.iconColor}`} />
              </div>
              <h3 className="font-nunito font-bold text-lg text-text-primary mt-6 text-left group-hover:text-primary transition-colors">
                {svc.title}
              </h3>
              <p className="font-roboto text-sm text-text-secondary mt-2 text-left leading-relaxed flex-grow">
                {svc.description}
              </p>
              <div className="mt-6 flex items-center gap-1.5 font-nunito font-extrabold text-xs text-primary group-hover:text-accent transition-colors">
                <span>Pelajari Detail</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Alur Pendaftaran Section */}
      <section id="alur-nikah" className="bg-primary/5 py-20 border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
              Alur Pendaftaran Nikah
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Panduan 8 langkah mudah pencatatan nikah secara online dan langsung di Kantor Urusan Agama Kecamatan Karawang Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stepper Deskripsi Detail */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6 text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent text-primary font-nunito font-extrabold text-xl">
                  {activeStep}
                </div>
                <h3 className="font-nunito font-extrabold text-xl text-primary">
                  {steps[activeStep - 1].title}
                </h3>
                <p className="font-roboto text-sm md:text-base text-text-secondary leading-relaxed">
                  {steps[activeStep - 1].desc}
                </p>
                <div className="flex gap-2 pt-4">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:text-primary hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    disabled={activeStep === steps.length}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}
                    className="flex-grow flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-primary text-white font-nunito font-bold text-sm hover:bg-primary-hover disabled:opacity-50 transition-colors"
                  >
                    Langkah Berikutnya
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stepper Indikator Rantai */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {steps.map((step) => {
                  const isCurrent = step.id === activeStep
                  const isDone = step.id < activeStep

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between h-36 ${
                        isCurrent
                          ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-102'
                          : isDone
                          ? 'bg-white border-primary/20 text-primary'
                          : 'bg-white border-gray-100 text-text-primary hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className={`font-nunito font-bold text-xs ${isCurrent ? 'text-accent' : 'text-gray-400'}`}>
                          STEP 0{step.id}
                        </span>
                        {isDone && <CheckCircle2 className="w-5 h-5 text-accent fill-primary" />}
                      </div>
                      <span className="font-nunito font-extrabold text-sm leading-snug mt-4">
                        {step.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Slideshow Program Terbaru */}
      <section className="container-custom">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Program Kerja Kami
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Berbagai inovasi program penyuluhan, bimbingan masyarakat, serta sertifikasi keagamaan yang aktif berjalan di KUA Karawang Barat.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Foto Program */}
            <div className="h-64 sm:h-80 lg:h-[400px] relative overflow-hidden bg-gray-100">
              <img
                src={programs[currentSlide].image}
                alt={programs[currentSlide].title}
                className="w-full h-full object-cover transform scale-102 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-primary text-accent font-nunito font-extrabold text-xs uppercase tracking-wide shadow-md">
                  {programs[currentSlide].tag}
                </span>
              </div>
            </div>

            {/* Detail Deskripsi */}
            <div className="p-8 sm:p-12 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <span className="text-accent font-bold text-xs uppercase tracking-widest block">Update Program KUA</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary leading-tight">
                  {programs[currentSlide].title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {programs[currentSlide].desc}
                </p>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <div className="flex gap-1.5">
                  {programs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-primary w-6' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-primary transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-primary transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
