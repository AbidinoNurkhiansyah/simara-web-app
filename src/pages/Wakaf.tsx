import { PageHero } from "@/components/PageHero";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Wakaf() {
  const requirements = [
    {
      title: "Surat permohonan pendaftaran tanah wakaf",
      image: "/src/assets/form-wakaf/1.webp",
    },
    {
      title: "Surat Keterangan Kepala Kelurahan tentang Perwakafan Tanah Milik",
      image: "/src/assets/form-wakaf/2.webp",
    },
    {
      title: "Surat Keterangan & Pernyataan Ahli Waris",
      image: "/src/assets/form-wakaf/3.webp",
    },
    {
      title: "Surat Pernyataan Kesediaan Menjadi Nazhir",
      image: "/src/assets/form-wakaf/4.webp",
    },
    {
      title: "Surat Bersedia di Audit",
      image: "/src/assets/form-wakaf/5.webp",
    },
    {
      title:
        "Identitas Berupa fotocopy KTP wakif, nazhir, dan saksi dalam rangkaian administrasi wakaf.",
      image: "/src/assets/form-wakaf/6.webp",
    },
    {
      title: "Surat Pernyataan Status Tanah Tidak Sengketa",
      image: "/src/assets/form-wakaf/7.webp",
    },
    {
      title: "Daftar Hadir Musyawarah Pembentukan Nazhir",
      image: "/src/assets/form-wakaf/8.webp",
    },
  ];

  return (
    <div className="pb-24 bg-gray-50">
      <PageHero
        badge="Edukasi"
        title={<span className="text-accent text-6xl">Perwakaf-an</span>}
        imageSrc="/src/assets/wakaf-hero.webp"
        imageAlt="Edukasi Wakaf"
        imageClassName="w-full h-full object-cover object-[80%_top] md:object-top"
      />

      {/* Main Content */}
      <section className="container-custom">
        <div className="max-w-5xl mt-10 lg:mt-16 mx-auto space-y-12">
          {/* Intro */}
          <p className="text-text-secondary text-sm md:text-base leading-relaxed indent-8 text-justify">
            Wakaf adalah salah satu bentuk amal jariah dalam Islam yang
            melibatkan pengalihan kepemilikan suatu aset (harta benda) untuk
            digunakan demi kepentingan umum atau ibadah, dengan tujuan
            memperoleh ridha Allah. Aset yang diwakafkan tidak boleh dijual,
            diwariskan, atau dialihkan kepemilikannya, melainkan harus tetap
            terjaga agar manfaatnya dapat berlangsung secara berkelanjutan.
          </p>

          {/* Unsur-unsur */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              1. Unsur-unsur Wakaf
            </h2>
            <ul className="space-y-3 text-text-secondary text-sm md:text-base leading-relaxed list-disc pl-6">
              <li>
                <span className="font-bold text-text-primary">Wakif :</span>{" "}
                Orang yang memberikan harta wakaf.
              </li>
              <li>
                <span className="font-bold text-text-primary">
                  Mauquf (Harta Wakaf) :
                </span>{" "}
                Harta yang diwakafkan, harus berupa harta yang memiliki nilai
                dan bersifat kekal, seperti tanah, bangunan, uang (wakaf tunai),
                atau aset lain yang tidak habis sekali pakai.
              </li>
              <li>
                <span className="font-bold text-text-primary">
                  Mauquf ‘Alaih :
                </span>{" "}
                Pihak atau institusi yang menerima manfaat dari wakaf, misalnya
                masjid, sekolah, rumah sakit, atau masyarakat umum
              </li>
              <li>
                <span className="font-bold text-text-primary">Nazhir :</span>{" "}
                Pengelola atau pihak yang ditunjuk untuk menjaga, mengelola, dan
                mendistribusikan hasil dari harta wakaf sesuai tujuan wakaf.
              </li>
            </ul>
          </div>

          {/* Jenis */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              2. Jenis Wakaf
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
              <li>
                <span className="font-bold">Wakaf Ahli (Keluarga) :</span>{" "}
                Ditujukan untuk keluarga atau kerabat dekat wakif. Setelah tidak
                ada lagi penerima manfaat dalam keluarga, aset wakaf dialihkan
                untuk kepentingan umum.
              </li>
              <li>
                <span className="font-bold">Wakaf Khairi (Umum) :</span>{" "}
                Ditujukan sepenuhnya untuk kepentingan umum atau amal, seperti
                pembangunan fasilitas ibadah, pendidikan, kesehatan, atau
                lainnya.
              </li>
            </ul>
          </div>

          {/* Berkas Persyaratan */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              3. Berkas Persyaratan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col h-full gap-4 ${
                    idx === 6 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                    <h3 className="font-semibold text-gray-700 text-lg">
                      {req.title}
                    </h3>
                  </div>
                  <div
                    className={`mt-auto w-full ${
                      idx === 6 ? "aspect-[3/2]" : "aspect-[3/4]"
                    } bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden`}
                  >
                    <img
                      src={req.image}
                      alt={req.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-12 pb-8 text-center border-t border-gray-100">
            <h3 className="text-primary text-xl md:text-2xl font-bold leading-relaxed max-w-4xl mx-auto">
              Belum paham atau ada yang ingin di tanyakan ?, silahkan bisa
              hubungi kami untuk penjelasan lebih lanjutnya, Terima kasih ...
            </h3>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
}
