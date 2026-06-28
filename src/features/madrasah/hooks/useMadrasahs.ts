import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getMadrasahsPaginated,
  createMadrasah,
  updateMadrasah,
  deleteMadrasah,
} from "../api";
import type { Madrasah, MadrasahFormData } from "../types";
import { useDebounce } from "../../../hooks/useDebounce";

export const useMadrasahs = () => {
  const queryClient = useQueryClient();

  // Pagination & Filtering state
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLevel, setFilterLevel] = useState("Semua");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<Madrasah | null>(null);

  // Delete states
  const [itemToDelete, setItemToDelete] = useState<Madrasah | null>(null);

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['madrasahs', page, debouncedSearchQuery, filterLevel],
    queryFn: () => getMadrasahsPaginated(page, 10, debouncedSearchQuery, filterLevel),
  });

  const createMutation = useMutation({
    mutationFn: (formData: MadrasahFormData) => createMadrasah(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['madrasahs'] });
      toast.success("Data madrasah berhasil ditambahkan");
      handleCloseModal();
    },
    onError: (err: any) => {
      const message = err.response?.data?.message || "Terjadi kesalahan saat menyimpan data";
      toast.error(message);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, formData }: { id: number, formData: MadrasahFormData }) => updateMadrasah(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['madrasahs'] });
      toast.success("Data madrasah berhasil diperbarui");
      handleCloseModal();
    },
    onError: (err: any) => {
      const message = err.response?.data?.message || "Terjadi kesalahan saat menyimpan data";
      toast.error(message);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteMadrasah(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['madrasahs'] });
      toast.success("Data berhasil dihapus");
      setItemToDelete(null);
      if (data?.data.length === 1 && page > 1) {
        setPage(page - 1);
      }
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Gagal menghapus data");
      setItemToDelete(null);
    }
  });

  // Modal Handlers
  const handleOpenCreateModal = () => {
    setSelectedData(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: Madrasah) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  // Submit Handler
  const handleSubmit = (formData: MadrasahFormData) => {
    if (selectedData) {
      updateMutation.mutate({ id: selectedData.id, formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  // Delete Handlers
  const requestDelete = (item: Madrasah) => {
    setItemToDelete(item);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;
    deleteMutation.mutate(itemToDelete.id);
  };

  return {
    data,
    isLoading,
    isFetching,
    error: error?.message || null,

    page,
    handlePageChange: setPage,
    searchQuery,
    setSearchQuery,
    filterLevel,
    setFilterLevel,

    isModalOpen,
    isSubmitting: createMutation.isPending || updateMutation.isPending,
    selectedData,
    handleOpenCreateModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSubmit,

    itemToDelete,
    requestDelete,
    cancelDelete,
    confirmDelete,

    refetch: () => queryClient.invalidateQueries({ queryKey: ['madrasahs'] }),
  };
};
