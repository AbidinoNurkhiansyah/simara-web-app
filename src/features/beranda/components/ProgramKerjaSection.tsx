import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProgramKerja } from "../hooks/useProgramKerja";

export function ProgramKerjaSection() {
  const { data, isLoading, scrollContainerRef, scrollLeft, scrollRight } =
    useProgramKerja();

  return (
    <section className="overflow-hidden w-full pt-6 pb-12 md:pt-8 md:pb-16 container-custom">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Program Kerja Kami
        </h2>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
          Berbagai inovasi program penyuluhan, bimbingan masyarakat, serta
          sertifikasi keagamaan yang aktif berjalan di KUA Karawang Barat.
        </p>
      </div>

      <div className="relative group">
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : data.length > 0 ? (
          <>
            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {data.map((prg) => (
                <div
                  key={prg.id}
                  className="w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[23vw] flex-shrink-0 snap-start flex"
                >
                  <Link
                    to={`/program/${prg.id}`}
                    className="bg-white w-full h-full rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition duration-300 group/card"
                  >
                    <div className="w-full h-48 sm:h-40 overflow-hidden">
                      <img
                        src={
                          prg.image.startsWith("http")
                            ? prg.image
                            : `http://localhost:8000${prg.image.startsWith("/") ? "" : "/"}${prg.image}`
                        }
                        alt={prg.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/600x400?text=No+Image";
                        }}
                      />
                    </div>
                    <div className="p-4 md:p-5 flex flex-col flex-grow gap-2.5">
                      <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug line-clamp-2">
                        {prg.title}
                      </h3>
                      <span className="text-sm font-semibold text-[#16a34a]">
                        {new Intl.DateTimeFormat("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(prg.date))}
                      </span>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {prg.desc}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-primary opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 z-10 hover:bg-primary hover:text-white border border-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-primary opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 z-10 hover:bg-primary hover:text-white border border-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </>
        ) : (
          <div className="text-center text-gray-500 py-12">
            Belum ada program yang ditambahkan.
          </div>
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `,
        }}
      />
    </section>
  );
}
