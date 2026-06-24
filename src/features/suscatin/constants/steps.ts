import type { SuscatinStep } from "../types";

import step1Img from "@/assets/step-pernikahan/step-1.webp";
import step2Img from "@/assets/step-pernikahan/step-2.webp";
import step3Img from "@/assets/step-pernikahan/step-3.webp";
import step4Img from "@/assets/step-pernikahan/step-4.webp";
import step5Img from "@/assets/step-pernikahan/step-5.webp";
import step6Img from "@/assets/step-pernikahan/step-7.webp";

export const suscatinSteps: SuscatinStep[] = [
  {
    id: 1,
    title: "Persiapkan dokumen yang dibutuhkan",
    image: step1Img,
    desc: [
      "KTP calon pengantin",
      "Akta kelahiran atau kartu keluarga",
      "Surat pengantar dari kelurahan/desa atau catatan sipil",
      "Foto terbaru (biasanya ukuran 4x6)",
      "Surat izin dari orangtua (jika diperlukan, terutama bagi yang masih di bawah usia pernikahan)",
    ],
  },
  {
    id: 2,
    title: "Datang ke KUA sesuai dengan domisili",
    image: step2Img,
    desc: [
      "Di sana, Anda bisa mendaftar untuk mengikuti kursus SUSCATIN. Biasanya, Anda perlu mengisi formulir pendaftaran.",
    ],
  },
  {
    id: 3,
    title: "Pendaftaran dan Pembayaran",
    image: step3Img,
    desc: [
      "Lakukan pendaftaran dengan mengisi formulir yang disediakan dan membayar biaya kursus jika ada (biaya bisa berbeda-beda tergantung lokasi dan lembaga). Pastikan Anda mengetahui jadwal kursus yang tersedia.",
    ],
  },
  {
    id: 4,
    title: "Ikuti Kursus",
    image: step4Img,
    desc: [
      "Kursus calon pengantin biasanya berlangsung selama beberapa hari hingga beberapa minggu, tergantung pada kebijakan lembaga penyelenggara. Kursus ini akan mencakup materi terkait persiapan pernikahan, hukum perkawinan, kesehatan reproduksi, hingga etika rumah tangga.",
    ],
  },
  {
    id: 5,
    title: "Ujian dan Sertifikat",
    image: step5Img,
    desc: [
      "Setelah menyelesaikan kursus, biasanya ada ujian atau tes untuk menilai pemahaman Anda. Jika lulus, pasangan calon pengantin akan diberikan sertifikat sebagai bukti telah mengikuti kursus SUSCATIN.",
    ],
  },
  {
    id: 6,
    title: "Lanjutkan ke Proses Pernikahan",
    image: step6Img,
    desc: [
      "Setelah mendapatkan sertifikat SUSCATIN, Anda bisa melanjutkan proses pernikahan di KUA atau tempat yang Anda pilih sesuai dengan regulasi yang berlaku.",
    ],
  },
];
