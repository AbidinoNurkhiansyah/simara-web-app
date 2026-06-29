import { Link } from "react-router-dom";
import { BookOpen, MapPin, Building, Ruler } from "lucide-react";
import { DirectoryEmptyState } from "@/components/DirectoryEmptyState";
import { DirectoryCard, DirectoryCardSkeleton } from "@/components/DirectoryCard";
import { DirectoryPagination } from "@/components/DirectoryPagination";
import type { Wakaf } from "../types";
import { useWakafList } from "../hooks/useWakafList";

interface WakafListSectionProps {
  data: Wakaf[];
  isLoading?: boolean;
}

const getIconForType = (type: string) => {
  if (type === "Tanah") {
    return <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-[#eab308]" />;
  }
  if (type === "Bangunan") {
    return <Building className="w-4 h-4 sm:w-6 sm:h-6 text-[#eab308]" />;
  }
  return <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-[#eab308]" />;
};

export function WakafListSection({
  data,
  isLoading = false,
}: WakafListSectionProps) {
  const {
    currentPage,
    setCurrentPage,
    sectionRef,
    totalPages,
    currentData,
  } = useWakafList(data);

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
              {currentData.map((wakaf) => (
                <Link key={wakaf.id} to={`/layanan/wakaf/${wakaf.id}`} className="block h-full group/link">
                  <DirectoryCard
                    imageSrc={wakaf.image ? (wakaf.image.startsWith('http') ? wakaf.image : `http://localhost:8000${wakaf.image.startsWith('/') ? '' : '/'}${wakaf.image}`) : 'https://placehold.co/400x300?text=No+Image'}
                    imageAlt={wakaf.name}
                    icon={getIconForType(wakaf.jenis_properti)}
                    category={wakaf.jenis_properti}
                    title={wakaf.name}
                    address={wakaf.address}
                  >
                    {/* Add Luas as extra child info */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-3 text-[10px] sm:text-xs text-gray-500 font-medium">
                      <Ruler className="w-3 h-3 sm:w-4 sm:h-4 text-primary opacity-70" />
                      <span>{wakaf.luas}</span>
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
            icon={<BookOpen />}
            title="Tidak ada aset wakaf ditemukan"
            message="Ganti kata kunci pencarian atau filter kategori."
          />
        )}
      </div>
    </section>
  );
}
