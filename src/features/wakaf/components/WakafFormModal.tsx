import React from "react";
import type { Wakaf } from "../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { X } from "lucide-react";
import { useWakafForm, type WakafFormValues } from "../hooks/useWakafForm";
import { jenisPropertiOptions } from "../constants";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: WakafFormValues) => void;
  initialData?: Wakaf | null;
  isLoading?: boolean;
}

const inputClass =
  "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export const WakafFormModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading,
}) => {
  const { form, imagePreview, handleImageChange, validateAndSubmit } =
    useWakafForm(initialData, isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleFormSubmit = (data: WakafFormValues) => {
    validateAndSubmit(onSubmit, data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b shrink-0">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {initialData ? "Edit Data Wakaf" : "Tambah Data Wakaf"}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Kelola data aset wakaf di KUA Karawang Barat
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition p-1 rounded-lg hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="p-6 flex flex-col gap-4 overflow-y-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama Aset — full width */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Nama Aset Wakaf <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Contoh: Tanah Wakaf Masjid Al-Jihad"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name.message}</span>
              )}
            </div>

            {/* Jenis Properti */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Jenis Properti <span className="text-red-500">*</span>
              </label>
              <select {...register("jenis_properti")} className={inputClass}>
                {jenisPropertiOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.jenis_properti && (
                <span className="text-xs text-red-500">{errors.jenis_properti.message}</span>
              )}
            </div>

            {/* Luas */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Luas <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Contoh: 500 m², 0.5 Ha"
                {...register("luas")}
              />
              {errors.luas && (
                <span className="text-xs text-red-500">{errors.luas.message}</span>
              )}
            </div>

            {/* Nadzir */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Nadzir (Pengelola) <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Contoh: H. Ahmad Fauzi"
                {...register("nadzir")}
              />
              {errors.nadzir && (
                <span className="text-xs text-red-500">{errors.nadzir.message}</span>
              )}
            </div>

            {/* Foto */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Foto Lokasi{!initialData && <span className="text-red-500"> *</span>}
              </label>
              <div className="flex items-center gap-3 h-9">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-12 h-9 object-cover rounded-md border border-gray-200 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/100x100?text=Foto";
                    }}
                  />
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer h-9"
                />
              </div>
              {initialData && (
                <p className="text-xs text-gray-400">
                  Biarkan kosong jika tidak ingin mengganti foto.
                </p>
              )}
            </div>

            {/* Alamat — full width */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Alamat Lengkap <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Contoh: Jl. Ahmad Yani No.1, Karawang"
                {...register("address")}
              />
              {errors.address && (
                <span className="text-xs text-red-500">{errors.address.message}</span>
              )}
            </div>

            {/* Embed Map — full width */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Link Embed Map (Google Maps){" "}
                <span className="text-gray-400 font-normal text-xs">Opsional</span>
              </label>
              <Input
                placeholder="https://www.google.com/maps/embed?pb=..."
                {...register("map_embed")}
              />
              {errors.map_embed && (
                <span className="text-xs text-red-500">{errors.map_embed.message}</span>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 flex justify-end gap-2 border-t mt-2">
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
              className="bg-primary hover:bg-primary-hover text-white cursor-pointer"
            >
              {isLoading ? "Menyimpan..." : "Simpan Data"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
