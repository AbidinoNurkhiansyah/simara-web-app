import { useState } from 'react'
import { Search, MapPin, User, Map, Landmark } from 'lucide-react'

// Dummy Data Tempat Ibadah
const tempatIbadahData = [
  {
    id: 1,
    name: 'Masjid Agung Syekh Quro Karawang',
    type: 'Masjid Agung',
    kelurahan: 'Karawang Kulon',
    address: 'Jl. Alun-Alun Barat No.1, Karawang Kulon, Kec. Karawang Barat',
    nazhir: 'H. Asep Saepudin, M.A.',
    status: 'Tersertifikasi Wakaf',
    capacity: '3.000 Jamaah'
  },
  {
    id: 2,
    name: 'Masjid Raya Al-Jihad Karawang',
    type: 'Masjid Besar',
    kelurahan: 'Nagasari',
    address: 'Jl. Ahmad Yani No.5, Nagasari, Kec. Karawang Barat',
    nazhir: 'Drs. H. Mulyana',
    status: 'Tersertifikasi Wakaf',
    capacity: '2.500 Jamaah'
  },
  {
    id: 3,
    name: 'Masjid Jami An-Nur Tanjungpura',
    type: 'Masjid Jami',
    kelurahan: 'Tanjungpura',
    address: 'Jl. Proklamasi Gg. Masjid No.18, Tanjungpura, Kec. Karawang Barat',
    nazhir: 'K.H. Ahmad Dahlan',
    status: 'Tersertifikasi Wakaf',
    capacity: '800 Jamaah'
  },
  {
    id: 4,
    name: 'Masjid Al-Barokah Tunggakjati',
    type: 'Masjid Jami',
    kelurahan: 'Tunggakjati',
    address: 'Jl. Syeh Quro, Tunggakjati, Kec. Karawang Barat',
    nazhir: 'Ust. Nanang Kosim',
    status: 'Proses Sertifikasi',
    capacity: '500 Jamaah'
  },
  {
    id: 5,
    name: 'Masjid Baiturrahman Adiarsa',
    type: 'Masjid Jami',
    kelurahan: 'Adiarsa Barat',
    address: 'Perumahan Adiarsa Indah Blok C, Adiarsa Barat, Kec. Karawang Barat',
    nazhir: 'H. Bambang Irawan',
    status: 'Tersertifikasi Wakaf',
    capacity: '600 Jamaah'
  },
  {
    id: 6,
    name: 'Masjid Darussalam Karangpawitan',
    type: 'Masjid Jami',
    kelurahan: 'Karangpawitan',
    address: 'Perum Gading Elok Blok B, Karangpawitan, Kec. Karawang Barat',
    nazhir: 'H. Sofyan Hadi',
    status: 'Tersertifikasi Wakaf',
    capacity: '700 Jamaah'
  }
]

export default function TempatIbadah() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedKelurahan, setSelectedKelurahan] = useState('Semua')

  // Get unique kelurahan list
  const kelurahans = ['Semua', ...Array.from(new Set(tempatIbadahData.map((item) => item.kelurahan)))]

  const filteredData = tempatIbadahData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesKelurahan = selectedKelurahan === 'Semua' || item.kelurahan === selectedKelurahan
    return matchesSearch && matchesKelurahan
  })

  return (
    <div className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500/10 to-transparent pt-16 pb-20 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-200/50">
            Fasilitas Keagamaan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Direktori Tempat Ibadah
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Daftar masjid jami dan tempat ibadah resmi di wilayah binaan KUA Kecamatan Karawang Barat beserta info legalitas tanah wakaf.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-200 pb-8">
          {/* Kelurahan Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {kelurahans.map((kel) => (
              <button
                key={kel}
                onClick={() => setSelectedKelurahan(kel)}
                className={`px-4 py-2 rounded-xl font-nunito font-bold text-xs sm:text-sm transition-all ${
                  selectedKelurahan === kel
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-gray-200 text-text-primary hover:bg-gray-50'
                }`}
              >
                {kel}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama masjid/alamat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-sm"
            />
          </div>
        </div>

        {/* Grid List */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredData.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-lg bg-teal-500/10 text-teal-700 font-nunito font-extrabold text-[10px] uppercase tracking-wider">
                      {place.type}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-roboto text-[10px] border font-medium ${
                      place.status.includes('Tersertifikasi')
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {place.status}
                    </span>
                  </div>

                  <h3 className="font-nunito font-extrabold text-lg text-text-primary group-hover:text-primary leading-snug">
                    {place.name}
                  </h3>

                  <div className="space-y-2.5 text-xs text-text-secondary font-roboto">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{place.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <User className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Ketua DKM / Nazhir: <strong>{place.nazhir}</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Kapasitas: {place.capacity}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-nunito font-extrabold text-xs text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                    Kel. {place.kelurahan}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(place.name + ' Karawang')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-nunito font-bold text-xs text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Buka Peta
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center py-12 bg-white rounded-3xl border border-dashed border-gray-200">
            <Landmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="font-nunito font-bold text-lg text-text-primary">Tidak ada tempat ibadah ditemukan</h3>
            <p className="font-roboto text-sm text-text-secondary mt-1">Ganti kata kunci pencarian atau filter desa.</p>
          </div>
        )}
      </section>
    </div>
  )
}
