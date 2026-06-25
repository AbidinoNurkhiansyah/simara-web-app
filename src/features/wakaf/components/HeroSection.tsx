import { PageHero } from "@/components/PageHero";

export function HeroSection() {
  return (
    <PageHero
      badge="Edukasi"
      title={<span className="text-accent text-6xl">Perwakaf-an</span>}
      imageSrc="/src/assets/wakaf-hero.webp"
      imageAlt="Edukasi Wakaf"
      imageClassName="w-full h-full object-cover object-[80%_top] md:object-top"
    />
  );
}
