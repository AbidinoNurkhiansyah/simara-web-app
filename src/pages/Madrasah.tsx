import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  MadrasahHeroSection,
  MadrasahListSection,
} from "@/features/madrasah";
import { getMadrasahs } from "@/features/madrasah/api";

export default function Madrasah() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Semua");

  const { data, isLoading } = useQuery({
    queryKey: ['madrasahs-all'],
    queryFn: getMadrasahs,
  });

  const filteredData = data?.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel =
      selectedLevel === "Semua" || item.level.startsWith(selectedLevel);
    return matchesSearch && matchesLevel;
  }) || [];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MadrasahHeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />
      <MadrasahListSection data={filteredData} isLoading={isLoading} />
    </div>
  );
}
