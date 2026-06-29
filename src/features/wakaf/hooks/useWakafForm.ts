import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Wakaf } from "../types";

export const wakafFormSchema = z.object({
  name: z.string().min(1, "Nama aset wakaf wajib diisi"),
  jenis_properti: z.enum(["Tanah", "Bangunan"], {
    message: "Jenis properti wajib dipilih",
  }),
  luas: z.string().min(1, "Luas wajib diisi"),
  nadzir: z.string().min(1, "Nama nadzir wajib diisi"),
  address: z.string().min(1, "Alamat wajib diisi"),
  map_embed: z.string().optional(),
  image: z.any(),
});

// Derive the form type from schema — keeps types always in sync
export type WakafFormValues = z.infer<typeof wakafFormSchema>;

export function useWakafForm(initialData?: Wakaf | null, isOpen?: boolean) {
  const form = useForm<WakafFormValues>({
    resolver: zodResolver(wakafFormSchema),
    defaultValues: {
      name: "",
      jenis_properti: "Tanah",
      luas: "",
      nadzir: "",
      address: "",
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
        jenis_properti: initialData.jenis_properti,
        luas: initialData.luas,
        nadzir: initialData.nadzir,
        address: initialData.address,
        map_embed: initialData.map_embed || "",
        image: initialData.image,
      });

      if (initialData.image) {
        const imgUrl = initialData.image.startsWith("http")
          ? initialData.image
          : `http://localhost:8000${
              initialData.image.startsWith("/") ? "" : "/"
            }${initialData.image}`;
        setImagePreview(imgUrl);
      }
    } else {
      reset({
        name: "",
        jenis_properti: "Tanah",
        luas: "",
        nadzir: "",
        address: "",
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
    onSubmit: (data: WakafFormValues) => void,
    data: WakafFormValues
  ) => {
    if (!data.image && !initialData) {
      alert("Foto aset wakaf wajib diunggah.");
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
