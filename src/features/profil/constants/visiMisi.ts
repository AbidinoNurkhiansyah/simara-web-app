import { HeartHandshake, Landmark, BookOpen, Users } from "lucide-react";
import type { Misi } from "../types";

export const misiList: Misi[] = [
  {
    icon: HeartHandshake,
    title: "Pelayanan & Kemitraan",
    description: "Meningkatkan kualitas pelayanan pencatatan pernikahan, bimbingan pranikah, dan kemitraan umat."
  },
  {
    icon: Landmark,
    title: "Pengelolaan Wakaf",
    description: "Membina dan mengamankan aset wakaf secara legal, tertib, dan bernilai guna ekonomi tinggi."
  },
  {
    icon: BookOpen,
    title: "Edukasi Keagamaan",
    description: "Memperkuat edukasi keagamaan inklusif bagi seluruh lapisan masyarakat madrasah & pengurus tempat ibadah."
  },
  {
    icon: Users,
    title: "Kerukunan Umat",
    description: "Mendorong toleransi serta kerukunan umat beragama demi ketenteraman Karawang Barat."
  }
];
