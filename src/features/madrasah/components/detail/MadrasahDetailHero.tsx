import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Madrasah } from "@/features/madrasah/types";
import madrasahDetailImg from "@/assets/madrasah-detail-hero.webp";

interface Props {
  place: Madrasah;
}

export function MadrasahDetailHero({ place }: Props) {
  const imageSrc = place.image || madrasahDetailImg;

  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-end pb-12 sm:pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112415] via-[#112415]/80 to-transparent"></div>
      </div>

      {/* Floating Back Button */}
      <div className="absolute top-6 sm:top-10 w-full z-20">
        <div className="container-custom">
          <Button
            variant="outline"
            asChild
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white rounded-full font-semibold shadow-lg transition-all"
          >
            <Link to="/layanan/madrasah" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/10">
                {place.icon ? (
                  <img
                    src={place.icon}
                    alt={place.level}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <GraduationCap className="w-6 h-6 text-white" />
                )}
              </div>
              <Badge
                variant="secondary"
                className="px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 text-white"
              >
                {place.level}
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 text-white"
              >
                {place.status}
              </Badge>
            </div>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3">
              {place.name}
            </h1>
            <div className="flex items-start gap-2 text-gray-300 text-sm sm:text-base max-w-2xl font-roboto">
              <MapPin className="w-5 h-5 flex-shrink-0 text-yellow-400 mt-0.5" />
              <p>{place.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
