import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WakafDetailHero } from "@/features/wakaf/components/detail/WakafDetailHero";
import { WakafDetailInfo } from "@/features/wakaf/components/detail/WakafDetailInfo";
import { WakafDetailMap } from "@/features/wakaf/components/detail/WakafDetailMap";
import { getWakafById } from "@/features/wakaf/api";
import type { Wakaf as WakafType } from "@/features/wakaf/types";
import { ArrowLeft } from "lucide-react";

export default function WakafDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [wakaf, setWakaf] = useState<WakafType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setIsLoading(true);
        if (id) {
          const result = await getWakafById(Number(id));
          setWakaf(result);
        }
      } catch (error) {
        console.error("Failed to fetch detail", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!wakaf) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-4">404</h1>
          <p className="text-gray-500 mb-8">
            Data aset wakaf tidak ditemukan.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/layanan/wakaf")}
            className="rounded-xl font-nunito font-bold shadow-md"
          >
            Kembali ke Direktori Wakaf
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-nunito">
      <section className="container-custom pt-8 pb-12 sm:pt-12 sm:pb-16 relative z-20 flex-grow">
        <Link 
          to="/layanan/wakaf" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors font-roboto text-sm md:text-base group"
        >
          <div className="p-1.5 rounded-full bg-white shadow-sm border border-gray-100 group-hover:bg-primary/10 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Kembali ke Direktori
        </Link>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="w-full h-full">
            <WakafDetailHero wakaf={wakaf} />
          </div>
          <div className="w-full flex flex-col gap-8 h-full">
            <WakafDetailInfo wakaf={wakaf} />
            <WakafDetailMap mapEmbed={wakaf.map_embed} name={wakaf.name} />
          </div>
        </div>
      </section>
    </div>
  );
}
