import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "../constants";

export function LayananSection() {
  return (
    <section className="container-custom pt-8 md:pt-14 pb-4 md:pb-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {services.map((svc) => (
          <Link
            key={svc.title}
            to={svc.path}
            className="group block outline-none h-full"
          >
            <Card className="p-0 gap-0 flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 relative h-full">
              <CardContent className="p-0 flex flex-col flex-grow h-full">
                <div className="h-28 sm:h-40 w-full overflow-hidden bg-gray-50">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute right-3 sm:right-5 top-28 sm:top-40 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#2e4726] flex items-center justify-center text-[#eab308] shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                  <svc.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>

                <div className="p-3 sm:p-5 pt-5 sm:pt-7 flex flex-col flex-grow text-left">
                  <span className="font-nunito font-bold text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-0.5 sm:mb-1">
                    KUA PUSAKA
                  </span>
                  <h3 className="font-nunito font-extrabold text-sm sm:text-lg text-text-primary group-hover:text-primary transition-colors leading-tight">
                    {svc.title}
                  </h3>
                  <p className="font-roboto text-[10px] sm:text-sm text-text-secondary mt-1 sm:mt-2 leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
                    {svc.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
