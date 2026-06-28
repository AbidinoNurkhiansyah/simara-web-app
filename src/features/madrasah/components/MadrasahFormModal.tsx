import React, { useState, useEffect } from "react";
import type { MadrasahFormData, Madrasah } from "../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { X } from "lucide-react";
import { useMadrasahForm } from "../hooks/useMadrasahForm";
import { levels } from "../constants";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MadrasahFormData) => void;
  initialData?: Madrasah | null;
  isLoading?: boolean;
}

export const MadrasahFormModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading,
}) => {
  const { form, handleSubmit } = useMadrasahForm({
    initialData: initialData || null,
    onSubmit,
  });

  const {
    register,
    formState: { errors },
    setValue,
  } = form;

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    setImagePreview(
      initialData?.image 
        ? initialData.image.startsWith("http") 
          ? initialData.image 
          : `http://localhost:8000${initialData.image.startsWith("/") ? "" : "/"}${initialData.image}`
        : null
    );
  }, [initialData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setValue("image", null, { shouldValidate: true });
      setImagePreview(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b shrink-0 bg-white sticky top-0 z-10">
          <h3 className="text-xl font-bold text-gray-800">
            {initialData ? "Edit Data Madrasah" : "Tambah Data Baru"}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Row 1: Name */}
            <div className="space-y-2 md:col-span-6">
              <label className="text-sm font-medium text-gray-700">Nama Madrasah</label>
              <Input
                placeholder="Contoh: MIN 1 Karawang..."
                {...register("name")}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>

            {/* Row 2: Level, Status, and Image */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Jenjang</label>
              <select
                {...register("level")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Pilih Jenjang</option>
                {levels.filter(l => l !== 'Semua').map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              {errors.level && <span className="text-xs text-red-500">{errors.level.message}</span>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Status</label>
              <select
                {...register("status")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Pilih Status</option>
                <option value="Negeri">Negeri</option>
                <option value="Swasta">Swasta</option>
              </select>
              {errors.status && <span className="text-xs text-red-500">{errors.status.message}</span>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Foto
              </label>
              <div className="flex items-center gap-3">
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="w-10 h-10 object-cover rounded-md border border-gray-200" />
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer flex-1 h-10"
                />
              </div>
              {errors.image && <span className="text-xs text-red-500">{errors.image.message as string}</span>}
            </div>

            {/* Row 3: Address and Map Embed */}
            <div className="space-y-2 md:col-span-3">
              <label className="text-sm font-medium text-gray-700">
                Lokasi / Alamat
              </label>
              <Input
                placeholder="Contoh: Jl. Ahmad Yani..."
                {...register("address")}
              />
              {errors.address && <span className="text-xs text-red-500">{errors.address.message}</span>}
            </div>

            <div className="space-y-2 md:col-span-3">
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
            <div className="space-y-2 md:col-span-6">
              <label className="text-sm font-medium text-gray-700">
                Deskripsi
              </label>
              <textarea
                rows={4}
                placeholder="Masukkan deskripsi atau profil madrasah..."
                {...register("details")}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <p className="text-xs text-gray-500">Gunakan baris baru (Enter) untuk memisahkan paragraf.</p>
              {errors.details && <span className="text-xs text-red-500">{errors.details.message}</span>}
            </div>
          </div>

          <div className="pt-4 flex justify-end space-x-2 border-t mt-6 sticky bottom-0 bg-white pb-2">
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
