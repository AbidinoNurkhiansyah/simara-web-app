import { Link } from "react-router-dom";
import { programsData } from "../constants";

export function ProgramGrid() {
  return (
    <>
      {/* Card Grid */}
      <section className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programsData.map((prg) => (
            <Link
              key={prg.id}
              to={`/program/${prg.id}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition duration-300 group"
            >
              <div className="w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={prg.image}
                  alt={prg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow gap-3">
                <h3 className="font-bold text-slate-800 text-base md:text-lg leading-snug">
                  {prg.title}
                </h3>
                <span className="text-sm font-semibold text-[#16a34a]">
                  {prg.date}
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {prg.desc}
                </p>
                <span className="text-sm font-semibold text-[#16a34a] group-hover:underline self-end mt-auto pt-2">
                  Baca Selengkapnya
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="container-custom mt-8 mb-16 flex gap-2 justify-start">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 bg-[#1e3e28] text-white">
          1
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 bg-slate-200 text-slate-700 hover:bg-slate-300">
          2
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 bg-slate-200 text-slate-700 hover:bg-slate-300">
          3
        </button>
      </section>
    </>
  );
}
