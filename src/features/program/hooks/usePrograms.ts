import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import {
  getProgramsPaginated,
  createProgram,
  updateProgram,
  deleteProgram,
  type PaginatedResponse,
} from "../api";
import type { ProgramItem, ProgramFormData } from "../types";
import { useDebounce } from "../../../hooks/useDebounce";

export const usePrograms = () => {
  const [data, setData] = useState<PaginatedResponse<ProgramItem> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination & Filtering state
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<ProgramItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Delete states
  const [itemToDelete, setItemToDelete] = useState<ProgramItem | null>(null);

  const fetchData = useCallback(async (isBackground = false) => {
    try {
      if (!isBackground) setIsLoading(true);
      setIsFetching(true);
      setError(null);
      
      const response = await getProgramsPaginated(page, 10, debouncedSearchQuery);
      setData(response);
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.message || "Terjadi kesalahan saat mengambil data");
      toast.error("Gagal memuat data program");
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  }, [page, debouncedSearchQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Modal Handlers
  const handleOpenCreateModal = () => {
    setSelectedData(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: ProgramItem) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // Submit Handler
  const handleSubmit = async (formData: ProgramFormData) => {
    try {
      setIsSubmitting(true);
      if (selectedData) {
        await updateProgram(selectedData.id, formData);
        toast.success("Data program berhasil diperbarui");
      } else {
        await createProgram(formData);
        toast.success("Data program berhasil ditambahkan");
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
  const requestDelete = (item: ProgramItem) => {
    setItemToDelete(item);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      await deleteProgram(itemToDelete.id);
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
    data,
    isLoading,
    isFetching,
    error,
    
    page,
    handlePageChange: setPage,
    searchQuery,
    setSearchQuery,

    isModalOpen,
    isSubmitting,
    selectedData,
    handleOpenCreateModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSubmit,

    itemToDelete,
    requestDelete,
    cancelDelete,
    confirmDelete,

    refetch: () => fetchData(true),
  };
};
