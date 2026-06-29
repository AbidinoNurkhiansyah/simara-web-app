import { useState, useEffect } from "react";
import { WakafHeroSection, WakafListSection } from "@/features/wakaf";
import { getWakafs } from "@/features/wakaf/api";
import type { Wakaf as WakafType } from "@/features/wakaf/types";

export default function Wakaf() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [data, setData] = useState<WakafType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getWakafs();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch wakaf", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || item.jenis_properti === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <WakafHeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <WakafListSection data={filteredData} isLoading={isLoading} />
    </div>
  );
}
