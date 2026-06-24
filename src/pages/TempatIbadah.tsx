import { useState } from "react";
import {
  TempatIbadahHeroSection,
  TempatIbadahListSection,
} from "@/features/tempat-ibadah";
import { tempatIbadahData } from "@/features/tempat-ibadah/constants";

export default function TempatIbadah() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredData = tempatIbadahData.filter((item) => {
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
      <TempatIbadahListSection data={filteredData} />
    </div>
  );
}
