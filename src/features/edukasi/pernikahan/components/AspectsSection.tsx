import { PERNIKAHAN_ASPECTS } from "../constants/aspects";

export const AspectsSection = () => {
  return (
    <div className="space-y-16 md:space-y-24 mt-16">
      {PERNIKAHAN_ASPECTS.map((aspect, index) => (
        <div
          key={index}
          className={`flex flex-col gap-8 md:gap-16 items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Ilustrasi */}
          <div className="w-full md:w-1/2 relative group">
            <img
              src={aspect.image}
              alt={aspect.title}
              className="w-full h-auto"
            />
            <div className="absolute top-6 left-6 text-primary font-bold text-2xl">
              0{index + 1}
            </div>
          </div>

          {/* Deskripsi */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-extrabold text-text-primary tracking-tight">
              {aspect.title}
            </h3>
            <p className="text-text-secondary leading-relaxed text-lg">
              {aspect.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
