import { useState, useEffect } from "react";
import { officeImages, sejarahInfo } from "../constants";

export function SejarahSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % officeImages.length);
    }, 4000); // Ganti gambar setiap 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Sisi Kiri: Foto/Visual Kantor (Bento Grid) */}
        <div className="lg:col-span-5 grid grid-cols-2 grid-rows-3 gap-3 w-full aspect-square lg:aspect-[4/5]">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-md border border-gray-100">
            {officeImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gedung Utama KUA PUSAKA Karawang Barat ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-left z-20">
              <span className="text-accent font-nunito font-extrabold text-[10px] uppercase tracking-widest block">
                Gedung Utama
              </span>
              <h4 className="text-white font-nunito font-bold text-sm mt-0.5">
                KUA PUSAKA Karawang Barat
              </h4>
            </div>
          </div>

          {/* Small image 1 */}
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {officeImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Fasilitas KUA ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === (currentIndex + 1) % officeImages.length
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          {/* Small image 2 */}
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {officeImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Fasilitas KUA ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === (currentIndex + 2) % officeImages.length
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sisi Kanan: Teks Sejarah */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            <span className="font-nunito font-extrabold text-sm uppercase tracking-wider">
              Sejarah Singkat
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
            {sejarahInfo.title}
          </h2>
          <div className="font-roboto text-text-secondary text-sm md:text-base space-y-4 leading-relaxed">
            {sejarahInfo.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
