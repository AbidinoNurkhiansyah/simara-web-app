import { useState, useEffect } from "react";
import { getPernikahans } from "@/features/pernikahan/api";

const indonesianMonths = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function useHeroStats() {
  const [stats, setStats] = useState({
    marriagesThisMonth: 0,
    isbatsThisMonth: 0,
    monthLabel: "Bln",
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getPernikahans();
        if (data && data.length > 0) {
          // Sort data by tahun descending, then by bulan descending
          const sortedData = [...data].sort((a, b) => {
            if (a.tahun !== b.tahun) {
              return b.tahun - a.tahun;
            }
            return (
              indonesianMonths.indexOf(b.bulan) -
              indonesianMonths.indexOf(a.bulan)
            );
          });

          // Pick the absolute latest record available in the database
          const record = sortedData[0];

          if (record) {
            setStats({
              marriagesThisMonth: record.pernikahan,
              isbatsThisMonth: record.isbat_nikah,
              monthLabel: record.bulan.substring(0, 3), // e.g. "Jan", "Feb"
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch pernikahan stats", error);
      }
    };

    fetchStats();
  }, []);

  return stats;
}
