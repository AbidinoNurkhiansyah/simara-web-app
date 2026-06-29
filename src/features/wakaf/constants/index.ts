// =============================================
// Public portal constants
// =============================================
import type { WakafRequirement } from "../types";

export const wakafRequirements: WakafRequirement[] = [
  {
    title: "Surat permohonan pendaftaran tanah wakaf",
    image: "/src/assets/form-wakaf/1.webp",
  },
  {
    title: "Surat Keterangan Kepala Kelurahan tentang Perwakafan Tanah Milik",
    image: "/src/assets/form-wakaf/2.webp",
  },
  {
    title: "Surat Keterangan & Pernyataan Ahli Waris",
    image: "/src/assets/form-wakaf/3.webp",
  },
  {
    title: "Surat Pernyataan Kesediaan Menjadi Nazhir",
    image: "/src/assets/form-wakaf/4.webp",
  },
  {
    title: "Surat Bersedia di Audit",
    image: "/src/assets/form-wakaf/5.webp",
  },
  {
    title:
      "Identitas Berupa fotocopy KTP wakif, nazhir, dan saksi dalam rangkaian administrasi wakaf.",
    image: "/src/assets/form-wakaf/6.webp",
  },
  {
    title: "Surat Pernyataan Status Tanah Tidak Sengketa",
    image: "/src/assets/form-wakaf/7.webp",
  },
  {
    title: "Daftar Hadir Musyawarah Pembentukan Nazhir",
    image: "/src/assets/form-wakaf/8.webp",
  },
];

// =============================================
// Admin constants
// =============================================
export const jenisPropertiOptions = ["Tanah", "Bangunan"] as const;

export type JenisProperti = (typeof jenisPropertiOptions)[number];
