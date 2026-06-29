import type { Wakaf } from "../../types";

interface Props {
  wakaf: Wakaf;
}

export function WakafDetailHero({ wakaf }: Props) {
  const imageSrc = wakaf.image 
    ? (wakaf.image.startsWith('http') ? wakaf.image : `http://localhost:8000${wakaf.image.startsWith('/') ? '' : '/'}${wakaf.image}`) 
    : 'https://placehold.co/1200x600?text=No+Image';

  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[600px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 group relative">
      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 -z-10">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <img
        src={imageSrc}
        alt={wakaf.name}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
}
