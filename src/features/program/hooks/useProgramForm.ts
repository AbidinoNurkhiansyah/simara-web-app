import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { ProgramFormData, ProgramItem } from "../types";

export const formSchema = z.object({
  title: z.string().min(1, "Judul program wajib diisi"),
  tag: z.string().min(1, "Tag wajib diisi"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  desc: z.string().min(1, "Deskripsi wajib diisi"),
  image: z.any().optional(),
});

export function useProgramForm(
  initialData?: ProgramItem | null,
  isOpen?: boolean
) {
  const form = useForm<ProgramFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      tag: "",
      date: "",
      desc: "",
      image: null,
    },
  });

  const { reset, setValue } = form;
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title,
        tag: initialData.tag || "",
        date: initialData.date,
        desc: initialData.desc,
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
        title: "",
        tag: "",
        date: "",
        desc: "",
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
    onSubmit: (data: ProgramFormData) => void,
    data: ProgramFormData
  ) => {
    if (!data.image && !initialData) {
      alert("Foto program wajib diunggah.");
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
