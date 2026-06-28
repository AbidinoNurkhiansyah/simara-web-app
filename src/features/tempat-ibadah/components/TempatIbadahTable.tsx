import React from "react";
import type { TempatIbadah } from "../types";
import { Edit, Trash2 } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

interface Props {
  data: TempatIbadah[];
  onEdit: (item: TempatIbadah) => void;
  onDelete: (item: TempatIbadah) => void;
  isLoading?: boolean;
}

export const TempatIbadahTable: React.FC<Props> = ({
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
            <th className="px-4 py-2.5 bg-primary border-none rounded-tl-full rounded-bl-full whitespace-nowrap">No</th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">Foto</th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">Nama Tempat Ibadah</th>
            <th className="px-4 py-2.5 bg-primary border-none text-center whitespace-nowrap">Tipe</th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">Lokasi</th>
            <th className="px-4 py-2.5 bg-primary border-none text-center rounded-tr-full rounded-br-full whitespace-nowrap">Aksi</th>
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
                  <div className="h-6 mx-auto bg-gray-200 rounded-full w-16"></div>
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
                <td className="px-4 py-2.5">{index + 1}</td>
                <td className="px-4 py-2.5">
                  {item.image && (
                    <img 
                      src={item.image.startsWith('http') ? item.image : `http://localhost:8000${item.image.startsWith('/') ? '' : '/'}${item.image}`}
                      alt={item.name} 
                      className="w-16 h-12 object-cover rounded shadow-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                      }}
                    />
                  )}
                </td>
                <td className="px-4 py-2.5 font-medium text-gray-800">
                  {item.name}
                </td>
                <td className="px-4 py-2.5 text-center">
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200"
                  >
                    {item.type}
                  </Badge>
                </td>
                <td className="px-4 py-2.5 text-gray-600 max-w-[200px] truncate" title={item.address}>
                  {item.address}
                </td>
                <td className="px-4 py-2.5">
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
