import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProgramsPaginated, type PaginatedResponse } from "../api";
import type { ProgramItem } from "../types";

export function ProgramGrid() {
  const [data, setData] = useState<PaginatedResponse<ProgramItem> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPrograms = async () => {
      setIsLoading(true);
      try {
        const result = await getProgramsPaginated(page, 8);
        setData(result);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrograms();
  }, [page]);

  return (
    <>
      <section className="container-custom py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : data?.data && data.data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {data.data.map((prg) => (
              <Link
                key={prg.id}
                to={`/program/${prg.id}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition duration-300 group"
              >
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={
                      prg.image.startsWith("http")
                        ? prg.image
                        : `http://localhost:8000${prg.image.startsWith("/") ? "" : "/"}${prg.image}`
                    }
                    alt={prg.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/600x400?text=No+Image";
                    }}
                  />
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-grow gap-2.5">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug">
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
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            Belum ada program yang ditambahkan.
          </div>
        )}
      </section>

      {/* Pagination */}
      {data?.meta && data.meta.last_page > 1 && (
        <section className="container-custom mt-8 mb-16 flex gap-2 justify-start overflow-x-auto pb-4">
          {Array.from({ length: data.meta.last_page }, (_, i) => i + 1).map(
            (p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  page === p
                    ? "bg-[#1e3e28] text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {p}
              </button>
            ),
          )}
        </section>
      )}
    </>
  );
}
