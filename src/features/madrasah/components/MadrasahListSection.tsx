import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { DirectoryEmptyState } from "@/components/DirectoryEmptyState";
import { DirectoryCard } from "@/components/DirectoryCard";
import { DirectoryPagination } from "@/components/DirectoryPagination";
import type { Madrasah } from "../types";
import madrasahImg from "@/assets/madrasah.webp";

interface MadrasahListSectionProps {
  data: Madrasah[];
}

export function MadrasahListSection({ data }: MadrasahListSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12; // 3 rows of 4 cards
  const sectionRef = useRef<HTMLElement>(null);
  const prevPage = useRef(currentPage);

  useEffect(() => {
    // Reset page to 1 whenever data (search/filter results) changes
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    // Only scroll if the page actually changed
    if (prevPage.current !== currentPage) {
      prevPage.current = currentPage;
      
      const offset = 80;
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section ref={sectionRef} className="w-full bg-white pb-18 flex-grow">
      <div className="container-custom">
        {data.length > 0 ? (
          <>
            <div 
              key={currentPage} 
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {currentData.map((sch) => (
                <Link key={sch.id} to={`/layanan/madrasah/${sch.id}`} className="block h-full group/link">
                  <DirectoryCard
                    imageSrc={madrasahImg}
                    imageAlt={sch.name}
                    icon={<GraduationCap className="w-4 h-4 sm:w-6 sm:h-6" />}
                    category={sch.level}
                    title={sch.name}
                    address={sch.address}
                  >
                    {/* Extra info for Madrasah inside DirectoryCard's children slot */}
                    <div className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-[#64748b] font-roboto pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-0.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200 font-medium">
                          Status: {sch.status}
                        </span>
                        <span
                          className="flex items-center gap-1 font-nunito font-bold text-[#305335] hover:text-[#203a24] transition-colors"
                        >
                          Lihat Detail
                        </span>
                      </div>
                    </div>
                  </DirectoryCard>
                </Link>
              ))}
            </div>

            <DirectoryPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <DirectoryEmptyState
            icon={<GraduationCap />}
            title="Tidak ada madrasah ditemukan"
            message="Ganti kata kunci pencarian atau filter jenjang."
          />
        )}
      </div>
    </section>
  );
}
