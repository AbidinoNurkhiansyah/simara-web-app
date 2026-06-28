import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
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
      // If it's a string (URL from existing data) or null, it's valid
      if (typeof file === 'string' || file === null || file === undefined) return true;
      // If it's a File object, check size
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
  initialData: Madrasah | null;
  onSubmit: (data: MadrasahFormData) => void;
}

export const useMadrasahForm = ({ initialData, onSubmit }: UseMadrasahFormProps) => {
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

  useEffect(() => {
    if (initialData) {
      form.reset({
        name: initialData.name,
        level: initialData.level,
        address: initialData.address,
        status: initialData.status,
        details: Array.isArray(initialData.details) ? initialData.details.join('\n\n') : initialData.details || "",
        map_embed: initialData.mapEmbed || "",
        image: initialData.image || null,
      });
    } else {
      form.reset({
        name: "",
        level: "",
        address: "",
        status: "",
        details: "",
        map_embed: "",
        image: null,
      });
    }
  }, [initialData, form]);

  const handleSubmit = (values: MadrasahFormValues) => {
    onSubmit(values as MadrasahFormData);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
};
