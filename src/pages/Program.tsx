import { Award, CheckCircle2, ChevronRight, Calendar } from 'lucide-react'

// Dummy Data Program
const programTerbaru = [
  {
    id: 1,
    title: 'Suscatin Sinergis: Tekan Stunting Bersama BKKBN',
    desc: 'Kerjasama bimbingan perkawinan KUA dengan PLKB Karawang Barat untuk edukasi reproduksi sehat serta gizi pranikah.',
    date: '20 Juni 2026',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Konsultasi Keluarga Sakinah Berbasis Online',
    desc: 'KUA meluncurkan WhatsApp Center konsultasi problematika rumah tangga bagi warga Karawang Barat untuk mencegah perceraian.',
    date: '15 Juni 2026',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Pengukuran Lapangan Masal Sertifikat Wakaf',
    desc: 'Tim PPAIW KUA melakukan peninjauan lapangan serentak untuk mempercepat terbitnya akta ikrar wakaf masjid jami desa.',
    date: '10 Juni 2026',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600'
  }
]

const programUnggulan = [
  {
    id: 4,
    title: 'Revitalisasi KUA PUSAKA Karawang Barat',
    desc: 'Transformasi sarana prasarana gedung pelayanan yang ramah disabilitas, digitalisasi antrean online, serta modernisasi ruang nikah.',
    benefit: 'Pelayanan prima berstandar nasional dan serba digital'
  },
  {
    id: 5,
    title: 'Bimbingan Remaja Usia Sekolah (BRUS)',
    desc: 'Penyuluhan berkala ke sekolah-sekolah menengah (SMA/SMK/MA) tentang edukasi kesehatan reproduksi dan pencegahan pernikahan dini.',
    benefit: 'Menurunkan persentase dispensasi nikah anak di Karawang'
  },
  {
    id: 6,
    title: 'Pengembangan Zakat Produktif & Ekonomi Umat',
    desc: 'Kolaborasi DKM, KUA, dan BAZNAS dalam menyalurkan modal usaha mikro tanpa bunga bagi keluarga binaan pra-sejahtera.',
    benefit: 'Membantu mustahik mandiri secara ekonomi'
  }
]

export default function Program() {
  return (
    <div className="pb-24 space-y-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-transparent pt-16 pb-20 border-b border-gray-100">
        <div className="container-custom text-center space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/15">
            Aktivitas & Inovasi KUA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Program Kerja & Kegiatan
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Ikuti berbagai kegiatan terbaru dan program unggulan jangka panjang kami dalam mengabdi kepada masyarakat Karawang Barat.
          </p>
        </div>
      </section>

      {/* Program Terbaru */}
      <section className="container-custom space-y-12">
        <div className="text-left space-y-2">
          <h2 className="text-3xl font-extrabold text-text-primary">Program & Kegiatan Terbaru</h2>
          <p className="text-text-secondary text-sm md:text-base">Inovasi pelayanan dan agenda kegiatan yang sedang aktif berjalan bulan ini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programTerbaru.map((prg) => (
            <div
              key={prg.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden bg-gray-150 relative">
                  <img
                    src={prg.image}
                    alt={prg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-primary text-accent font-nunito font-extrabold text-[10px] uppercase tracking-wider">
                      Terbaru
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{prg.date}</span>
                  </div>
                  <h3 className="font-nunito font-bold text-lg text-text-primary leading-snug">
                    {prg.title}
                  </h3>
                  <p className="font-roboto text-sm text-text-secondary leading-relaxed">
                    {prg.desc}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="#"
                  className="flex items-center gap-1 font-nunito font-extrabold text-xs text-primary hover:text-accent transition-colors"
                >
                  <span>Baca Rincian Kegiatan</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="bg-primary/5 py-20 border-y border-gray-100">
        <div className="container-custom space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-text-primary">Program Kerja Unggulan</h2>
            <p className="text-text-secondary text-sm md:text-base">Komitmen jangka panjang KUA Karawang Barat untuk optimalisasi pelayanan keagamaan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programUnggulan.map((prg) => (
              <div
                key={prg.id}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-nunito font-extrabold text-xl text-primary leading-snug">
                    {prg.title}
                  </h3>
                  <p className="font-roboto text-sm text-text-secondary leading-relaxed">
                    {prg.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 p-3 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="font-roboto text-xs text-text-primary">
                    <p className="font-bold">Output Utama:</p>
                    <p className="text-text-secondary mt-0.5">{prg.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
