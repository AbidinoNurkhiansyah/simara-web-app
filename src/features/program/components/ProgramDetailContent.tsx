import { Calendar } from "lucide-react";

interface Props {
  title: string;
  date: string;
  desc: string;
}

export function ProgramDetailContent({ title, date, desc }: Props) {
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

  return (
    <section className="container-custom py-8 md:py-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3e28] mb-6 leading-tight">
            {title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#16a34a]" />
              <span className="font-medium">{formattedDate}</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-loose space-y-6 text-justify">
          {desc
            .split("\n")
            .map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph}</p>,
            )}
        </div>
      </div>
    </section>
  );
}
