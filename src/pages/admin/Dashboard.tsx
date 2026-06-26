import { useQuery } from '@tanstack/react-query';
import api from '../../lib/axios';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Users, HeartHandshake } from 'lucide-react';

interface MonthlyStat {
  id: number;
  month: number;
  year: number;
  marriages_count: number;
  isbats_count: number;
}

export default function AdminDashboard() {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await api.get('/stats');
      return response.data as MonthlyStat[];
    },
  });

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Memuat data dashboard...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Gagal memuat data statistik.</div>;
  }

  // Calculate totals from the stats array
  const totalMarriages = stats?.reduce((acc, curr) => acc + curr.marriages_count, 0) || 0;
  const totalIsbats = stats?.reduce((acc, curr) => acc + curr.isbats_count, 0) || 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard Statistik KUA</h1>
        <p className="text-gray-500">Ikhtisar data operasional dan statistik layanan.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Pernikahan</CardTitle>
            <HeartHandshake className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalMarriages}</div>
            <p className="text-xs text-gray-500 mt-1">Berdasarkan data tersimpan</p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Isbat Nikah</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalIsbats}</div>
            <p className="text-xs text-gray-500 mt-1">Berdasarkan data tersimpan</p>
          </CardContent>
        </Card>
      </div>

      {/* Stats Table / List */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Rincian Bulanan</CardTitle>
        </CardHeader>
        <CardContent>
          {stats && stats.length > 0 ? (
            <div className="relative overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-3">Bulan / Tahun</th>
                    <th scope="col" className="px-6 py-3">Pernikahan</th>
                    <th scope="col" className="px-6 py-3">Isbat Nikah</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((stat) => (
                    <tr key={stat.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {stat.month} / {stat.year}
                      </td>
                      <td className="px-6 py-4">{stat.marriages_count}</td>
                      <td className="px-6 py-4">{stat.isbats_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-8 text-center text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              Belum ada data statistik bulan ini.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
