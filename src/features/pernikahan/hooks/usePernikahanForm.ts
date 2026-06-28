import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { PernikahanFormData, PernikahanRecord } from "../types";

export const formSchema = z.object({
  bulan: z.string().min(1, "Bulan wajib diisi"),
  tahun: z.number({ message: "Tahun harus berupa angka" }).min(2000, "Tahun tidak valid").max(2100, "Tahun tidak valid"),
  pernikahan: z.number({ message: "Harus berupa angka" }).min(0, "Tidak boleh negatif"),
  isbat_nikah: z.number({ message: "Harus berupa angka" }).min(0, "Tidak boleh negatif"),
});

export function usePernikahanForm(
  initialData?: PernikahanRecord | null,
  isOpen?: boolean
) {
  const form = useForm<PernikahanFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bulan: "Januari",
      tahun: new Date().getFullYear(),
      pernikahan: 0,
      isbat_nikah: 0,
    },
  });

  const { reset } = form;

  useEffect(() => {
    if (initialData) {
      reset({
        bulan: initialData.bulan,
        tahun: initialData.tahun,
        pernikahan: initialData.pernikahan,
        isbat_nikah: initialData.isbat_nikah,
      });
    } else {
      reset({
        bulan: "Januari",
        tahun: new Date().getFullYear(),
        pernikahan: 0,
        isbat_nikah: 0,
      });
    }
  }, [initialData, isOpen, reset]);

  return form;
}
