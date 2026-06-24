import bannerImg from "@/assets/banner.webp";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-24 border-b border-primary/20">
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="Profil KUA Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
      </div>

      <div className="container-custom relative z-10 text-center space-y-5">
        <Badge variant="outline" className="text-white font-bold text-xs uppercase tracking-widest bg-white/20 px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-sm mb-2 h-auto">
          Kenali Kami Lebih Dekat
        </Badge>
        <h1 className="text-2xl md:text-4xl font-bold text-accent leading-tight tracking-tight">
          KUA PUSAKA Karawang Barat
        </h1>
        <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Sejarah, visi-misi, tata nilai operasional, dan kepengurusan Kantor
          Urusan Agama Kecamatan Karawang Barat.
        </p>
      </div>
    </section>
  );
}
