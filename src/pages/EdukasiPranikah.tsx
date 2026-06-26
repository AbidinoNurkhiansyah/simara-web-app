import { PageHero } from "../components/PageHero";
import { Brain, HeartPulse, Wallet, FileCheck, ArrowRight } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1600";

export default function EdukasiPranikah() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <PageHero
        badge="Edukasi"
        title="Pranikah"
        imageSrc={heroImg}
        imageAlt="Edukasi Pranikah"
        imageClassName="w-full h-full object-cover object-center md:object-top"
      >
        <p className="text-white/90 text-lg md:text-xl font-roboto mt-2 max-w-2xl drop-shadow-sm">
          Persiapan mental dan spiritual sebelum memasuki gerbang pernikahan
        </p>
      </PageHero>

      <section className="py-16 md:py-24 container-custom">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Intro Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/15 inline-block">
              Bimbingan Pranikah
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">Kesiapan Utuh Menuju Akad</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              Pernikahan bukan hanya soal resepsi dan kemeriahan sesaat, melainkan perjalanan panjang menyatukan dua visi. Kesiapan fisik, mental, finansial, serta pemahaman agama yang matang sangat menentukan ketahanan rumah tangga di masa depan.
            </p>
          </div>

          {/* Key Principles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Kematangan Psikologis</h3>
                <p className="text-text-secondary leading-relaxed">
                  Menyelaraskan ego, mengenali karakter pasangan, dan mempersiapkan mental dalam menghadapi berbagai tekanan pasca-pernikahan.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-accent/20 text-accent-hover rounded-2xl">
                <HeartPulse className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Skrining Kesehatan</h3>
                <p className="text-text-secondary leading-relaxed">
                  Pentingnya tes kesehatan pranikah (premarital check-up) untuk mendeteksi penyakit genetik atau menular demi generasi keturunan yang sehat.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                <Wallet className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Perencanaan Finansial</h3>
                <p className="text-text-secondary leading-relaxed">
                  Membangun transparansi keuangan, menetapkan prioritas belanja rumah tangga, dan menyiapkan dana darurat bersama pasangan.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                <FileCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Administrasi & Legalitas</h3>
                <p className="text-text-secondary leading-relaxed">
                  Melengkapi berkas N1-N4, surat pengantar RT/RW, dan mengikuti Bimbingan Perkawinan (Bimwin) yang diwajibkan oleh KUA.
                </p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] p-8 md:p-14 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">Ceklis Persiapan Pranikah</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">Pastikan Anda telah melewati beberapa tahapan krusial ini sebelum mendaftar di KUA.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Sertifikat Elsimil", desc: "Mengisi aplikasi Elektronik Siap Nikah dan Hamil (Elsimil) yang dikeluarkan BKKBN sebagai langkah deteksi risiko stunting." },
                  { title: "Surat Keterangan Sehat", desc: "Melakukan pemeriksaan darah, Hb, dan suntik TT (Tetanus Toxoid) di puskesmas rujukan." },
                  { title: "Bimbingan Perkawinan (Bimwin)", desc: "Mengikuti kelas pranikah resmi di KUA setempat guna mendapat bekal ilmu seputar hukum munakahat dan manajemen rumah tangga." },
                  { title: "Persiapan Berkas Fisik", desc: "Mempersiapkan KTP, KK, Akta Kelahiran, Surat Pengantar Kelurahan, dan pas foto sesuai ketentuan perundang-undangan." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white font-black text-xl flex items-center justify-center shadow-inner">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-text-primary text-lg mb-1">{item.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-sm">Ikuti Kursus Calon Pengantin</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Dapatkan sertifikat Suscatin dan bekal ilmu langsung dari penyuluh KUA yang tersertifikasi. Persiapkan rumah tangga yang kokoh sejak hari pertama.
            </p>
            
            <a href="/layanan/suscatin" className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent-hover px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
              Daftar Suscatin KUA
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
