import { User, Ruler, MapPin, Building } from "lucide-react";
import type { Wakaf } from "../../types";
import { Badge } from "@/components/ui/badge";

interface Props {
  wakaf: Wakaf;
}

export function WakafDetailInfo({ wakaf }: Props) {
  const isTanah = wakaf.jenis_properti === "Tanah";

  return (
    <div className="h-full flex flex-col">
      {/* Top row: Name, Badge, Address */}
      <div className="mb-4 border-b border-gray-200 pb-4">
        <Badge
          variant="outline"
          className={`mb-2 text-[10px] md:text-xs px-2.5 py-0.5 border-2 rounded-full ${
            isTanah 
              ? "bg-amber-50 text-amber-700 border-amber-200" 
              : "bg-blue-50 text-blue-700 border-blue-200"
          }`}
        >
          {isTanah ? <MapPin className="w-3 h-3 mr-1.5" /> : <Building className="w-3 h-3 mr-1.5" />}
          {wakaf.jenis_properti}
        </Badge>
        
        <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 mb-2 font-nunito leading-tight">
          {wakaf.name}
        </h1>
        
        <div className="flex items-start gap-2 text-gray-600">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span className="text-xs md:text-sm font-roboto leading-relaxed">{wakaf.address}</span>
        </div>
      </div>

      {/* Bottom row: Detail grid */}
      <h2 className="text-base md:text-lg font-extrabold text-gray-800 mb-3 font-nunito flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
        </span>
        Detail Aset
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Ruler className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-800 mb-0.5 font-nunito">Luas Aset</h3>
            <p className="text-gray-600 font-roboto text-xs md:text-sm">{wakaf.luas}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-800 mb-0.5 font-nunito">Nadzir (Pengelola)</h3>
            <p className="text-gray-600 font-roboto text-xs md:text-sm">{wakaf.nadzir}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
