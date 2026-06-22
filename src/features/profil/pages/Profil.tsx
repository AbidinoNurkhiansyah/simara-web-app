import { Target, MapPin, Phone, Mail, Clock, ShieldCheck, Award, Eye } from 'lucide-react'

export default function Profil() {
  return (
    <div className="pb-24 space-y-20">
      {/* 1. Header Hero Page */}
      <section className="bg-gradient-to-br from-primary/10 to-transparent pt-16 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/15">
            Kenali Kami Lebih Dekat
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Profil KUA PUSAKA Karawang Barat
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Sejarah, visi-misi, tata nilai operasional, dan kepengurusan Kantor Urusan Agama Kecamatan Karawang Barat.
          </p>
        </div>
      </section>

      {/* 2. Foto KUA & Sejarah Singkat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sisi Kiri: Foto/Visual Kantor */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3 scale-102"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1541829019-259276a7f85c?auto=format&fit=crop&q=80&w=800"
                alt="Kantor KUA PUSAKA Karawang Barat"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
                <span className="text-accent font-nunito font-extrabold text-xs uppercase tracking-widest block">Gedung Utama</span>
                <h4 className="text-white font-nunito font-bold text-sm mt-1">KUA PUSAKA Kecamatan Karawang Barat</h4>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Teks Sejarah */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              <span className="font-nunito font-extrabold text-sm uppercase tracking-wider">Sejarah Singkat</span>
            </div>
            <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
              Mengabdi untuk Kemaslahatan Umat Sejak Pendirian
            </h2>
            <div className="font-roboto text-text-secondary text-sm md:text-base space-y-4 leading-relaxed">
              <p>
                Kantor Urusan Agama (KUA) Kecamatan Karawang Barat didirikan sebagai bagian dari perpanjangan tangan Kantor Kementerian Agama Kabupaten Karawang di tingkat kecamatan. Seiring waktu, KUA Karawang Barat terus berbenah secara fisik maupun layanan administratif keagamaan untuk menyesuaikan dengan pertumbuhan penduduk.
              </p>
              <p>
                Pada tahun 2021, KUA Karawang Barat terpilih menjadi salah satu pilot project program **KUA PUSAKA** (Pusat Layanan Keagamaan) oleh Kementerian Agama RI. Revitalisasi ini mengedepankan digitalisasi layanan, perbaikan sarana prasarana yang inklusif, peningkatan kompetensi SDM, serta perluasan cakupan program keagamaan di luar pencatatan nikah semata.
              </p>
              <p>
                Kini, kami berkomitmen menjadi instansi terdepan dalam membina hubungan harmonis umat beragama serta melayani bimbingan pranikah dan keluarga sakinah dengan standar kualitas nasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi Misi & Nilai Dasar */}
      <section className="bg-primary/5 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary/30 mr-[-10px] mt-[-10px]" />
              </div>
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-nunito font-extrabold text-xl text-primary">Visi Kami</h3>
              <p className="font-roboto text-sm md:text-base text-text-secondary leading-relaxed">
                "Terwujudnya masyarakat Kecamatan Karawang Barat yang taat beragama, rukun, cerdas, sejahtera lahir batin, serta keluarga sakinah yang kokoh demi mendukung Indonesia yang maju."
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-left space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary/30 mr-[-10px] mt-[-10px]" />
              </div>
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-nunito font-extrabold text-xl text-primary">Misi Kami</h3>
              <ul className="font-roboto text-sm md:text-base text-text-secondary space-y-3 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Meningkatkan kualitas pelayanan pencatatan pernikahan, bimbingan pranikah, dan kemitraan umat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Membina dan mengamankan aset wakaf secara legal, tertib, dan bernilai guna ekonomi tinggi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Memperkuat edukasi keagamaan inklusif bagi seluruh lapisan masyarakat madrasah & pengurus tempat ibadah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>Mendorong toleransi serta kerukunan umat beragama demi ketenteraman Karawang Barat.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Lokasi Kantor & Embed Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Lokasi Kantor KUA</h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Anda dapat berkunjung langsung ke kantor operasional kami di jam dinas atau menghubungi kami melalui peta interaktif berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Detail Alamat Fisik */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-left flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="font-nunito font-extrabold text-lg text-primary border-b border-gray-100 pb-3">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="font-roboto text-sm text-text-primary">
                    <p className="font-bold">Alamat Fisik</p>
                    <p className="text-text-secondary mt-0.5">Jl. Raya Karawang Barat No.12, Karawang Kulon, Kec. Karawang Barat, Kab. Karawang, Jawa Barat 41311</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="font-roboto text-sm text-text-primary">
                    <p className="font-bold">Nomor Telepon</p>
                    <p className="text-text-secondary mt-0.5">(0267) 123456</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="font-roboto text-sm text-text-primary">
                    <p className="font-bold">Email Kantor</p>
                    <p className="text-text-secondary mt-0.5">kua.karawangbarat@kemenag.go.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div className="font-roboto text-xs text-text-secondary text-left">
                <p className="font-bold text-primary">Jam Operasional</p>
                <p>Senin-Kamis: 07:30 - 16:00 WIB</p>
                <p>Jumat: 07:30 - 16:30 WIB</p>
              </div>
            </div>
          </div>

          {/* Google Map Iframe */}
          <div className="lg:col-span-8 h-80 sm:h-96 lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-gray-150 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.856956693892!2d107.2913166!3d-6.3045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977df76f1c42f%3A0xe54df66138676d29!2sKarawang+Kulon%2C+West+Karawang%2C+Karawang+Regency%2C+West+Java!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Lokasi KUA Karawang Barat"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
