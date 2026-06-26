import { MapPin, Calendar } from "lucide-react";

export function ProgramDetailContent() {
  return (
    <section className="container-custom py-8 md:py-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Info */}
        <div className="mb-8 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3e28] mb-6 leading-tight">
            Kegiatan Bimbingan Remaja Usia Sekolah (BRUS) di SMKN 1 Karawang
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#16a34a]" />
              <span className="font-medium">Kamis, 29 Agustus 2024</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#16a34a]" />
              <span className="font-medium">
                Auditorium Utama Kampus SMKN 1 Karawang
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-loose space-y-6 text-justify">
          <p>
            Sebanyak 50 siswa-siswi SMKN 1 Karawang mengikuti kegiatan Bimbingan
            Remaja Usia Sekolah (BRUS) yang digelar oleh Kantor Urusan Agama
            Kecamatan Karawang Barat, bertempat di Auditorium Utama Kampus SMKN
            1 Karawang, Kamis (29/08/2024).
          </p>
          <p>
            Turut hadir dalam kegiatan BRUS, Kepala Kantor Urusan Agama
            Kecamatan Karawang Barat, H. Hamid Dulmajid, S.HI, Wakil Kepala
            Sekolah Bidang Kurikulum SMKN 1 Karawang Hj. Diah Gustanti, ST,.MT,
            Guru PAI SMKN 1 Karawang, Asep Saeful Rohman, S.Ag,.M.Pd , Penyuluh
            Satpel -KB Kecamatan Karawang barat dan Penyuluh Agama Islam PAIF
            dan P3K sebagai narasumber.
          </p>
          <p>
            Wakil Kepala Sekolah Bidang Kurikulum Hj. Diah Gustanti mengucapkan
            terima kasih kepada Kepala KUA Karawang Barat yang sudah menggelar
            Bimbingan pra nikah bagi remaja usia sekolah di SMKN 1 Karawang.
          </p>
          <p className="italic border-l-4 border-[#16a34a] pl-5 bg-[#16a34a]/5 py-4 pr-4 rounded-r-xl font-medium text-gray-800">
            "Dengan adanya kegiatan ini anak-anak kami siswa siswi SMKN 1
            karawang dapat menambah ilmu dan wawasan tentang dampak dari
            pernikahan dini. Saya berharap siswa siswi yang ikut kegiatan ini
            juga bisa berbagi ilmu kepada temen temn nya yang tidak ikut acara
            ini," ujarnya.
          </p>
          <p>
            Dalam sesi materi, Penyuluh Agama Islam H. Didin Shabudin
            menyampaikan bahwa pernikahan dini akan melahirkan berbagai masalah,
            mulai dari anak stunting, terjadinya percekcokan sampai perceraian,
            angka kematian ibu dan bayi, angka putus sekolah pada anak, angka
            kemiskinan yang dapat semakin meningkat akibat adanya pernikahan
            dini.
          </p>
          <p>
            Sementara Itu, Kepala KUA H. Hamid Dulmajid menjelaskan salah satu
            pilar utama dalam program ini adalah penanaman pendidikan keagamaan
            yang kuat. Dengan pemahaman agama yang baik, remaja diharapkan
            memiliki pegangan moral yang kokoh sehingga mampu menahan diri dari
            perbuatan yang melanggar norma dan nilai agama.
          </p>
          <p className="italic border-l-4 border-[#16a34a] pl-5 bg-[#16a34a]/5 py-4 pr-4 rounded-r-xl font-medium text-gray-800">
            "Pendidikan agama juga membantu mereka memahami pentingnya menunda
            pernikahan hingga waktu yang tepat, yaitu ketika mereka sudah siap
            secara mental, fisik, dan finansial," ucap Hamid menjelaskan.
          </p>
          <p>
            Hamid berharap dengan adanya program ini, diharapkan prevalensi
            pernikahan anak dapat ditekan secara signifikan. Remaja yang
            teredukasi dengan baik akan memiliki visi dan misi yang jelas dalam
            hidupnya, serta mampu merencanakan masa depan yang lebih baik tanpa
            terjebak dalam pernikahan dini yang seringkali membawa banyak
            masalah.
          </p>
        </div>
      </div>
    </section>
  );
}
