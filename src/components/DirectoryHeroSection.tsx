import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DecorativeDotPattern } from "@/components/DecorativeDotPattern";

export interface DirectoryHeroSectionProps {
  title: React.ReactNode;
  searchPlaceholder?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
  imageSrc: string;
  imageAlt: string;
}

export function DirectoryHeroSection({
  title,
  searchPlaceholder = "Masukkan pencarian...",
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  imageSrc,
  imageAlt,
}: DirectoryHeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative bg-white pt-16 pb-12 lg:pb-16 border-b border-gray-100 overflow-hidden">
      <DecorativeDotPattern className="absolute inset-y-0 left-0 w-2/3" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-[45%] space-y-8 relative z-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#305335] leading-[1.2] tracking-tight drop-shadow-sm">
              {title}
            </h1>

            {/* Search Bar */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="search"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-gray-100 bg-white text-sm text-gray-700 focus-visible:ring-1 focus-visible:ring-[#305335]/30 focus-visible:border-[#305335]/30"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? "default" : "secondary"}
                  size={isMobile ? "sm" : "lg"}
                  className={`rounded-full font-nunito font-bold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#305335] hover:bg-[#203a24] text-white shadow-md transform hover:-translate-y-0.5"
                      : "bg-[#e9ecef] text-[#4a5568] hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[55%] relative w-full flex justify-center lg:justify-end">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full lg:max-w-none h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
