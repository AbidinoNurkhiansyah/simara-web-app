import { MapPin } from "lucide-react";

interface Props {
  mapEmbed?: string;
  name: string;
}

export function WakafDetailMap({ mapEmbed, name }: Props) {
  if (!mapEmbed) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 h-full flex flex-col">
      <h2 className="text-lg md:text-xl font-extrabold text-gray-800 mb-4 font-nunito flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <MapPin className="w-5 h-5" />
        </span>
        Lokasi Peta
      </h2>
      <div className="w-full flex-grow min-h-[250px] md:min-h-[300px] rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 relative group">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <iframe
          src={mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Peta Lokasi ${name}`}
          className="absolute inset-0 z-10 w-full h-full grayscale-[20%] contrast-[1.05]"
        ></iframe>
      </div>
    </div>
  );
}
