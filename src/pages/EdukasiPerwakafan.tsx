import { PageHero } from "../components/PageHero";
import { HandCoins, ScrollText, Building2, HeartHandshake, ArrowRight } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600";

export default function EdukasiPerwakafan() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <PageHero
        badge="Edukasi"
        title="Perwakafan"
        imageSrc={heroImg}
        imageAlt="Edukasi Perwakafan"
        imageClassName="w-full h-full object-cover object-center md:object-top brightness-[0.65]"
      >
        <p className="text-white/90 text-lg md:text-xl font-roboto mt-2 max-w-2xl drop-shadow-sm">
          Tata cara, literasi, dan pendaftaran mengenai wakaf produktif
        </p>
      </PageHero>

      <section className="py-16 md:py-24 container-custom">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Intro Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/15 inline-block">
              Literasi Wakaf
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">Amal Jariyah Tanpa Putus</h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              Wakaf adalah instrumen filantropi Islam berupa menahan harta benda yang memiliki nilai guna tahan lama untuk dimanfaatkan demi kemaslahatan umat. Mari pahami peran wakaf sebagai mesin penggerak ekonomi kerakyatan dan amal yang pahalanya terus mengalir selamanya.
            </p>
          </div>

          {/* Key Principles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Wakaf Tidak Bergerak</h3>
                <p className="text-text-secondary leading-relaxed">
                  Menyumbangkan tanah atau bangunan (seperti masjid, pondok pesantren, asrama yatim) yang manfaatnya dirasakan langsung oleh masyarakat luas.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-accent/20 text-accent-hover rounded-2xl">
                <HandCoins className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Wakaf Uang (Cash Waqf)</h3>
                <p className="text-text-secondary leading-relaxed">
                  Bentuk wakaf kekinian di mana nilai uangnya dijaga (tidak boleh berkurang), dan imbal hasil dari pengelolaannya disalurkan untuk kegiatan sosial produktif.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
                <ScrollText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Sertifikasi & Legalitas</h3>
                <p className="text-text-secondary leading-relaxed">
                  Langkah penting dalam melegalkan tanah wakaf dengan mendaftarkan Ikrar Wakaf di KUA (PPAIW) agar mendapat kekuatan hukum tetap dari negara (BPN).
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-text-primary mb-3">Peran Nadzir</h3>
                <p className="text-text-secondary leading-relaxed">
                  Pihak yang menerima, mengelola, dan mengembangkan aset wakaf agar lebih produktif, profesional, serta sesuai dengan niat awal si pemberi wakaf (Wakif).
                </p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] p-8 md:p-14 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">Alur Pendaftaran Tanah Wakaf</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">Untuk melindungi aset umat, setiap tanah yang diwakafkan wajib dicatatkan secara hukum melalui KUA.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Siapkan Dokumen Tanah", desc: "Pastikan sertifikat hak milik (SHM), girik, atau bukti kepemilikan tanah ada pada pihak Wakif (pemberi wakaf) dan bebas dari sengketa." },
                  { title: "Kumpulkan Identitas", desc: "Siapkan KTP & KK Wakif, KTP Nadzir (pengelola), serta identitas dari sekurang-kurangnya 2 orang saksi." },
                  { title: "Ikrar Wakaf di KUA", desc: "Mendatangi KUA bersama Nadzir dan saksi. Kepala KUA bertindak sebagai Pejabat Pembuat Akta Ikrar Wakaf (PPAIW) untuk mengesahkan dokumen." },
                  { title: "Penerbitan AIW", desc: "KUA akan menerbitkan Akta Ikrar Wakaf (AIW). Dokumen ini menjadi dasar pengajuan pengesahan tanah wakaf di Badan Pertanahan Nasional (BPN)." }
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
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-sm">Konsultasi Layanan Perwakafan</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Jangan tunda niat baik Anda. Tim KUA siap mendampingi Anda dalam pencatatan Ikrar Wakaf demi melindungi aset umat dari potensi sengketa hukum.
            </p>
            
            <a href="/layanan/wakaf" className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent-hover px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
              Pelajari Layanan Wakaf
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
