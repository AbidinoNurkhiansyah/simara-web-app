import type { Madrasah } from "../types";

export const levels = ["Semua", "RA", "MI", "MTs", "MA", "MDT"];

const defaultDetails = [
  "Pada mulanya bernama Pendidikan Guru Agama Pertama (PGAP) Syarif Hidayatulloh yang berdiri pada tanggal 28 Oktober 1965. Kemudian pada tahun 1967 dinegerikan menjadi PGAN 4 tahun Cilamaya berdasarkan KMA No.118 tahun 1967.",
  "Pada tahun 1970 PGAN 4 tahun disempurnakan menjadi PGAN 6 tahun berdasarkan KMA No. 6 tahun 1970. Sesuai dengan perkembangan pendidikan di Indonesia pada tahun 1978,  PGAN 6 tahun dipecah menjadi dua, yaitu: Kelas I s/d kelas III menjadi Madrasah  Tsanawiyah Negeri (MTsN) dan dari kelas IV s/d kelas VI menjadi  Pendidikan Guru Agama Negeri (PGAN)."
];

const defaultMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253803.07692212626!2d107.031135925!3d-6.306612199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977def39a5fab%3A0x399f5a89c983ede0!2sMTsN%204%20Karawang!5e0!3m2!1sen!2sid!4v1782409604807!5m2!1sen!2sid";

export const madrasahData: Madrasah[] = [
  {
    id: 1,
    name: "MIN 1 Karawang",
    level: "MI (Ibtidaiyah)",
    address: "Jl. Ahmad Yani No.14, Nagasari, Kec. Karawang Barat",
    status: "Negeri",
    details: defaultDetails,
    mapEmbed: defaultMapEmbed,
  },
  {
    id: 2,
    name: "MTsN 1 Karawang",
    level: "MTs (Tsanawiyah)",
    address: "Jl. Alun-Alun Barat No.4, Karawang Kulon, Kec. Karawang Barat",
    status: "Negeri",
    details: defaultDetails,
    mapEmbed: defaultMapEmbed,
  },
  {
    id: 3,
    name: "MAN 1 Karawang",
    level: "MA (Aliyah)",
    address: "Jl. Proklamasi No.112, Tanjungpura, Kec. Karawang Barat",
    status: "Negeri",
    details: defaultDetails,
    mapEmbed: defaultMapEmbed,
  },
  {
    id: 4,
    name: "RA Perwanida Karawang",
    level: "RA (Raudhatul Athfal)",
    address: "Jl. Kutakarya No.8, Nagasari, Kec. Karawang Barat",
    status: "Swasta",
    details: defaultDetails,
    mapEmbed: defaultMapEmbed,
  },
  {
    id: 5,
    name: "MDT Al-Barokah Tunggakjati",
    level: "MDT (Diniyah Takmiliyah)",
    address: "Jl. Syeh Quro, Tunggakjati, Kec. Karawang Barat",
    status: "Swasta",
    details: defaultDetails,
    mapEmbed: defaultMapEmbed,
  },
  {
    id: 6,
    name: "MTs Al-Ihsan Adiarsa",
    level: "MTs (Tsanawiyah)",
    address: "Jl. Adiarsa Raya No.24, Adiarsa Barat, Kec. Karawang Barat",
    status: "Swasta",
    details: defaultDetails,
    mapEmbed: defaultMapEmbed,
  },
];
