import React from "react";
import type { PernikahanRecord } from "../types";
import { Edit, Trash2 } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

interface Props {
  data: PernikahanRecord[];
  onEdit: (item: PernikahanRecord) => void;
  onDelete: (item: PernikahanRecord) => void;
  isLoading?: boolean;
}

export const PernikahanTable: React.FC<Props> = ({
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
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">Bulan</th>
            <th className="px-4 py-2.5 bg-primary border-none whitespace-nowrap">Tahun</th>
            <th className="px-4 py-2.5 bg-primary border-none text-center whitespace-nowrap">Pernikahan</th>
            <th className="px-4 py-2.5 bg-primary border-none text-center whitespace-nowrap">Isbat Nikah</th>
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
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-6 mx-auto bg-gray-200 rounded-full w-12"></div>
                </td>
                <td className="px-4 py-2.5">
                  <div className="h-6 mx-auto bg-gray-200 rounded-full w-12"></div>
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
                <td className="px-4 py-2.5 font-medium text-gray-800">
                  {item.bulan}
                </td>
                <td className="px-4 py-2.5">{item.tahun}</td>
                <td className="px-4 py-2.5 text-center">
                  <Badge
                    variant="outline"
                    className="bg-blue-50 text-blue-700 border-blue-200"
                  >
                    {item.pernikahan}
                  </Badge>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <Badge
                    variant="outline"
                    className="bg-purple-50 text-purple-700 border-purple-200"
                  >
                    {item.isbat_nikah}
                  </Badge>
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
