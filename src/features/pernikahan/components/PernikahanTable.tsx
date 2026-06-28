import React from "react";
import type { PernikahanRecord } from "../types";
import { Edit, Trash2 } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

interface Props {
  data: PernikahanRecord[];
  onEdit: (item: PernikahanRecord) => void;
  onDelete: (item: PernikahanRecord) => void;
}

export const PernikahanTable: React.FC<Props> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-100">
          <tr>
            <th className="px-6 py-4">No</th>
            <th className="px-6 py-4">Jenis</th>
            <th className="px-6 py-4">Nama Suami</th>
            <th className="px-6 py-4">Nama Istri</th>
            <th className="px-6 py-4">Tanggal Pelaksanaan</th>
            <th className="px-6 py-4">Lokasi</th>
            <th className="px-6 py-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                Tidak ada data ditemukan
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {item.jenis === "pernikahan" ? (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Pernikahan
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      Isbat Nikah
                    </Badge>
                  )}
                </td>
                <td className="px-6 py-4 font-medium text-gray-800">{item.nama_suami}</td>
                <td className="px-6 py-4 font-medium text-gray-800">{item.nama_istri}</td>
                <td className="px-6 py-4">
                  {new Date(item.tanggal_pelaksanaan).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 text-gray-600 max-w-[200px] truncate" title={item.lokasi}>
                  {item.lokasi}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-md transition"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(item)}
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition"
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
