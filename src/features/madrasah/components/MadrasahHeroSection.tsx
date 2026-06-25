import heroImage from "@/assets/madrasah-hero.webp";
import { DirectoryHeroSection } from "@/components/DirectoryHeroSection";
import { levels } from "../constants";

interface MadrasahHeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
}

export function MadrasahHeroSection({
  searchQuery,
  setSearchQuery,
  selectedLevel,
  setSelectedLevel,
}: MadrasahHeroSectionProps) {
  return (
    <DirectoryHeroSection
      title={
        <>
          Direktori Madrasah Binaan
          <br />
          di Karawang Barat
        </>
      }
      searchPlaceholder="Cari nama madrasah atau alamat"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedCategory={selectedLevel}
      setSelectedCategory={setSelectedLevel}
      categories={levels}
      imageSrc={heroImage}
      imageAlt="Direktori Madrasah di Karawang Barat"
    />
  );
}
