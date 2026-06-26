import { PageHero } from "../components/PageHero";
import heroImg from "../assets/edukasi/pernikahan-hero.webp";
import { IntroSection, AspectsSection } from "../features/edukasi/pernikahan";

export default function EdukasiPernikahan() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <PageHero
        badge="Edukasi"
        title="Pernikahan"
        imageSrc={heroImg}
        imageAlt="Edukasi Pernikahan"
        imageClassName="w-full h-full object-cover object-center md:object-top"
      />

      <section className="py-16 md:py-24 container-custom">
        <div className="max-w-5xl mx-auto space-y-20">
          <IntroSection />
          <AspectsSection />
        </div>
      </section>
    </div>
  );
}
