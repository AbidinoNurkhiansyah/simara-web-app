import { 
  HeroSection, 
  LayananSection, 
  AlurPendaftaranSection, 
  ProgramKerjaSection 
} from "../features/beranda";

export default function Beranda() {
  return (
    <div className="pb-0">
      <HeroSection />
      <LayananSection />
      <AlurPendaftaranSection />
      <ProgramKerjaSection />
    </div>
  );
}
