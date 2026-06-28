import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Landmark } from "lucide-react";
import { DirectoryEmptyState } from "@/components/DirectoryEmptyState";
import { DirectoryCard, DirectoryCardSkeleton } from "@/components/DirectoryCard";
import { DirectoryPagination } from "@/components/DirectoryPagination";
import type { TempatIbadah } from "../types";
import masjidIcon from "@/assets/religious-icons/masjid.svg";
import gerejaIcon from "@/assets/religious-icons/gereja.svg";
import viharaIcon from "@/assets/religious-icons/vihara.svg";
import klentengIcon from "@/assets/religious-icons/klenteng-vihara.svg";

interface TempatIbadahListSectionProps {
  data: TempatIbadah[];
  isLoading?: boolean;
}

const getIconForType = (type: string) => {
  switch (type.toLowerCase()) {
    case 'masjid': return masjidIcon;
    case 'gereja': return gerejaIcon;
    case 'vihara': return viharaIcon;
    case 'klenteng': return klentengIcon;
    default: return undefined;
  }
};

export function TempatIbadahListSection({
  data,
  isLoading = false,
}: TempatIbadahListSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12; // 3 rows of 4 cards
  const sectionRef = useRef<HTMLElement>(null);
  const prevPage = useRef(currentPage);

  useEffect(() => {
    // Reset page to 1 whenever data (search/filter results) changes
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    // Only scroll if the page actually changed (prevents scrolling on Strict Mode remounts)
    if (prevPage.current !== currentPage) {
      prevPage.current = currentPage;
      
      // Smooth scroll to the top of the section when page changes
      const offset = 80; // Account for any fixed headers if present
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
              {currentData.map((place) => (
                <Link key={place.id} to={`/layanan/tempat-ibadah/${place.id}`} className="block h-full group/link">
                  <DirectoryCard
                    imageSrc={place.image ? (place.image.startsWith('http') ? place.image : `http://localhost:8000${place.image.startsWith('/') ? '' : '/'}${place.image}`) : 'https://via.placeholder.com/150'}
                    imageAlt={place.name}
                    icon={
                      getIconForType(place.type) ? (
                        <img
                          src={getIconForType(place.type)}
                          alt={place.type}
                          className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                        />
                      ) : undefined
                    }
                    category={place.type}
                    title={place.name}
                    address={place.address}
                  />
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
            icon={<Landmark />}
            title="Tidak ada tempat ibadah ditemukan"
            message="Ganti kata kunci pencarian atau filter kategori."
          />
        )}
      </div>
    </section>
  );
}
