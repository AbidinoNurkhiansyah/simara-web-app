import React, { useState, useEffect } from "react";
import { Plus, Filter } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { PernikahanTable } from "./PernikahanTable";
import { PernikahanFormModal } from "./PernikahanFormModal";
import type { PernikahanRecord, PernikahanFormData } from "../types";
import {
  getPernikahans,
  createPernikahan,
  updatePernikahan,
  deletePernikahan,
} from "../api";

export const PernikahanAdminPage: React.FC = () => {
  const [data, setData] = useState<PernikahanRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedData, setSelectedData] = useState<PernikahanRecord | null>(null);
  
  // Filter state
  const [filterJenis, setFilterJenis] = useState<"semua" | "pernikahan" | "isbat_nikah">("semua");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getPernikahans(filterJenis === "semua" ? undefined : filterJenis);
      setData(result);
    } catch (error) {
      console.error("Gagal mengambil data pernikahan:", error);
      alert("Terjadi kesalahan saat mengambil data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterJenis]);

  const handleOpenCreateModal = () => {
    setSelectedData(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: PernikahanRecord) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleDelete = async (item: PernikahanRecord) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus data atas nama ${item.nama_suami} & ${item.nama_istri}?`)) {
      try {
        await deletePernikahan(item.id);
        fetchData();
      } catch (error) {
        console.error("Gagal menghapus data:", error);
        alert("Terjadi kesalahan saat menghapus data");
      }
    }
  };

  const handleSubmit = async (formData: PernikahanFormData) => {
    setIsSubmitting(true);
    try {
      if (selectedData) {
        await updatePernikahan(selectedData.id, formData);
      } else {
        await createPernikahan(formData);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      alert("Terjadi kesalahan saat menyimpan data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Data Pernikahan</h1>
          <p className="text-gray-500 text-sm mt-1">
            Kelola data registrasi pernikahan dan isbat nikah KUA Karawang Barat
          </p>
        </div>
        <Button
          onClick={handleOpenCreateModal}
          className="bg-[#1e4d2b] hover:bg-[#15361e] text-white flex items-center gap-2"
        >
          <Plus size={18} />
          Tambah Data
        </Button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <Filter size={18} className="text-gray-400" />
        <span className="text-sm font-medium text-gray-700">Filter Jenis:</span>
        <select
          value={filterJenis}
          onChange={(e) => setFilterJenis(e.target.value as any)}
          className="flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="semua">Semua</option>
          <option value="pernikahan">Pernikahan</option>
          <option value="isbat_nikah">Isbat Nikah</option>
        </select>
      </div>

      {/* Table Section */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20 bg-white rounded-xl border border-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1e4d2b]"></div>
        </div>
      ) : (
        <PernikahanTable
          data={data}
          onEdit={handleOpenEditModal}
          onDelete={handleDelete}
        />
      )}

      {/* Modal Section */}
      <PernikahanFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={selectedData}
        isLoading={isSubmitting}
      />
    </div>
  );
};
