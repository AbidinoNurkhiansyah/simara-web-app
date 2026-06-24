import heroImage from "@/assets/tempat-ibadah-hero.webp";
import { DirectoryHeroSection } from "@/components/DirectoryHeroSection";
import { categories } from "../constants";

interface TempatIbadahHeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function TempatIbadahHeroSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: TempatIbadahHeroSectionProps) {
  return (
    <DirectoryHeroSection
      title={
        <>
          Tempat Ibadah Antar Umat
          <br />
          Beragama di Karawang Barat
        </>
      }
      searchPlaceholder="Masukkan Nama tempat atau Lokasi"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      categories={categories}
      imageSrc={heroImage}
      imageAlt="Tempat Ibadah di Karawang Barat"
    />
  );
}
