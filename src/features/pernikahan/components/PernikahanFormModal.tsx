import React, { useState, useEffect } from "react";
import type { PernikahanFormData, PernikahanRecord } from "../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PernikahanFormData) => void;
  initialData?: PernikahanRecord | null;
  isLoading?: boolean;
}

export const PernikahanFormModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading,
}) => {
  const [formData, setFormData] = useState<PernikahanFormData>({
    jenis: "pernikahan",
    nama_suami: "",
    nama_istri: "",
    tanggal_pelaksanaan: "",
    lokasi: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        jenis: initialData.jenis,
        nama_suami: initialData.nama_suami,
        nama_istri: initialData.nama_istri,
        tanggal_pelaksanaan: initialData.tanggal_pelaksanaan,
        lokasi: initialData.lokasi,
      });
    } else {
      setFormData({
        jenis: "pernikahan",
        nama_suami: "",
        nama_istri: "",
        tanggal_pelaksanaan: "",
        lokasi: "",
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-800">
            {initialData ? "Edit Data" : "Tambah Data Baru"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Jenis Layanan</label>
            <select
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.jenis}
              onChange={(e) =>
                setFormData({ ...formData, jenis: e.target.value as "pernikahan" | "isbat_nikah" })
              }
            >
              <option value="pernikahan">Pernikahan</option>
              <option value="isbat_nikah">Isbat Nikah</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Nama Suami</label>
            <Input
              required
              placeholder="Masukkan nama suami"
              value={formData.nama_suami}
              onChange={(e) => setFormData({ ...formData, nama_suami: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Nama Istri</label>
            <Input
              required
              placeholder="Masukkan nama istri"
              value={formData.nama_istri}
              onChange={(e) => setFormData({ ...formData, nama_istri: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Tanggal Pelaksanaan</label>
            <Input
              required
              type="date"
              value={formData.tanggal_pelaksanaan}
              onChange={(e) => setFormData({ ...formData, tanggal_pelaksanaan: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Lokasi</label>
            <Input
              required
              placeholder="Masukkan lokasi pelaksanaan"
              value={formData.lokasi}
              onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
            />
          </div>

          <div className="pt-4 flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-[#1e4d2b] hover:bg-[#15361e] text-white">
              {isLoading ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
