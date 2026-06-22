import { FileText, CheckCircle2, HelpCircle } from 'lucide-react'

export default function Wakaf() {
  const requirements = [
    'Surat Pengantar dari RT/RW & Kepala Desa/Lurah setempat',
    'Sertifikat Hak Milik (SHM) asli atau bukti kepemilikan tanah sah',
    'Fotokopi KTP Wakif (Pemberi Wakaf) & KK',
    'Fotokopi KTP Nazhir (Pengelola Wakaf) minimal 3 orang',
    'Surat Pernyataan bahwa tanah tidak dalam sengketa/jaminan bank',
    'Surat Keterangan Kematian (jika wakif telah meninggal dan diwakili ahli waris)'
  ]

  const alurWakaf = [
    { step: 1, title: 'Permohonan ke KUA', desc: 'Wakif dan Nazhir mengajukan permohonan pendaftaran ke KUA dengan berkas lengkap.' },
    { step: 2, title: 'Pemeriksaan Lapangan', desc: 'Petugas KUA bersama penyuluh mengukur dan memverifikasi batas-batas tanah di lokasi.' },
    { step: 3, title: 'Ikrar Wakaf (AIW)', desc: 'Wakif mengucapkan Ikrar Wakaf di hadapan Kepala KUA selaku PPAIW (Pejabat Pembuat Akta Ikrar Wakaf) dan disaksikan saksi.' },
    { step: 4, title: 'Penandatanganan Akta', desc: 'Penandatanganan dokumen AIW/APAIW oleh Wakif, Nazhir, Saksi, dan Kepala KUA.' },
    { step: 5, title: 'Pengajuan ke BPN', desc: 'KUA memproses berkas AIW untuk diajukan ke BPN guna menerbitkan Sertifikat Tanah Wakaf.' }
  ]

  return (
    <div className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-500/10 to-transparent pt-16 pb-20 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-200/50">
            Administrasi Wakaf
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Layanan Pengamanan Aset Wakaf
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Panduan lengkap legalitas tanah wakaf tempat ibadah (masjid/musala) dan lembaga pendidikan Islam agar aman berkepastian hukum.
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Sisi Kiri: Alur Pendaftaran */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-text-primary">Alur Sertifikasi Tanah Wakaf</h2>
              <p className="font-roboto text-text-secondary text-sm md:text-base leading-relaxed">
                PPAIW (Pejabat Pembuat Akta Ikrar Wakaf) di KUA Karawang Barat memfasilitasi pembuatan **Akta Ikrar Wakaf (AIW)** secara gratis untuk mengamankan tempat ibadah dan sarana umat lainnya dari potensi sengketa hukum di masa depan.
              </p>
            </div>

            <div className="space-y-6">
              {alurWakaf.map((al, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-150 shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-nunito font-extrabold text-base">
                    {al.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-nunito font-bold text-base text-text-primary">{al.title}</h4>
                    <p className="font-roboto text-xs sm:text-sm text-text-secondary leading-relaxed">{al.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Syarat Pendaftaran */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
            <h3 className="font-nunito font-extrabold text-lg text-primary border-b border-gray-100 pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              Syarat Akta Ikrar Wakaf (AIW)
            </h3>
            <ul className="space-y-3 font-roboto text-xs sm:text-sm text-text-secondary">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200/50 flex gap-3 text-left">
              <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="font-roboto text-xs text-amber-900 leading-relaxed">
                <p className="font-bold">Butuh Bantuan Konsultasi?</p>
                <p className="mt-0.5">Silakan datang langsung ke KUA Karawang Barat pada hari kerja atau hubungi penyuluh wakaf kami untuk pendampingan berkas gratis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
