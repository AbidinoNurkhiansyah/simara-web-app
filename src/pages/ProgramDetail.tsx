import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProgramDetailHero, ProgramDetailContent } from "../features/program";
import { getProgramById } from "../features/program/api";
import type { ProgramItem } from "../features/program/types";

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const [program, setProgram] = useState<ProgramItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      if (!id) return;
      setIsLoading(true);
      setError(null);
      try {
        const result = await getProgramById(parseInt(id, 10));
        setProgram(result);
      } catch (err: any) {
        console.error("Error fetching program detail:", err);
        setError("Program tidak ditemukan atau terjadi kesalahan.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgram();
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-[#f8fafc] min-h-screen pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="bg-[#f8fafc] min-h-screen pb-16 flex flex-col items-center justify-center pt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ops!</h2>
        <p className="text-gray-500">{error || "Data tidak ditemukan."}</p>
        <a href="/program" className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          Kembali ke Daftar Program
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16">
      <ProgramDetailHero image={program.image} />
      <ProgramDetailContent title={program.title} date={program.date} desc={program.desc} />
    </div>
  );
}
