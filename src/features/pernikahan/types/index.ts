export interface PernikahanRecord {
  id: number;
  jenis: "pernikahan" | "isbat_nikah";
  nama_suami: string;
  nama_istri: string;
  tanggal_pelaksanaan: string;
  lokasi: string;
  created_at: string;
  updated_at: string;
}

export interface PernikahanFormData {
  jenis: "pernikahan" | "isbat_nikah";
  nama_suami: string;
  nama_istri: string;
  tanggal_pelaksanaan: string;
  lokasi: string;
}
