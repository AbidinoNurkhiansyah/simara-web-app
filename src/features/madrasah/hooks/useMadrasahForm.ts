import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { Madrasah, MadrasahFormData } from "../types";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  name: z.string().min(3, "Nama madrasah minimal 3 karakter"),
  level: z.string().min(1, "Jenjang harus dipilih"),
  address: z.string().min(10, "Alamat terlalu singkat"),
  status: z.string().min(1, "Status harus dipilih"),
  details: z.string().min(10, "Deskripsi terlalu singkat"),
  map_embed: z.string().optional(),
  image: z.any()
    .refine((file) => {
      if (typeof file === 'string' || file === null || file === undefined) return true;
      if (file instanceof File) {
        return file.size <= MAX_FILE_SIZE;
      }
      return true;
    }, "Ukuran file maksimal 2MB")
    .refine((file) => {
      if (typeof file === 'string' || file === null || file === undefined) return true;
      if (file instanceof File) {
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      }
      return true;
    }, "Format file harus .jpg, .jpeg, .png, atau .webp")
});

export type MadrasahFormValues = z.infer<typeof formSchema>;

interface UseMadrasahFormProps {
  initialData?: Madrasah | null;
  isOpen?: boolean;
  onSubmit: (data: MadrasahFormData) => void;
}

export const useMadrasahForm = ({ initialData, isOpen, onSubmit }: UseMadrasahFormProps) => {
  const form = useForm<MadrasahFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      level: "",
      address: "",
      status: "",
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
        level: initialData.level,
        address: initialData.address,
        status: initialData.status,
        details: Array.isArray(initialData.details) ? initialData.details.join('\n\n') : initialData.details || "",
        map_embed: initialData.mapEmbed || "",
        image: initialData.image || null,
      });
      setImagePreview(
        initialData.image 
          ? initialData.image.startsWith("http") 
            ? initialData.image 
            : `http://localhost:8000${initialData.image.startsWith("/") ? "" : "/"}${initialData.image}`
          : null
      );
    } else {
      reset({
        name: "",
        level: "",
        address: "",
        status: "",
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

  const handleFormSubmit = (values: MadrasahFormValues) => {
    onSubmit(values as MadrasahFormData);
  };

  return {
    form,
    imagePreview,
    handleImageChange,
    handleSubmit: form.handleSubmit(handleFormSubmit),
  };
};
