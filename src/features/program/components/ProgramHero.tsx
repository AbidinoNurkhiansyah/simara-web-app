import { useState, useEffect } from "react";
import { getProgramsPaginated } from "../api";
import type { ProgramItem } from "../types";

export function ProgramHero() {
  const [programs, setPrograms] = useState<ProgramItem[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const result = await getProgramsPaginated(1, 5);
        setPrograms(result.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    fetchPrograms();
  }, []);

  // Use some placeholder colors/images if we don't have 5 programs yet
  const placeholders = [
    "https://placehold.co/400x400/1e4d2b/FFFFFF?text=Program+1",
    "https://placehold.co/400x400/2a6639/FFFFFF?text=Program+2",
    "https://placehold.co/400x400/367f47/FFFFFF?text=Program+3",
    "https://placehold.co/400x400/429855/FFFFFF?text=Program+4",
    "https://placehold.co/400x400/4eb163/FFFFFF?text=Program+5",
  ];

  return (
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      {/* 5 Images Flex Row */}
      <div className="flex h-full w-full divide-x-[3px] divide-white">
        {Array.from({ length: 5 }).map((_, i) => {
          const prg = programs[i];
          let imgUrl = placeholders[i];
          if (prg && prg.image) {
            imgUrl = prg.image.startsWith("http")
              ? prg.image
              : `http://localhost:8000${prg.image.startsWith("/") ? "" : "/"}${prg.image}`;
          }

          return (
            <div
              key={`hero-${i}`}
              className={`flex-1 h-full ${i > 2 ? "hidden md:block" : ""}`}
            >
              <img
                src={imgUrl}
                className="w-full h-full object-cover"
                alt={`Hero ${i + 1}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = placeholders[i];
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-10 text-[#f8fafc]">
        <svg
          className="w-full h-12 md:h-24"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
