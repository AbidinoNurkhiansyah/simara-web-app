import { FileText, CheckCircle2, Award, ExternalLink } from 'lucide-react'

export default function Suscatin() {
  const requirements = [
    'Fotokopi KTP & Kartu Keluarga (KK) masing-masing 2 lembar',
    'Fotokopi Akta Kelahiran/Surat Kenal Lahir masing-masing 2 lembar',
    'Pasfoto ukuran 2x3 (latar biru) masing-masing 4 lembar',
    'Pasfoto ukuran 4x6 (latar biru) masing-masing 2 lembar',
    'Surat Keterangan Kematian (jika duda/janda cerai mati)',
    'Surat Izin Komandan (bagi anggota TNI/POLRI)',
    'Surat Keterangan Pengantar dari Kelurahan (N1 - N4)'
  ]

  const benefits = [
    { title: 'Pemahaman Regulasi', desc: 'Materi hukum perkawinan Islam dan undang-undang perkawinan di Indonesia.' },
    { title: 'Psikologi Keluarga', desc: 'Kiat-kiat mengelola emosi, menghadapi konflik rumah tangga, dan komunikasi efektif.' },
    { title: 'Kesehatan Reproduksi', desc: 'Pembekalan medis mengenai kesehatan seksual, perencanaan kehamilan, dan stunting.' },
    { title: 'Manajemen Keuangan', desc: 'Perencanaan anggaran belanja rumah tangga, menabung, serta investasi masa depan.' }
  ]

  return (
    <div className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-500/10 to-transparent pt-16 pb-20 border-b border-rose-100">
        <div className="container-custom text-center space-y-4">
          <span className="text-rose-600 font-bold text-xs uppercase tracking-widest bg-rose-500/10 px-4 py-1.5 rounded-full border border-rose-200/50">
            Bimbingan Pranikah
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Kursus Calon Pengantin (Suscatin)
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Mempersiapkan bekal spiritual, mental, kesehatan, dan hukum menuju mahligai pernikahan yang kokoh dan sakinah.
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Sisi Kiri: Deskripsi & Manfaat */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-text-primary">Tentang Program Suscatin</h2>
              <p className="font-roboto text-text-secondary text-sm md:text-base leading-relaxed">
                Bimbingan Perkawinan (Bimwin) atau Suscatin merupakan program pembekalan wajib bagi seluruh calon pengantin yang mendaftarkan pernikahan di KUA Karawang Barat. Kursus ini dilaksanakan selama dua hari kerja secara kolektif dengan menghadirkan narasumber dari KUA, Dinas Kesehatan, dan psikolog keluarga.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                <Award className="w-5 h-5 text-rose-500" />
                Materi Pembekalan Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((bn, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm space-y-2">
                    <h4 className="font-nunito font-extrabold text-sm text-primary">{bn.title}</h4>
                    <p className="font-roboto text-xs text-text-secondary leading-relaxed">{bn.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Syarat Pendaftaran */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
            <h3 className="font-nunito font-extrabold text-lg text-primary border-b border-gray-100 pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-rose-500" />
              Persyaratan Dokumen
            </h3>
            <ul className="space-y-3 font-roboto text-xs sm:text-sm text-text-secondary">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="https://simkah4.kemenag.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-white font-nunito font-extrabold text-sm hover:bg-primary-hover shadow-md hover:shadow-lg transition-all"
              >
                Daftar Online di Simkah
                <ExternalLink className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
