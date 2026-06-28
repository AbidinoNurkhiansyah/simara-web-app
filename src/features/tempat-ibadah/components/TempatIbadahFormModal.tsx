import React from "react";
import type { TempatIbadahFormData, TempatIbadah } from "../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { X } from "lucide-react";
import { useTempatIbadahForm } from "../hooks/useTempatIbadahForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TempatIbadahFormData) => void;
  initialData?: TempatIbadah | null;
  isLoading?: boolean;
}

export const TempatIbadahFormModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading,
}) => {
  const { form, imagePreview, handleImageChange, validateAndSubmit } =
    useTempatIbadahForm(initialData, isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleFormSubmit = (data: TempatIbadahFormData) => {
    validateAndSubmit(onSubmit, data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b shrink-0">
          <h3 className="text-xl font-bold text-gray-800">
            {initialData ? "Edit Data Tempat Ibadah" : "Tambah Data Baru"}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1: Name */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Nama Tempat Ibadah</label>
              <Input
                placeholder="Contoh: Masjid Agung..."
                {...register("name")}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>

            {/* Row 2: Type and Image */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tipe</label>
              <select
                {...register("type")}
                className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="Masjid">Masjid</option>
                <option value="Gereja">Gereja</option>
                <option value="Vihara">Vihara</option>
                <option value="Klenteng">Klenteng</option>
                <option value="Pura">Pura</option>
              </select>
              {errors.type && <span className="text-xs text-red-500">{errors.type.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Foto
              </label>
              <div className="flex items-center gap-4">
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer max-w-[12rem] md:max-w-[14rem]"
                />
              </div>
            </div>

            {/* Row 3: Address and Map Embed */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Lokasi / Alamat
              </label>
              <Input
                placeholder="Contoh: Jl. Ahmad Yani..."
                {...register("address")}
              />
              {errors.address && <span className="text-xs text-red-500">{errors.address.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Link Embed Map (Google Maps)
              </label>
              <Input
                placeholder="https://www.google.com/maps/embed?pb=..."
                {...register("map_embed")}
              />
              {errors.map_embed && <span className="text-xs text-red-500">{errors.map_embed.message}</span>}
            </div>

            {/* Row 4: Details */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Deskripsi
              </label>
              <textarea
                rows={3}
                placeholder="Masukkan deskripsi atau sejarah tempat ibadah..."
                {...register("details")}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <p className="text-xs text-gray-500">Gunakan baris baru (Enter) untuk memisahkan paragraf.</p>
              {errors.details && <span className="text-xs text-red-500">{errors.details.message}</span>}
            </div>
          </div>

          <div className="pt-4 flex justify-end space-x-2 border-t mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="cursor-pointer mt-4"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#1e4d2b] hover:bg-[#15361e] text-white cursor-pointer mt-4"
            >
              {isLoading ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
