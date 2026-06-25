export function JenisSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        2. Jenis Wakaf
      </h2>
      <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
        <li>
          <span className="font-bold">Wakaf Ahli (Keluarga) :</span> Ditujukan
          untuk keluarga atau kerabat dekat wakif. Setelah tidak ada lagi
          penerima manfaat dalam keluarga, aset wakaf dialihkan untuk
          kepentingan umum.
        </li>
        <li>
          <span className="font-bold">Wakaf Khairi (Umum) :</span> Ditujukan
          sepenuhnya untuk kepentingan umum atau amal, seperti pembangunan
          fasilitas ibadah, pendidikan, kesehatan, atau lainnya.
        </li>
      </ul>
    </div>
  );
}
