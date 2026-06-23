import { 
  HeroSection, 
  LayananSection, 
  AlurPendaftaranSection, 
  ProgramKerjaSection 
} from "../features/beranda";

export default function Beranda() {
  return (
    <div className="space-y-8 md:space-y-12 pb-10 sm:pb-20">
      <HeroSection />
      <LayananSection />
      <AlurPendaftaranSection />
      <ProgramKerjaSection />
    </div>
  );
}
