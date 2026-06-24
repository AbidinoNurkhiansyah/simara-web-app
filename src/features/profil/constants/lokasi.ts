import { MapPin, Phone, Mail } from "lucide-react";
import type { ContactInfo, OperationalHours } from "../types";

export const contactInfoList: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Alamat Fisik",
    value: "Jl. Raya Karawang Barat No.12, Karawang Kulon, Kec. Karawang Barat, Kab. Karawang, Jawa Barat 41311"
  },
  {
    icon: Phone,
    title: "Nomor Telepon",
    value: "(0267) 123456"
  },
  {
    icon: Mail,
    title: "Email Kantor",
    value: "kua.karawangbarat@kemenag.go.id"
  }
];

export const operationalHours: OperationalHours = {
  title: "Jam Operasional",
  schedule: [
    "Senin-Kamis: 07:30 - 16:00 WIB",
    "Jumat: 07:30 - 16:30 WIB"
  ]
};
