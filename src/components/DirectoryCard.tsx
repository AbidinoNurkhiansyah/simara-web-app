import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface DirectoryCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  category: string;
  title: string;
  address: string;
  children?: ReactNode;
}

export function DirectoryCard({
  imageSrc,
  imageAlt,
  icon,
  category,
  title,
  address,
  children,
}: DirectoryCardProps) {
  return (
    <Card className="p-0 gap-0 flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 relative h-full group">
      <CardContent className="p-0 flex flex-col flex-grow h-full">
        {/* Image Section */}
        <div className="h-20 sm:h-34 w-full overflow-hidden bg-gray-50">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Floating Icon */}
        <div className="absolute right-3 sm:right-5 top-20 sm:top-34 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2e4726] flex items-center justify-center text-[#eab308] shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 sm:pt-5 flex flex-col flex-grow">
          {/* Category */}
          <span className="font-nunito font-bold text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-widest mb-1 sm:mb-2">
            {category}
          </span>

          {/* Title */}
          <h3 className="font-nunito font-extrabold text-sm sm:text-lg text-primary group-hover:text-[#305335] transition-colors leading-snug line-clamp-2 mb-2 sm:mb-4">
            {title}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-[#64748b] font-roboto mt-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 sm:w-5 sm:h-5 text-[#475569] flex-shrink-0 sm:mt-0.5"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="line-clamp-3 leading-relaxed">{address}</span>
          </div>

          {/* Optional Children Slot for extra info (like in Madrasah) */}
          {children}
        </div>
      </CardContent>
    </Card>
  );
}

export function DirectoryCardSkeleton() {
  return (
    <Card className="p-0 gap-0 flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative h-full">
      <CardContent className="p-0 flex flex-col flex-grow h-full animate-pulse">
        {/* Image Skeleton */}
        <div className="h-20 sm:h-34 w-full bg-gray-200"></div>

        {/* Floating Icon Skeleton */}
        <div className="absolute right-3 sm:right-5 top-20 sm:top-34 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-300 z-10"></div>

        {/* Content Skeleton */}
        <div className="p-3 sm:p-4 sm:pt-5 flex flex-col flex-grow">
          {/* Category */}
          <div className="h-2 sm:h-3 w-16 bg-gray-200 rounded mb-2 sm:mb-3"></div>

          {/* Title */}
          <div className="h-4 sm:h-5 w-3/4 bg-gray-200 rounded mb-1"></div>
          <div className="h-4 sm:h-5 w-1/2 bg-gray-200 rounded mb-4"></div>

          {/* Address */}
          <div className="flex items-start gap-1.5 sm:gap-3 mt-auto">
            <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-gray-200 flex-shrink-0 mt-0.5"></div>
            <div className="flex flex-col gap-2 w-full">
              <div className="h-2.5 sm:h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-2.5 sm:h-3 w-2/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
