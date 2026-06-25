import React from "react";

interface PageHeroProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

export function PageHero({
  badge,
  title,
  imageSrc,
  imageAlt,
  imageClassName = "w-full h-full object-cover object-center",
  containerClassName = "pt-32 pb-16 md:pt-40 md:pb-24",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={imageSrc} alt={imageAlt} className={imageClassName} />
      </div>

      {/* Overlay for mobile readability if needed */}
      <div className="absolute inset-0 z-0 bg-white/40 md:hidden"></div>

      <div
        className={`container-custom relative z-10 w-full ${containerClassName}`}
      >
        <div className="max-w-xl space-y-2">
          {badge && (
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent tracking-tight drop-shadow-sm">
              {badge}
            </h1>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-accent drop-shadow-sm">
            {title}
          </h2>

          {children && <div className="pt-4 space-y-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
