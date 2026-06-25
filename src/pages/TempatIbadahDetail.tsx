import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tempatIbadahData } from "@/features/tempat-ibadah/constants";
import { Button } from "@/components/ui/button";
import { TempatIbadahDetailHero } from "@/features/tempat-ibadah/components/detail/TempatIbadahDetailHero";
import { TempatIbadahDetailDescription } from "@/features/tempat-ibadah/components/detail/TempatIbadahDetailDescription";
import { TempatIbadahDetailMap } from "@/features/tempat-ibadah/components/detail/TempatIbadahDetailMap";

export default function TempatIbadahDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const place = tempatIbadahData.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-4">404</h1>
          <p className="text-gray-500 mb-8">
            Data tempat ibadah tidak ditemukan.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/layanan/tempat-ibadah")}
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
      <TempatIbadahDetailHero place={place} />

      <section className="container-custom py-12 sm:py-16 -mt-8 relative z-20">
        <div className="mx-auto max-w-4xl">
          <TempatIbadahDetailDescription details={place.details} />
          <TempatIbadahDetailMap mapEmbed={place.mapEmbed} name={place.name} />
        </div>
      </section>
    </div>
  );
}
