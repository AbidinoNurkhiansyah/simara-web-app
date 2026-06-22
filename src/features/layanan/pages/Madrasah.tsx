import { useState } from 'react'
import { GraduationCap, Search, MapPin, User, Award, Map } from 'lucide-react'

// Dummy Data Madrasah
const madrasahData = [
  {
    id: 1,
    name: 'MIN 1 Karawang',
    level: 'MI (Ibtidaiyah)',
    kelurahan: 'Nagasari',
    address: 'Jl. Ahmad Yani No.14, Nagasari, Kec. Karawang Barat',
    principal: 'Hj. Siti Aminah, S.Pd.I.',
    accreditation: 'A',
    status: 'Negeri',
    students: '620 Siswa'
  },
  {
    id: 2,
    name: 'MTsN 1 Karawang',
    level: 'MTs (Tsanawiyah)',
    kelurahan: 'Karawang Kulon',
    address: 'Jl. Alun-Alun Barat No.4, Karawang Kulon, Kec. Karawang Barat',
    principal: 'Drs. H. Syarifudin, M.Pd.',
    accreditation: 'A',
    status: 'Negeri',
    students: '840 Siswa'
  },
  {
    id: 3,
    name: 'MAN 1 Karawang',
    level: 'MA (Aliyah)',
    kelurahan: 'Tanjungpura',
    address: 'Jl. Proklamasi No.112, Tanjungpura, Kec. Karawang Barat',
    principal: 'H. Sutisna, S.Ag., M.Pd.',
    accreditation: 'A',
    status: 'Negeri',
    students: '980 Siswa'
  },
  {
    id: 4,
    name: 'RA Perwanida Karawang',
    level: 'RA (Raudhatul Athfal)',
    kelurahan: 'Nagasari',
    address: 'Jl. Kutakarya No.8, Nagasari, Kec. Karawang Barat',
    principal: 'Euis Marlina, S.Pd.',
    accreditation: 'A',
    status: 'Swasta',
    students: '120 Siswa'
  },
  {
    id: 5,
    name: 'MDT Al-Barokah Tunggakjati',
    level: 'MDT (Diniyah Takmiliyah)',
    kelurahan: 'Tunggakjati',
    address: 'Jl. Syeh Quro, Tunggakjati, Kec. Karawang Barat',
    principal: 'Ust. Abdul Halim',
    accreditation: 'B',
    status: 'Swasta',
    students: '80 Siswa'
  },
  {
    id: 6,
    name: 'MTs Al-Ihsan Adiarsa',
    level: 'MTs (Tsanawiyah)',
    kelurahan: 'Adiarsa Barat',
    address: 'Jl. Adiarsa Raya No.24, Adiarsa Barat, Kec. Karawang Barat',
    principal: 'H. Mulyadi, S.Ag.',
    accreditation: 'B',
    status: 'Swasta',
    students: '310 Siswa'
  }
]

export default function Madrasah() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('Semua')

  const levels = ['Semua', 'RA', 'MI', 'MTs', 'MA', 'MDT']

  const filteredData = madrasahData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel === 'Semua' || item.level.startsWith(selectedLevel)
    return matchesSearch && matchesLevel
  })

  return (
    <div className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-500/10 to-transparent pt-16 pb-20 border-b border-blue-100">
        <div className="container-custom text-center space-y-4">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-200/50">
            Lembaga Pendidikan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Direktori Madrasah Binaan
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Daftar Raudhatul Athfal (RA), Madrasah Ibtidaiyah (MI), Tsanawiyah (MTs), Aliyah (MA), dan MDT di bawah koordinasi pengawasan KUA Karawang Barat.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-200 pb-8">
          {/* Level Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2 rounded-xl font-nunito font-bold text-xs sm:text-sm transition-all ${
                  selectedLevel === lvl
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-gray-200 text-text-primary hover:bg-gray-50'
                }`}
              >
                {lvl === 'Semua' ? 'Semua Jenjang' : lvl}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama madrasah/alamat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-sm"
            />
          </div>
        </div>

        {/* Grid List */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredData.map((sch) => (
              <div
                key={sch.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Badge */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-700 font-nunito font-extrabold text-[10px] uppercase tracking-wider">
                      {sch.level}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full font-roboto text-[10px] border border-gray-200 font-medium bg-gray-50 text-gray-600">
                      Status: {sch.status}
                    </span>
                  </div>

                  <h3 className="font-nunito font-extrabold text-lg text-text-primary group-hover:text-primary leading-snug">
                    {sch.name}
                  </h3>

                  <div className="space-y-2.5 text-xs text-text-secondary font-roboto">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{sch.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <User className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Kepala Madrasah: <strong>{sch.principal}</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Kuantitas: {sch.students}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="flex items-center gap-1 font-nunito font-extrabold text-xs text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    Akreditasi {sch.accreditation}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(sch.name + ' Karawang')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-nunito font-bold text-xs text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Peta Lokasi
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center py-12 bg-white rounded-3xl border border-dashed border-gray-200">
            <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="font-nunito font-bold text-lg text-text-primary">Tidak ada madrasah ditemukan</h3>
            <p className="font-roboto text-sm text-text-secondary mt-1">Ganti kata kunci pencarian atau filter jenjang.</p>
          </div>
        )}
      </section>
    </div>
  )
}
