import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import {
  getTempatIbadahsPaginated,
  createTempatIbadah,
  updateTempatIbadah,
  deleteTempatIbadah,
  type PaginatedResponse,
} from "../api";
import type { TempatIbadah, TempatIbadahFormData } from "../types";
import { useDebounce } from "../../../hooks/useDebounce";

export const useTempatIbadahs = () => {
  const [data, setData] = useState<PaginatedResponse<TempatIbadah> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination & Filtering state
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TempatIbadah | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Delete states
  const [itemToDelete, setItemToDelete] = useState<TempatIbadah | null>(null);

  const fetchData = useCallback(async (isBackground = false) => {
    try {
      if (!isBackground) setIsLoading(true);
      setIsFetching(true);
      setError(null);
      
      const response = await getTempatIbadahsPaginated(page, 10, debouncedSearchQuery, filterType);
      setData(response);
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.message || "Terjadi kesalahan saat mengambil data");
      toast.error("Gagal memuat data tempat ibadah");
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  }, [page, debouncedSearchQuery, filterType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Modal Handlers
  const handleOpenCreateModal = () => {
    setSelectedData(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: TempatIbadah) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // Submit Handler
  const handleSubmit = async (formData: TempatIbadahFormData) => {
    try {
      setIsSubmitting(true);
      if (selectedData) {
        await updateTempatIbadah(selectedData.id, formData);
        toast.success("Data tempat ibadah berhasil diperbarui");
      } else {
        await createTempatIbadah(formData);
        toast.success("Data tempat ibadah berhasil ditambahkan");
      }
      handleCloseModal();
      fetchData(true); // background refresh
    } catch (err: any) {
      console.error("Error submitting form:", err);
      const message = err.response?.data?.message || "Terjadi kesalahan saat menyimpan data";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Handlers
  const requestDelete = (item: TempatIbadah) => {
    setItemToDelete(item);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      await deleteTempatIbadah(itemToDelete.id);
      toast.success("Data berhasil dihapus");
      
      // If we deleted the last item on the page, go to previous page
      if (data?.data.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        fetchData(true);
      }
    } catch (err: any) {
      console.error("Error deleting item:", err);
      toast.error(err.response?.data?.message || "Gagal menghapus data");
    } finally {
      setItemToDelete(null);
    }
  };

  return {
    // Data & Loading States
    data,
    isLoading,
    isFetching,
    error,
    
    // Pagination & Filter States
    page,
    handlePageChange: setPage,
    searchQuery,
    setSearchQuery,
    filterType,
    setFilterType,

    // Modal States & Handlers
    isModalOpen,
    isSubmitting,
    selectedData,
    handleOpenCreateModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSubmit,

    // Delete States & Handlers
    itemToDelete,
    requestDelete,
    cancelDelete,
    confirmDelete,

    // Expose fetch for manual refresh if needed
    refetch: () => fetchData(true),
  };
};
