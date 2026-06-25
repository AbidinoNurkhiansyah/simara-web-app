import { GraduationCap } from "lucide-react";

interface Props {
  details?: string[];
}

export function MadrasahDetailDescription({ details }: Props) {
  if (!details || details.length === 0) return null;

  return (
    <>
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-extrabold text-primary flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-yellow-500" />
          Profil Madrasah
        </h2>
      </div>

      <div className="prose prose-gray md:prose-lg max-w-none font-roboto text-gray-700 leading-relaxed mb-8">
        {details.map((paragraph, idx) => (
          <p key={idx} className="mb-6 text-justify indent-8">
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}
