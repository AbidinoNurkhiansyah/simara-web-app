import { useState, useEffect } from "react";
import {
  TempatIbadahHeroSection,
  TempatIbadahListSection,
} from "@/features/tempat-ibadah";
import { getTempatIbadahs } from "@/features/tempat-ibadah/api";
import type { TempatIbadah as TempatIbadahType } from "@/features/tempat-ibadah/types";

export default function TempatIbadah() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [data, setData] = useState<TempatIbadahType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getTempatIbadahs();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch tempat ibadah", error);
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
      selectedCategory === "Semua" || item.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TempatIbadahHeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <TempatIbadahListSection data={filteredData} isLoading={isLoading} />
    </div>
  );
}
