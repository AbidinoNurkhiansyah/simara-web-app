import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { DirectoryEmptyState } from "@/components/DirectoryEmptyState";
import { DirectoryCard, DirectoryCardSkeleton } from "@/components/DirectoryCard";
import { DirectoryPagination } from "@/components/DirectoryPagination";
import type { Madrasah } from "../types";
import { useMadrasahList } from "../hooks/useMadrasahList";
import madrasahImg from "@/assets/madrasah.webp"; // Fallback image

interface MadrasahListSectionProps {
  data: Madrasah[];
  isLoading?: boolean;
}

export function MadrasahListSection({ data, isLoading = false }: MadrasahListSectionProps) {
  const {
    currentPage,
    setCurrentPage,
    sectionRef,
    totalPages,
    currentData,
  } = useMadrasahList(data);

  return (
    <section ref={sectionRef} className="w-full bg-white pb-18 flex-grow">
      <div className="container-custom">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <DirectoryCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : data.length > 0 ? (
          <>
            <div 
              key={currentPage} 
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {currentData.map((sch) => (
                <Link key={sch.id} to={`/layanan/madrasah/${sch.id}`} className="block h-full group/link">
                  <DirectoryCard
                    imageSrc={sch.image ? (sch.image.startsWith('http') ? sch.image : `http://localhost:8000${sch.image.startsWith('/') ? '' : '/'}${sch.image}`) : madrasahImg}
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
