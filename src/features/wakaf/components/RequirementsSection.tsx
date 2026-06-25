import { wakafRequirements } from "../constants";

export function RequirementsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        3. Berkas Persyaratan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wakafRequirements.map((req, idx) => (
          <div
            key={idx}
            className={`flex flex-col h-full gap-4 ${
              idx === 6 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
              <h3 className="font-semibold text-gray-700 text-lg">
                {req.title}
              </h3>
            </div>
            <div
              className={`mt-auto w-full ${
                idx === 6 ? "aspect-[3/2]" : "aspect-[3/4]"
              } bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 overflow-hidden`}
            >
              <img
                src={req.image}
                alt={req.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
