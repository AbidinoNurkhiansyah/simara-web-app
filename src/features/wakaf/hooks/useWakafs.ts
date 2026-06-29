import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import {
  getWakafsPaginated,
  createWakaf,
  updateWakaf,
  deleteWakaf,
  type PaginatedResponse,
} from "../api";
import type { Wakaf } from "../types";
import type { WakafFormValues } from "./useWakafForm";
import { useDebounce } from "../../../hooks/useDebounce";

export const useWakafs = () => {
  const [data, setData] = useState<PaginatedResponse<Wakaf> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination & Filtering state
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterJenis, setFilterJenis] = useState("all");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<Wakaf | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Delete states
  const [itemToDelete, setItemToDelete] = useState<Wakaf | null>(null);

  const fetchData = useCallback(
    async (isBackground = false) => {
      try {
        if (!isBackground) setIsLoading(true);
        setIsFetching(true);
        setError(null);

        const response = await getWakafsPaginated(
          page,
          10,
          debouncedSearchQuery,
          filterJenis
        );
        setData(response);
      } catch (err: unknown) {
        console.error("Error fetching data:", err);
        const message =
          err instanceof Error ? err.message : "Terjadi kesalahan saat mengambil data";
        setError(message);
        toast.error("Gagal memuat data wakaf");
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    },
    [page, debouncedSearchQuery, filterJenis]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Reset to page 1 when filter/search changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearchQuery, filterJenis]);

  // Modal Handlers
  const handleOpenCreateModal = () => {
    setSelectedData(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: Wakaf) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // Submit Handler
  const handleSubmit = async (formData: WakafFormValues) => {
    try {
      setIsSubmitting(true);
      if (selectedData) {
        await updateWakaf(selectedData.id, formData);
        toast.success("Data wakaf berhasil diperbarui");
      } else {
        await createWakaf(formData);
        toast.success("Data wakaf berhasil ditambahkan");
      }
      handleCloseModal();
      fetchData(true); // background refresh
    } catch (err: unknown) {
      console.error("Error submitting form:", err);
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Terjadi kesalahan saat menyimpan data";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Handlers
  const requestDelete = (item: Wakaf) => {
    setItemToDelete(item);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      await deleteWakaf(itemToDelete.id);
      toast.success("Data wakaf berhasil dihapus");

      // If we deleted the last item on the page, go to previous page
      if (data?.data.length === 1 && page > 1) {
        setPage(page - 1);
      } else {
        fetchData(true);
      }
    } catch (err: unknown) {
      console.error("Error deleting item:", err);
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        "Gagal menghapus data";
      toast.error(message);
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
    filterJenis,
    setFilterJenis,

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

    // Manual refresh
    refetch: () => fetchData(true),
  };
};
