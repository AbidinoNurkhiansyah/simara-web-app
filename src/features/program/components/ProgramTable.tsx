import React from "react";
import type { ProgramItem } from "../types";
import { Edit, Trash2, Calendar, Tag } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

interface Props {
  data: ProgramItem[];
  onEdit: (item: ProgramItem) => void;
  onDelete: (item: ProgramItem) => void;
  isLoading?: boolean;
}

export const ProgramTable: React.FC<Props> = ({
  data,
  onEdit,
  onDelete,
  isLoading,
}) => {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full text-sm text-left border-separate border-spacing-0">
        <thead className="text-white font-medium">
          <tr>
            <th className="px-4 py-2.5 bg-primary border-none rounded-tl-full rounded-bl-full whitespace-nowrap">
              No
            </th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">
              Thumbnail
            </th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">
              Judul Program
            </th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">
              Tanggal & Tag
            </th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">
              Deskripsi
            </th>
            <th className="px-4 py-2.5 bg-primary border-none text-center rounded-tr-full rounded-br-full whitespace-nowrap">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="[&>tr:not(:last-child)>td]:border-b [&>tr:not(:last-child)>td]:border-gray-100">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={`skeleton-${index}`} className="animate-pulse">
                <td className="px-4 py-2.5">
                  <div className="h-4 bg-gray-200 rounded w-4"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-12 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-8 bg-gray-200 rounded w-24 mb-1"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex justify-center space-x-2">
                    <div className="h-8 w-8 bg-gray-200 rounded-md"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-md"></div>
                  </div>
                </td>
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                Tidak ada data ditemukan
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2.5 align-top">{index + 1}</td>
                <td className="px-4 py-2.5 align-top">
                  {item.image && (
                    <img
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `http://localhost:8000${item.image.startsWith("/") ? "" : "/"}${item.image}`
                      }
                      alt={item.title}
                      className="w-20 h-14 object-cover rounded shadow-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/150x150?text=No+Image";
                      }}
                    />
                  )}
                </td>
                <td className="px-4 py-2.5 font-medium text-gray-800 align-top">
                  <span className="line-clamp-2">{item.title}</span>
                </td>
                <td className="px-4 py-2.5 align-top">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1.5" />
                      {new Intl.DateTimeFormat("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(item.date))}
                    </div>
                    {item.tag && (
                      <div className="flex items-center">
                        <Tag size={12} className="text-primary mr-1.5" />
                        <Badge variant="outline" className="text-[10px] h-4 py-0 px-1.5 bg-primary/5 text-primary border-primary/20 font-normal">
                          {item.tag}
                        </Badge>
                      </div>
                    )}
                  </div>
                </td>
                <td
                  className="px-4 py-2.5 text-gray-600 max-w-[250px] align-top"
                  title={item.desc}
                >
                  <p className="line-clamp-2 text-xs">{item.desc}</p>
                </td>
                <td className="px-4 py-2.5 align-top">
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
