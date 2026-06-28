import React from "react";
import type { PernikahanFormData, PernikahanRecord } from "../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { X } from "lucide-react";
import { usePernikahanForm } from "../hooks/usePernikahanForm";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = usePernikahanForm(initialData, isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-800">
            {initialData ? "Edit Data" : "Tambah Data Baru"}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Bulan</label>
              <select
                {...register("bulan")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Januari">Januari</option>
                <option value="Februari">Februari</option>
                <option value="Maret">Maret</option>
                <option value="April">April</option>
                <option value="Mei">Mei</option>
                <option value="Juni">Juni</option>
                <option value="Juli">Juli</option>
                <option value="Agustus">Agustus</option>
                <option value="September">September</option>
                <option value="Oktober">Oktober</option>
                <option value="November">November</option>
                <option value="Desember">Desember</option>
              </select>
              {errors.bulan && <span className="text-xs text-red-500">{errors.bulan.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tahun</label>
              <Input
                type="number"
                placeholder="Contoh: 2026"
                {...register("tahun", { valueAsNumber: true })}
              />
              {errors.tahun && <span className="text-xs text-red-500">{errors.tahun.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Jumlah Pernikahan
              </label>
              <Input
                type="number"
                placeholder="0"
                {...register("pernikahan", { valueAsNumber: true })}
              />
              {errors.pernikahan && <span className="text-xs text-red-500">{errors.pernikahan.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Jumlah Isbat Nikah
              </label>
              <Input
                type="number"
                placeholder="0"
                {...register("isbat_nikah", { valueAsNumber: true })}
              />
              {errors.isbat_nikah && <span className="text-xs text-red-500">{errors.isbat_nikah.message}</span>}
            </div>
          </div>

          <div className="pt-4 flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="cursor-pointer"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#1e4d2b] hover:bg-[#15361e] text-white cursor-pointer"
            >
              {isLoading ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
