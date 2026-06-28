import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { TempatIbadahFormData, TempatIbadah } from "../types";

export const formSchema = z.object({
  name: z.string().min(1, "Nama tempat ibadah wajib diisi"),
  type: z.string().min(1, "Tipe wajib dipilih"),
  address: z.string().min(1, "Lokasi/Alamat wajib diisi"),
  details: z.string().min(1, "Deskripsi wajib diisi"),
  map_embed: z.string(),
  image: z.any(),
});

export function useTempatIbadahForm(
  initialData?: TempatIbadah | null,
  isOpen?: boolean
) {
  const form = useForm<TempatIbadahFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "Masjid",
      address: "",
      details: "",
      map_embed: "",
      image: null,
    },
  });

  const { reset, setValue } = form;
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name,
        type: initialData.type,
        address: initialData.address,
        details: Array.isArray(initialData.details)
          ? initialData.details.join("\n\n")
          : initialData.details,
        map_embed: initialData.map_embed || "",
        image: initialData.image, // URL string
      });
      const imgUrl = initialData.image.startsWith("http")
        ? initialData.image
        : `http://localhost:8000${
            initialData.image.startsWith("/") ? "" : "/"
          }${initialData.image}`;
      setImagePreview(imgUrl);
    } else {
      reset({
        name: "",
        type: "Masjid",
        address: "",
        details: "",
        map_embed: "",
        image: null,
      });
      setImagePreview(null);
    }
  }, [initialData, isOpen, reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateAndSubmit = (
    onSubmit: (data: TempatIbadahFormData) => void,
    data: TempatIbadahFormData
  ) => {
    if (!data.image && !initialData) {
      alert("Foto tempat ibadah wajib diunggah.");
      return;
    }
    onSubmit(data);
  };

  return {
    form,
    imagePreview,
    handleImageChange,
    validateAndSubmit,
  };
}
