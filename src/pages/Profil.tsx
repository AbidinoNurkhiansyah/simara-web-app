import {
  ProfilHeroSection,
  SejarahSection,
  VisiMisiSection,
  LokasiSection,
} from "../features/profil";

export default function Profil() {
  return (
    <div className="pb-20 space-y-16">
      <ProfilHeroSection />
      <SejarahSection />
      <VisiMisiSection />
      <LokasiSection />
    </div>
  );
}
