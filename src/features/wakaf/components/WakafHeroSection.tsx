import heroImage from "@/assets/tempat-ibadah-hero.webp";
import { DirectoryHeroSection } from "@/components/DirectoryHeroSection";

interface WakafHeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function WakafHeroSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: WakafHeroSectionProps) {
  // Reuse categories or define Wakaf specific ones
  const wakafCategories = ["Semua", "Tanah", "Bangunan"];

  return (
    <DirectoryHeroSection
      title={
        <>
          Direktori Aset Wakaf
          <br />
          di Karawang Barat
        </>
      }
      searchPlaceholder="Cari nama aset atau lokasi"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      categories={wakafCategories}
      imageSrc={heroImage}
      imageAlt="Aset Wakaf Karawang Barat"
    />
  );
}
