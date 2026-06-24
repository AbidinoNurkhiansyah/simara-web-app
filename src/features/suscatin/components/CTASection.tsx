import { Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import apkImg from "@/assets/suscatin-apk.webp";

export function CTASection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top text */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h3 className="text-lg md:text-xl font-bold text-primary leading-relaxed">
            Belum paham atau ada yang ingin ditanyakan?, silahkan bisa hubungi
            kami untuk penjelasan lebih lanjutnya, Terima kasih ...
          </h3>
        </div>

        {/* App CTA */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Phone Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={apkImg}
              alt="Aplikasi SiMaRa Mobile"
              className="max-w-[200px] md:max-w-[240px] drop-shadow-xl"
            />
          </div>

          {/* CTA Content */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-extrabold text-text-primary flex items-center justify-center md:justify-start gap-2">
              <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
              Sudah siap ikut Suscatin?
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Download aplikasi{" "}
              <span className="font-bold text-primary">SiMaRa Mobile</span>{" "}
              biar kamu bisa atur jadwal dan siapkan dokumen dengan mudah.
            </p>

            <div className="pt-4">
              <Button
                asChild
                className="gap-2 bg-primary text-white px-6 py-3 h-auto rounded-xl font-nunito font-extrabold text-sm md:text-base hover:bg-primary-hover shadow-md hover:shadow-lg transition-all"
              >
                <a href="#">
                  <Download className="w-5 h-5" />
                  Klik disini untuk unduh aplikasinya
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
