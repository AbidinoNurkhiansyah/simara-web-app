import { MapPin } from "lucide-react";

interface Props {
  mapEmbed?: string;
  name: string;
}

export function TempatIbadahDetailMap({ mapEmbed, name }: Props) {
  if (!mapEmbed) return null;

  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-extrabold text-primary flex items-center gap-2 mb-6">
        <MapPin className="w-6 h-6 text-yellow-500" />
        Lokasi Peta
      </h2>
      <div className="w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 bg-gray-50 relative group">
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
          className="relative z-10 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
