import { PageHero } from "../components/PageHero";
import heroImg from "../assets/edukasi/pranikah.webp";
import { IntroSection, AspectsSection } from "../features/edukasi/pranikah";

export default function EdukasiPranikah() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col bg-white">
      <PageHero
        badge="Edukasi"
        title="Pranikah"
        imageSrc={heroImg}
        imageAlt="Edukasi Pranikah"
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
