import { useState } from 'react'
import { Clock, Calendar, ArrowRight, BookMarked, Search } from 'lucide-react'

// Dummy Data Artikel Edukasi
const articles = [
  // 1. Edukasi Pernikahan
  {
    id: 1,
    category: 'pernikahan',
    title: 'Memahami Fikih Munakahat: Rukun & Syarat Sah Nikah',
    desc: 'Panduan lengkap mengenai pilar penting dalam hukum perkawinan Islam agar pernikahan Anda sah di mata agama dan negara.',
    readTime: '5 Menit Baca',
    date: '12 Juni 2026',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    category: 'pernikahan',
    title: 'Menyeimbangkan Hak & Kewajiban Suami Istri',
    desc: 'Rumah tangga yang harmonis dibangun di atas kesadaran penuh akan hak dan kewajiban masing-masing pasangan.',
    readTime: '6 Menit Baca',
    date: '08 Juni 2026',
    image: 'https://images.unsplash.com/photo-1469037490074-45377ac9599a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    category: 'pernikahan',
    title: 'Manajemen Konflik: Menyelesaikan Masalah Tanpa Emosi',
    desc: 'Tips praktis menghadapi badai rumah tangga agar perselisihan menjadi pupuk kedewasaan, bukan pemisah cinta.',
    readTime: '8 Menit Baca',
    date: '28 Mei 2026',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'
  },

  // 2. Edukasi Pranikah
  {
    id: 4,
    category: 'pranikah',
    title: 'Persiapan Mental Catin: Siap Akad Sekaligus Siap Nikah',
    desc: 'Mengapa kesiapan psikologis dan emosional lebih mendesak dipersiapkan daripada kemegahan dekorasi pesta resepsi.',
    readTime: '5 Menit Baca',
    date: '15 Juni 2026',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    category: 'pranikah',
    title: 'Skrining Kesehatan Pranikah (Premarital Check-up)',
    desc: 'Mengapa catin wajib melakukan tes kesehatan ke puskesmas? Ketahui pentingnya deteksi dini untuk keturunan yang sehat.',
    readTime: '7 Menit Baca',
    date: '10 Juni 2026',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    category: 'pranikah',
    title: 'Perencanaan Keuangan Sehat Pasangan Baru',
    desc: 'Cara bijak mengatur pos pengeluaran bulanan, tabungan darurat, dan investasi bersama pasangan sejak awal pernikahan.',
    readTime: '6 Menit Baca',
    date: '02 Juni 2026',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600'
  },

  // 3. Edukasi Perwakafan
  {
    id: 7,
    category: 'perwakafan',
    title: 'Keutamaan Amal Jariah Wakaf untuk Bekal Akhirat',
    desc: 'Memahami makna wakaf sebagai sedekah abadi yang pahalanya terus mengalir meskipun wakif telah berpulang.',
    readTime: '4 Menit Baca',
    date: '18 Juni 2026',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 8,
    category: 'perwakafan',
    title: 'Panduan Legalitas: Alur Sertifikasi Tanah Wakaf',
    desc: 'Langkah-langkah hukum mendaftarkan tanah masjid atau musala agar memperoleh sertifikat wakaf resmi dari BPN.',
    readTime: '9 Menit Baca',
    date: '11 Juni 2026',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 9,
    category: 'perwakafan',
    title: 'Wakaf Uang & Wakaf Produktif di Era Modern',
    desc: 'Mengenal konsep wakaf uang untuk pembiayaan fasilitas kesehatan, pendidikan gratis, dan pemberdayaan ekonomi umat.',
    readTime: '6 Menit Baca',
    date: '25 Mei 2026',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600'
  }
]

export default function Edukasi() {
  const [activeTab, setActiveTab] = useState<'semua' | 'pernikahan' | 'pranikah' | 'perwakafan'>('semua')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter((art) => {
    const matchesTab = activeTab === 'semua' || art.category === activeTab
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="pb-24 space-y-16">
      {/* 1. Header Page */}
      <section className="bg-gradient-to-br from-primary/10 to-transparent pt-16 pb-20 border-b border-gray-100">
        <div className="container-custom text-center space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/15">
            Perpustakaan Digital KUA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Edukasi Keagamaan & Pranikah
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Perluas wawasan Anda dengan kumpulan artikel panduan pranikah, hukum perkawinan Islam, dan regulasi aset wakaf yang kredibel.
          </p>
        </div>
      </section>

      {/* 2. Pencarian & Filter Tabs */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 pb-8">
          {/* Tabs Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'semua', label: 'Semua Artikel' },
              { id: 'pernikahan', label: 'Edukasi Pernikahan' },
              { id: 'pranikah', label: 'Edukasi Pranikah' },
              { id: 'perwakafan', label: 'Edukasi Perwakafan' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-nunito font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-white border border-gray-200 text-text-primary hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Kolom Pencarian */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari judul artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-sm transition-all"
            />
          </div>
        </div>

        {/* 3. Grid Artikel */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group"
              >
                {/* Visual Banner */}
                <div className="h-48 overflow-hidden bg-gray-150 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-primary font-nunito font-extrabold text-[10px] uppercase tracking-wider shadow-sm">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Deskripsi Teks */}
                <div className="p-6 text-left flex flex-col flex-grow space-y-4">
                  {/* Meta data */}
                  <div className="flex items-center gap-4 text-xs font-roboto text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-nunito font-extrabold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="font-roboto text-sm text-text-secondary leading-relaxed flex-grow line-clamp-3">
                    {art.desc}
                  </p>

                  <div className="pt-4 border-t border-gray-100 flex items-center gap-1.5 font-nunito font-extrabold text-xs text-primary group-hover:text-accent transition-colors">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center py-12 bg-white rounded-3xl border border-dashed border-gray-200">
            <BookMarked className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="font-nunito font-bold text-lg text-text-primary">Tidak ada artikel ditemukan</h3>
            <p className="font-roboto text-sm text-text-secondary mt-1">Silakan cari menggunakan kata kunci lain atau pilih kategori berbeda.</p>
          </div>
        )}
      </section>
    </div>
  )
}
