import { programsData } from "../constants";

export function ProgramHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      {/* Top-Left Curve */}
      <div className="absolute top-0 left-0 z-10 w-32 md:w-48 text-white">
        <svg
          viewBox="0 0 200 200"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L200,0 C100,0 0,100 0,200 Z" />
        </svg>
      </div>

      {/* 5 Images Flex Row */}
      <div className="flex h-full w-full divide-x-[3px] divide-white">
        {programsData.slice(0, 5).map((prg, i) => (
          <div
            key={`hero-${i}`}
            className={`flex-1 h-full ${i > 2 ? "hidden md:block" : ""}`}
          >
            <img
              src={prg.image}
              className="w-full h-full object-cover"
              alt={`Hero ${i + 1}`}
            />
          </div>
        ))}
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
