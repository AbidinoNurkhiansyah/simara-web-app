import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { madrasahData } from "@/features/madrasah/constants";
import { Button } from "@/components/ui/button";
import { MadrasahDetailHero } from "@/features/madrasah/components/detail/MadrasahDetailHero";
import { MadrasahDetailDescription } from "@/features/madrasah/components/detail/MadrasahDetailDescription";
import { MadrasahDetailMap } from "@/features/madrasah/components/detail/MadrasahDetailMap";

export default function MadrasahDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const place = madrasahData.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-4">404</h1>
          <p className="text-gray-500 mb-8">Data madrasah tidak ditemukan.</p>
          <Button
            size="lg"
            onClick={() => navigate("/layanan/madrasah")}
            className="rounded-xl font-nunito font-bold shadow-md"
          >
            Kembali ke Daftar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-nunito">
      <MadrasahDetailHero place={place} />

      <section className="container-custom py-12 sm:py-16 -mt-8 relative z-20">
        <div className="mx-auto">
          <MadrasahDetailDescription details={place.details} />
          <MadrasahDetailMap mapEmbed={place.mapEmbed} name={place.name} />
        </div>
      </section>
    </div>
  );
}
