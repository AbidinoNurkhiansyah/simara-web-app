import { Users, ExternalLink, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import { useHeroStats } from "../hooks/useHeroStats";

import bannerImg from "@/assets/banner.webp";

export function HeroSection() {
  const stats = useHeroStats();
  
  const animatedMarriages = useCountUp(stats.marriagesThisMonth, 2500);
  const animatedIsbats = useCountUp(stats.isbatsThisMonth, 2500);

  return (
    <section className="relative w-full h-[260px] sm:h-[300px] lg:h-[300px] overflow-visible flex items-center bg-background z-20">
      {/* Background Banner Full-Bleed (Mentok Kanan-Kiri & Terlihat Semua) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bannerImg}
          alt="KUA PUSAKA Karawang Barat"
          className="w-full h-full object-cover"
        />
        {/* Gelap overlay agar teks kuning dan putih terbaca sangat kontras, memudar ke kanan dengan lebih halus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Konten Hero di Atas Banner */}
      <div className="container-custom w-full z-10 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 sm:pb-6">
          {/* Sisi Kiri: Judul KUA & Jadwal */}
          <div className="w-full sm:w-3/4 text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent leading-tight tracking-wide font-nunito">
              Kantor Urusan Agama Kecamatan
              <br />
              Karawang Barat
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white font-medium tracking-wide">
              Senin - Jumat 08.00 s/d 16.00
            </p>
          </div>

          {/* Sisi Kanan: Tombol Kunjungi */}
          <div className="flex-shrink-0 self-start sm:self-center">
            <Button
              asChild
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary border border-white hover:bg-gray-50 hover:text-primary rounded-full font-roboto font-semibold text-sm shadow-md transition-all tracking-wider h-auto"
            >
              <a
                href="https://www.google.com/maps/place/KUA+Kec.+Karawang+Barat/@-6.3063436,107.3046829,20z/data=!4m6!3m5!1s0x2e6977c3a733af8f:0xf597a5a216080521!8m2!3d-6.3064892!4d107.3047657!16s%2Fg%2F1hm4cgwz6?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Kunjungi</span>
                <ExternalLink
                  className="w-4 h-4 text-primary"
                  strokeWidth={2.5}
                />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlapping Stats Cards di Bawah Banner */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1/2 z-30">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-2 sm:gap-6 max-w-2xl mx-auto">
            {/* Card 1: PERNIKAHAN */}
            <Card className="p-0 bg-white rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50">
              <CardContent className="p-0 py-3 px-3 sm:p-5 lg:p-6 flex flex-row items-center justify-start gap-2 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/5 rounded-lg sm:rounded-2xl text-primary flex-shrink-0">
                  <Users
                    className="w-5 h-5 sm:w-10 sm:h-10 text-primary"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-left">
                  <span className="block font-nunito font-extrabold text-[10px] sm:text-xs md:text-lg text-primary uppercase tracking-wider leading-tight">
                    PERNIKAHAN
                  </span>
                  <div className="flex items-baseline justify-start gap-1 mt-0.5">
                    <span className="font-roboto font-black text-lg sm:text-3xl md:text-4xl text-accent leading-none">
                      {animatedMarriages.toString().padStart(3, "0")}
                    </span>
                    <span className="text-[8px] sm:text-xs md:text-sm font-medium text-text-secondary uppercase">
                      / {stats.monthLabel}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: ISBAT NIKAH */}
            <Card className="p-0 bg-white rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50">
              <CardContent className="p-0 py-3 px-3 sm:p-5 lg:p-6 flex flex-row items-center justify-start gap-2 sm:gap-4">
                <div className="p-2 sm:p-3 bg-primary/5 rounded-lg sm:rounded-2xl text-primary flex-shrink-0">
                  <FileCheck
                    className="w-5 h-5 sm:w-10 sm:h-10 text-primary"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-left">
                  <span className="block font-nunito font-extrabold text-[10px] sm:text-xs md:text-lg text-primary uppercase tracking-wider leading-tight">
                    ISBAT NIKAH
                  </span>
                  <div className="flex items-baseline justify-start gap-1 mt-0.5">
                    <span className="font-nunito font-black text-lg sm:text-3xl md:text-4xl text-accent leading-none">
                      {animatedIsbats.toString().padStart(3, "0")}
                    </span>
                    <span className="text-[8px] sm:text-xs md:text-sm font-medium text-text-secondary uppercase">
                      / {stats.monthLabel}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
