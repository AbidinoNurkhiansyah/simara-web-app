import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import {
  HeroSection,
  IntroSection,
  UnsurSection,
  JenisSection,
  RequirementsSection,
  CTASection,
} from "@/features/wakaf";

export default function Wakaf() {
  return (
    <div className="pb-24 bg-gray-50">
      <HeroSection />

      {/* Main Content */}
      <section className="container-custom">
        <div className="max-w-5xl mt-10 lg:mt-16 mx-auto space-y-12">
          <IntroSection />
          <UnsurSection />
          <JenisSection />
          <RequirementsSection />
          <CTASection />
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
}
