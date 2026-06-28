export interface PernikahanRecord {
  id: number;
  bulan: string;
  tahun: number;
  pernikahan: number;
  isbat_nikah: number;
  created_at: string;
  updated_at: string;
}

export interface PernikahanFormData {
  bulan: string;
  tahun: number;
  pernikahan: number;
  isbat_nikah: number;
}
