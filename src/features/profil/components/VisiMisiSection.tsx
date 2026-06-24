import { Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { misiList } from "../constants";

export function VisiMisiSection() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-white py-20 border-y border-gray-100 relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom space-y-16 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-2">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
            Visi & Misi
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Komitmen kami dalam memberikan pelayanan terbaik untuk kemaslahatan
            umat di Karawang Barat.
          </p>
        </div>

        {/* Visi */}
        <Card className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-primary/10 text-center relative overflow-hidden group max-w-4xl mx-auto flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20 transition-transform duration-700 group-hover:scale-110"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-3 text-primary justify-center w-full">
              <span className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"></span>
              <span className="font-nunito font-extrabold text-sm md:text-base uppercase tracking-widest">
                Visi Utama
              </span>
              <span className="w-12 h-1 bg-gradient-to-l from-transparent to-primary rounded-full"></span>
            </div>
            <p className="font-roboto text-xl md:text-3xl font-medium text-text-primary leading-relaxed italic px-4 md:px-12">
              "Mewujudkan masyarakat Karawang Barat yang agamis, Unggul dalam
              pelayanan, dan Sejahtera."
            </p>
          </div>
        </Card>

        {/* Misi Header & Grid */}
        <div className="space-y-10">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 text-primary justify-center w-full">
              <span className="w-8 h-1 bg-primary/30 rounded-full"></span>
              <span className="font-nunito font-extrabold text-sm uppercase tracking-wider">
                Misi Kami
              </span>
              <span className="w-8 h-1 bg-primary/30 rounded-full"></span>
            </div>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Kantor Urusan Agama Kecamatan Karawang Barat sebagai Implementasi
              dari Visi yang telah ditetapkan yakni meningkatkan penghayatan,
              pendalaman spritual dan etika keagamaan, melalui:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {misiList.map((misi, index) => {
              const Icon = misi.icon;
              return (
                <Card
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 hover:border-primary/20 text-left transition-all duration-300 group flex flex-row gap-4 sm:gap-6 items-center transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-nunito font-bold text-base sm:text-lg text-text-primary group-hover:text-primary transition-colors">
                      {misi.title}
                    </h4>
                    <p className="font-roboto text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {misi.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
