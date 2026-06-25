export function UnsurSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        1. Unsur-unsur Wakaf
      </h2>
      <ul className="space-y-3 text-text-secondary text-sm md:text-base leading-relaxed list-disc pl-6">
        <li>
          <span className="font-bold text-text-primary">Wakif :</span> Orang
          yang memberikan harta wakaf.
        </li>
        <li>
          <span className="font-bold text-text-primary">
            Mauquf (Harta Wakaf) :
          </span>{" "}
          Harta yang diwakafkan, harus berupa harta yang memiliki nilai dan
          bersifat kekal, seperti tanah, bangunan, uang (wakaf tunai), atau
          aset lain yang tidak habis sekali pakai.
        </li>
        <li>
          <span className="font-bold text-text-primary">
            Mauquf ‘Alaih :
          </span>{" "}
          Pihak atau institusi yang menerima manfaat dari wakaf, misalnya
          masjid, sekolah, rumah sakit, atau masyarakat umum
        </li>
        <li>
          <span className="font-bold text-text-primary">Nazhir :</span>{" "}
          Pengelola atau pihak yang ditunjuk untuk menjaga, mengelola, dan
          mendistribusikan hasil dari harta wakaf sesuai tujuan wakaf.
        </li>
      </ul>
    </div>
  );
}
