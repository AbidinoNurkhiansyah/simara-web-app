import { ProgramHero, ProgramIntro, ProgramGrid } from "../features/program";

export default function Program() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <ProgramHero />
      <ProgramIntro />
      <ProgramGrid />
    </div>
  );
}
