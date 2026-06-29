import React from "react";
import type { ProgramFormData, ProgramItem } from "../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { X } from "lucide-react";
import { useProgramForm } from "../hooks/useProgramForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProgramFormData) => void;
  initialData?: ProgramItem | null;
  isLoading?: boolean;
}

export const ProgramFormModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading,
}) => {
  const { form, imagePreview, handleImageChange, validateAndSubmit } =
    useProgramForm(initialData, isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleFormSubmit = (data: ProgramFormData) => {
    validateAndSubmit(onSubmit, data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b shrink-0">
          <h3 className="text-xl font-bold text-gray-800">
            {initialData ? "Edit Data Program KUA" : "Tambah Data Baru"}
          </h3>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2 md:col-span-3">
              <label className="text-sm font-medium text-gray-700">Judul Program</label>
              <Input
                placeholder="Contoh: Edukasi Pernikahan..."
                {...register("title")}
              />
              {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tanggal</label>
              <Input
                type="date"
                {...register("date")}
              />
              {errors.date && <span className="text-xs text-red-500">{errors.date.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tag / Kategori</label>
              <Input
                placeholder="Contoh: Edukasi"
                {...register("tag")}
              />
              {errors.tag && <span className="text-xs text-red-500">{errors.tag.message}</span>}
            </div>

            <div className="space-y-2 md:col-span-1">
              <label className="text-sm font-medium text-gray-700">
                Foto / Thumbnail
              </label>
              <div className="flex items-center gap-3">
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="w-10 h-10 object-cover rounded border border-gray-200 shrink-0" />
                )}
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer text-xs p-1.5 h-auto flex-1"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-3">
              <label className="text-sm font-medium text-gray-700">
                Deskripsi
              </label>
              <textarea
                rows={4}
                placeholder="Masukkan detail program..."
                {...register("desc")}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <p className="text-xs text-gray-500">Gunakan baris baru (Enter) untuk memisahkan paragraf.</p>
              {errors.desc && <span className="text-xs text-red-500">{errors.desc.message}</span>}
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
