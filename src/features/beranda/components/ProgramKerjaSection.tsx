import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { programs } from "../constants";

export function ProgramKerjaSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);

  return (
    <section className="overflow-hidden w-full max-w-full">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Program Kerja Kami
        </h2>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
          Berbagai inovasi program penyuluhan, bimbingan masyarakat, serta
          sertifikasi keagamaan yang aktif berjalan di KUA Karawang Barat.
        </p>
      </div>

      {/* Coverflow Carousel Container */}
      <div className="relative w-full h-[280px] md:h-[420px] flex items-center justify-center">
        {programs.map((prog, idx) => {
          const diff = idx - currentSlide;
          let offset = diff;
          // Handle infinite visual loop mapping for 3 items
          if (diff === programs.length - 1) offset = -1;
          if (diff === -(programs.length - 1)) offset = 1;

          let transformClasses = "opacity-0 scale-75 z-0 pointer-events-none";
          if (offset === 0) {
            transformClasses =
              "opacity-100 scale-100 z-30 translate-x-0 shadow-[0_20px_50px_rgb(0,0,0,0.12)]";
          } else if (offset === -1) {
            transformClasses =
              "opacity-60 scale-[0.85] md:scale-90 z-20 -translate-x-[90%] sm:-translate-x-[100%] cursor-pointer hover:opacity-80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
          } else if (offset === 1) {
            transformClasses =
              "opacity-60 scale-[0.85] md:scale-90 z-20 translate-x-[90%] sm:translate-x-[100%] cursor-pointer hover:opacity-80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
          }

          return (
            <Card
              key={idx}
              onClick={() => {
                if (offset === -1) prevSlide();
                if (offset === 1) nextSlide();
              }}
              className={`p-0 gap-0 absolute w-[70%] sm:w-[60%] md:w-[50%] lg:w-[38%] h-full transition-all duration-700 ease-out rounded-3xl overflow-hidden bg-white border border-gray-100 flex flex-col ${transformClasses}`}
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Image Section */}
                <div className="relative w-full h-[55%] md:h-[60%] bg-gray-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <Badge className="px-2 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-primary hover:bg-primary border-0 text-accent font-nunito font-semibold text-[8px] sm:text-xs uppercase tracking-tight shadow-md">
                      {prog.tag}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-6 flex-grow flex flex-col justify-center text-left">
                  <h3 className="text-sm sm:text-xl font-extrabold text-text-primary leading-tight mb-1 sm:mb-2">
                    {prog.title}
                  </h3>
                  <span className="text-primary font-bold text-[8px] sm:text-xs uppercase tracking-widest block mb-1 sm:mb-1.5">
                    {prog.date}
                  </span>
                  <p className="text-text-secondary text-[10px] sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {prog.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-12 md:mt-16">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-primary transition-colors focus:outline-none w-auto h-auto"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          {programs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all focus:outline-none ${
                idx === currentSlide ? "bg-primary w-8" : "bg-gray-300 w-2.5"
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-primary transition-colors focus:outline-none w-auto h-auto"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
