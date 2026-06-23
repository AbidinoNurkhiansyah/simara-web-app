import { Compass, Users, School, Handshake } from "lucide-react";
import type { Service } from '../types';

import tempatIbadahImg from "@/assets/tempat-ibadah.webp";
import wakafImg from "@/assets/wakaf.webp";
import madrasahImg from "@/assets/madrasah.webp";

export const services: Service[] = [
  {
    title: "Suscatin",
    description:
      "Kursus singkat yang diselenggarakan oleh Kantor Urusan Agama (KUA) untuk calon pengantin",
    path: "/layanan/suscatin",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Tempat Ibadah",
    description:
      "List data tempat atau fasilitas Keagamaan antar umat beragama di Kecamatan Karawang Barat",
    path: "/layanan/tempat-ibadah",
    icon: Compass,
    image: tempatIbadahImg,
  },
  {
    title: "Waqaf",
    description:
      "konsep dalam Islam di mana seseorang menyerahkan harta benda untuk tujuan amal secara permanen",
    path: "/layanan/wakaf",
    icon: Handshake,
    image: wakafImg,
  },
  {
    title: "Madrasah",
    description:
      "List data sekolah agama islam dari berbagai tingkatan di Kecamatan Karawang Barat",
    path: "/layanan/madrasah",
    icon: School,
    image: madrasahImg,
  },
];
