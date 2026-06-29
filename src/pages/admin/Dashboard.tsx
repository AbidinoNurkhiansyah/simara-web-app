import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "../../lib/axios";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PernikahanRecord {
  id: number;
  bulan: string;
  tahun: number;
  pernikahan: number;
  isbat_nikah: number;
}

const FULL_MONTH_NAMES = [
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

const currentYear = new Date().getFullYear();

// Stat Card Icon components
const IconPernikahan = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1e4d2b"
    strokeWidth="2"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconIsbat = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1e4d2b"
    strokeWidth="2"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);
const IconTempatIbadah = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1e4d2b"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="2" />
    <path d="M11 2a9 9 0 0 1 9 9" />
    <path d="M11 6a5 5 0 0 1 5 5" />
    <path d="M5.07 16.44A9 9 0 0 1 11 2" />
    <path d="M2 22l10-10" />
    <path d="M17.39 6.61A9 9 0 0 1 20 11" />
  </svg>
);
const IconMadrasah = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1e4d2b"
    strokeWidth="2"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default function AdminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasToastShown = useRef(false);

  useEffect(() => {
    if (location.state?.loginSuccess && !hasToastShown.current) {
      hasToastShown.current = true;
      toast.success("Login Berhasil", {
        description:
          "Selamat datang kembali, Admin KUA. Semoga hari Anda menyenangkan!",
        duration: 5000,
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const { data: pernikahanData, isLoading } = useQuery({
    queryKey: ["pernikahans"],
    queryFn: async () => {
      const response = await api.get("/pernikahans", { params: { all: 'true' } });
      return response.data.data as PernikahanRecord[];
    },
  });

  const { data: tempatIbadahData, isLoading: isLoadingTI } = useQuery({
    queryKey: ["tempatIbadahs", "all"],
    queryFn: async () => {
      const response = await api.get("/tempat-ibadahs", { params: { all: 'true' } });
      return response.data.data as any[];
    },
  });

  const { data: madrasahData, isLoading: isLoadingMadrasah } = useQuery({
    queryKey: ["madrasahs", "all"],
    queryFn: async () => {
      const response = await api.get("/madrasahs", { params: { all: 'true' } });
      return response.data.data as any[];
    },
  });

  const availableYears = pernikahanData ? [...new Set(pernikahanData.map(d => d.tahun))] : [];
  const maxYear = availableYears.length > 0 ? Math.max(...availableYears) : currentYear;
  const currentYearData = pernikahanData?.filter(d => d.tahun === maxYear) || [];

  const totalMarriages =
    currentYearData.reduce((acc, curr) => acc + curr.pernikahan, 0);
  const totalIsbats =
    currentYearData.reduce((acc, curr) => acc + curr.isbat_nikah, 0);

  // Map stats into monthly bar chart data
  const barData = FULL_MONTH_NAMES.map((name) => {
    const found = currentYearData.find((s) => s.bulan === name);
    return {
      name: name.substring(0, 3),
      pernikahan: found?.pernikahan ?? 0,
      isbat: found?.isbat_nikah ?? 0,
    };
  });

  // Calculate YEARLY_DATA for 5 years back (excluding current year)
  const yearlyStatsMap = new Map<number, { year: string; pernikahan: number; isbat: number }>();
  if (pernikahanData) {
    pernikahanData.forEach((record) => {
      if (!yearlyStatsMap.has(record.tahun)) {
        yearlyStatsMap.set(record.tahun, { year: record.tahun.toString(), pernikahan: 0, isbat: 0 });
      }
      const stat = yearlyStatsMap.get(record.tahun)!;
      stat.pernikahan += record.pernikahan;
      stat.isbat += record.isbat_nikah;
    });
  }

  const YEARLY_DATA = Array.from(yearlyStatsMap.values())
    .filter((stat) => parseInt(stat.year) < currentYear)
    .sort((a, b) => parseInt(a.year) - parseInt(b.year))
    .slice(-5);

  const statCards = [
    {
      label: "Pernikahan",
      value: isLoading ? "..." : totalMarriages,
      icon: <IconPernikahan />,
    },
    {
      label: "Isbat Nikah",
      value: isLoading ? "..." : totalIsbats,
      icon: <IconIsbat />,
    },
    { 
      label: "Tempat Ibadah", 
      value: isLoadingTI ? "..." : (tempatIbadahData?.length || 0), 
      icon: <IconTempatIbadah /> 
    },
    { 
      label: "Madrasah", 
      value: isLoadingMadrasah ? "..." : (madrasahData?.length || 0), 
      icon: <IconMadrasah /> 
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl px-5 py-5 flex items-center justify-between shadow-sm border border-gray-100"
          >
            <div>
              <p className="text-accent text-3xl font-extrabold leading-none">
                {card.value}
              </p>
              <p className="text-primary text-md mt-1 font-semibold">
                {card.label}
              </p>
            </div>
            <div>{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Bar Chart — Monthly */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Pernikahan &amp; Isbat Nikah Tahun Ini
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={barData}
              barSize={8}
              barGap={2}
              margin={{ top: 15, right: 15, left: 5, bottom: 10 }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                width={35}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  fontSize: 12,
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
                formatter={(value) =>
                  value === "isbat" ? "Isbat Nikah" : "Pernikahan"
                }
              />
              <Bar
                dataKey="isbat"
                name="isbat"
                fill="#f0b429"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="pernikahan"
                name="pernikahan"
                fill="#1e4d2b"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart — 5 Years */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">
            Pernikahan &amp; Isbat Nikah Dalam Kurun Waktu 5 Tahun Terakhir
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={YEARLY_DATA}
              margin={{ top: 15, right: 25, left: 5, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                width={35}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  fontSize: 12,
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
                formatter={(value) =>
                  value === "isbat" ? "Isbat Nikah" : "Pernikahan"
                }
              />
              <Line
                type="monotone"
                dataKey="isbat"
                name="isbat"
                stroke="#f0b429"
                strokeWidth={2.5}
                dot={{ r: 5, fill: "#f0b429", strokeWidth: 0 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="pernikahan"
                name="pernikahan"
                stroke="#1e4d2b"
                strokeWidth={2.5}
                dot={{ r: 5, fill: "#1e4d2b", strokeWidth: 0 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
