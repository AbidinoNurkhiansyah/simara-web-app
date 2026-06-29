import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  image?: string;
}

export function ProgramDetailHero({ image }: Props) {
  const navigate = useNavigate();

  let imgUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200";
  if (image) {
    imgUrl = image.startsWith("http")
      ? image
      : `http://localhost:8000${image.startsWith("/") ? "" : "/"}${image}`;
  }

  return (
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      <img
        src={imgUrl}
        alt="Banner Program"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://placehold.co/1200x400?text=No+Image";
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 container-custom pt-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-white transition-all bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-fit cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide">Kembali</span>
        </button>
      </div>
    </section>
  );
}
