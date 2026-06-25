import type { TempatIbadah } from "../types";

import masjidImg from "@/assets/religious-place/masjid.webp";
import gerejaImg from "@/assets/religious-place/gereja.webp";
import viharaImg from "@/assets/religious-place/vihara.webp";
import klentengImg from "@/assets/religious-place/klenteng-vihara.webp";

import masjidIcon from "@/assets/religious-icons/masjid.svg";
import gerejaIcon from "@/assets/religious-icons/gereja.svg";
import viharaIcon from "@/assets/religious-icons/vihara.svg";
import klentengIcon from "@/assets/religious-icons/klenteng-vihara.svg";

export const categories = ["Semua", "Masjid", "Gereja", "Klenteng", "Vihara"];

export const tempatIbadahData: TempatIbadah[] = [
  {
    id: 1,
    name: "Masjid Agung Syekh Quro Karawang",
    type: "Masjid",
    address:
      "Jl. Jenderal Ahmad Yani, Karangpawitan, Kec.Karawang Barat, Karawang",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: masjidImg,
    icon: masjidIcon,
  },
  {
    id: 2,
    name: "Gereja Christ the King",
    type: "Gereja",
    address: "Jl. Parahiyangan No.45, Adiarsa Barat, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: gerejaImg,
    icon: gerejaIcon,
  },
  {
    id: 3,
    name: "Masjid Jami An-Nur Tanjungpura",
    type: "Masjid",
    address:
      "Jl. Proklamasi Gg. Masjid No.18, Tanjungpura, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: masjidImg,
    icon: masjidIcon,
  },
  {
    id: 4,
    name: "Vihara Dharma Ayu",
    type: "Vihara",
    address: "Jl. Syeh Quro, Tunggakjati, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: viharaImg,
    icon: viharaIcon,
  },
  {
    id: 5,
    name: "Masjid Baiturrahman Adiarsa",
    type: "Masjid",
    address:
      "Perumahan Adiarsa Indah Blok C, Adiarsa Barat, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: masjidImg,
    icon: masjidIcon,
  },
  {
    id: 6,
    name: "Klenteng Bio Kwan Tee Koen",
    type: "Klenteng",
    address: "Jl. Tuparev No.10, Nagasari, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: klentengImg,
    icon: klentengIcon,
  },
  {
    id: 7,
    name: "Gereja HKBP Karawang",
    type: "Gereja",
    address: "Jl. R.S. Suria Kertawiguna No.8, Nagasari, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: gerejaImg,
    icon: gerejaIcon,
  },
  {
    id: 8,
    name: "Masjid Al-Jihad Karawang",
    type: "Masjid",
    address: "Jl. A. Yani No.22, Karawang Wetan, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: masjidImg,
    icon: masjidIcon,
  },
  {
    id: 9,
    name: "Vihara Avalokitesvara",
    type: "Vihara",
    address: "Jl. Pangkal Perjuangan, Tanjungmekar, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: viharaImg,
    icon: viharaIcon,
  },
  {
    id: 10,
    name: "Gereja Bethel Indonesia (GBI) Karawang",
    type: "Gereja",
    address: "Jl. Kertabumi No.34, Karawang Kulon, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: gerejaImg,
    icon: gerejaIcon,
  },
  {
    id: 11,
    name: "Masjid Al-Barkah",
    type: "Masjid",
    address: "Jl. Proklamasi No.45, Tanjungpura, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: masjidImg,
    icon: masjidIcon,
  },
  {
    id: 12,
    name: "Gereja Katolik Santa Maria",
    type: "Gereja",
    address: "Jl. Tuparev No.112, Karawang Kulon, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: gerejaImg,
    icon: gerejaIcon,
  },
  {
    id: 13,
    name: "Vihara Buddha Dharma",
    type: "Vihara",
    address: "Jl. KH. Dewantara No.2, Adiarsa Barat, Kec. Karawang Barat",
    details: [
      "Bangunan Masjid Al-Jihad Karawang dibangun pertama kali dengan bangunan beton dan berlantai dua pada tahun 1974 lalu. Pada saat itu, masjidnya memiliki kubah kopula tunggal, dengan arsitektur campuran dari seni klasik dan seni modern. Kemudian bangunan tersebut dirobohkan pada tahun 2009, dan dibangun kembali hingga berbentuk saat ini.",
      "Sebuah bangunan masjid yang terkesan dengan desain modern berada dekat dengan tempat stadion Singaperbangsa. Masjid tersebut berdiri kokkoh dekat dengan stadion tersebut maka para supporter dan para pemain sepak bola yang akan datang ke stadion tersebut pasti sudah terbiasa dengan bangunan masjid tersebut. masjid itu bernama masjid Al-Jihad Karawang. Lokasinya juga berada ditempat yang cukup strategis. Jika dari arah tol Karawang Barat yang akan menuju stadion Singaperbangsa, maka mereka akan melewati masjid Al-Jihad Karawang tersebut.Sebenarnya bangunan masjid tersebut bukan merupakan bangunan resmi masjid Agung Kabupaten Karawang. Tetapi jika di perhatikan dari fungsi dari masjid Agung berada di sekitar masjid ini termasuk kantor MUI Kabupaten Karawang, Islamic Center Karawang dan Wisma Haji Karawang berada dalam satu kawasan dengan masjid Al-Jihad Karawang.",
      "Didepan bangunan masjid Al-Jihad juga terdapat sebuah lapangan terbuka yang digunakan sebagai layaknya tempat alun-alun, Lapang Kawang Pawitan, dan dilengkapi dengan pendopo yang berada di sisi jalan raya yang berhadapan langsung dengan masjid Al-Jihad. Di lapangan terbuka tersebut menjadi sebuah pusat keramaian dan titik berkumpulnya para warga terutama pada pagi dan sore hari. Bahkan hingga malam hari pun masih banyak yang mendatangi lapangan terbuka itu.Terutama di hari-hari libur, lapangan tersebut selalu diramaikan oleh warga sekitar yang ingin mencari suasana ramai, karena berbagai wahana permainan seperti sekuter, becak mini dan kereta lampu turut di sewakan di lapangan ini. Pusat pemerintahan kabupaten karawang sudah lama dipindah ke lokasi saat ini, sehingga kadang-kadang orang-orang bingung dan menganggap Masjid Al-Jihad ini sebagai Masjid Agung Karawang.",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.939235216016!2d107.27991421389821!3d-6.2985368759253975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e688bc76a1%3A0x1c78d20df2a3a3b7!2sAl-Jihad%20Mosque!5e0!3m2!1sen!2sid!4v1782398760577!5m2!1sen!2sid",
    image: viharaImg,
    icon: viharaIcon,
  },
];
