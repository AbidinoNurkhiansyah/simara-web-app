import React from "react";
import type { Wakaf } from "../types";
import { Edit, Trash2, MapPin } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

interface Props {
  data: Wakaf[];
  onEdit: (item: Wakaf) => void;
  onDelete: (item: Wakaf) => void;
  isLoading?: boolean;
}

const getImageSrc = (image: string) => {
  if (!image) return "";
  return image.startsWith("http")
    ? image
    : `http://localhost:8000${image.startsWith("/") ? "" : "/"}${image}`;
};

const SkeletonRow = () => (
  <tr className="animate-pulse">
    <td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-4" /></td>
    <td className="px-4 py-3"><div className="h-14 bg-gray-200 rounded-lg w-20" /></td>
    <td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-36" /></td>
    <td className="px-4 py-3"><div className="h-6 mx-auto bg-gray-200 rounded-full w-20" /></td>
    <td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-24" /></td>
    <td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-28" /></td>
    <td className="px-4 py-3"><div className="h-4 bg-gray-200 rounded w-40" /></td>
    <td className="px-4 py-3">
      <div className="flex justify-center space-x-2">
        <div className="h-8 w-8 bg-gray-200 rounded-md" />
        <div className="h-8 w-8 bg-gray-200 rounded-md" />
      </div>
    </td>
  </tr>
);

export const WakafTable: React.FC<Props> = ({ data, onEdit, onDelete, isLoading }) => {
  const headers = ["No", "Foto", "Info Aset", "Nadzir", "Lokasi", "Aksi"];

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full text-sm text-left border-separate border-spacing-0">
        <thead className="text-white font-medium">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                className={[
                  "px-4 py-2.5 bg-primary border-none whitespace-nowrap",
                  i === 0 ? "rounded-tl-full rounded-bl-full" : "",
                  i === headers.length - 1 ? "rounded-tr-full rounded-br-full text-center" : "",
                  h === "Aksi" ? "text-center" : "",
                ].join(" ")}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="[&>tr:not(:last-child)>td]:border-b [&>tr:not(:last-child)>td]:border-gray-100">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={`skeleton-${i}`} />)
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-10 text-center text-gray-500">
                <div className="flex flex-col items-center gap-2">
                  <MapPin size={32} className="text-gray-300" />
                  <p>Tidak ada data wakaf ditemukan</p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                {/* No */}
                <td className="px-4 py-3 text-gray-500">{index + 1}</td>

                {/* Foto */}
                <td className="px-4 py-3">
                  {item.image ? (
                    <img
                      src={getImageSrc(item.image)}
                      alt={item.name}
                      className="w-20 h-14 object-cover rounded-lg shadow-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/200x140?text=No+Image";
                      }}
                    />
                  ) : (
                    <div className="w-20 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                      <MapPin size={16} className="text-gray-300" />
                    </div>
                  )}
                </td>

                {/* Info Aset (Nama + Jenis + Luas) */}
                <td className="px-4 py-3 max-w-[250px]">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-medium text-gray-800 line-clamp-2 leading-snug">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-[10px] px-1.5 py-0 h-5 ${
                          item.jenis_properti === "Tanah"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {item.jenis_properti}
                      </Badge>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-600 font-medium">
                        {item.luas}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Nadzir */}
                <td className="px-4 py-3">
                  <span className="block text-gray-600 max-w-[140px] truncate" title={item.nadzir}>
                    {item.nadzir}
                  </span>
                </td>

                {/* Lokasi */}
                <td
                  className="px-4 py-3 text-gray-600 max-w-[220px] truncate"
                  title={item.address}
                >
                  {item.address}
                </td>

                {/* Aksi */}
                <td className="px-4 py-3">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="p-1.5 cursor-pointer text-amber-600 hover:bg-amber-50 rounded-md transition"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(item)}
                      className="p-1.5 cursor-pointer text-red-600 hover:bg-red-50 rounded-md transition"
                      title="Hapus"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
