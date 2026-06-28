import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  getPernikahansPaginated,
  createPernikahan,
  updatePernikahan,
  deletePernikahan,
} from "../api";
import type { PernikahanRecord, PernikahanFormData } from "../types";

import { useDebounce } from "../../../hooks/useDebounce";

export function usePernikahans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const [filterYear, setFilterYear] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedData, setSelectedData] = useState<PernikahanRecord | null>(null);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["pernikahans", page, debouncedSearch, filterYear],
    queryFn: () => getPernikahansPaginated(page, 10, debouncedSearch, filterYear),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  const handleOpenCreateModal = () => {
    setSelectedData(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: PernikahanRecord) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [itemToDelete, setItemToDelete] = useState<PernikahanRecord | null>(null);

  const requestDelete = (item: PernikahanRecord) => {
    setItemToDelete(item);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    setIsSubmitting(true);
    try {
      await deletePernikahan(itemToDelete.id);
      queryClient.invalidateQueries({ queryKey: ["pernikahans"] });
      toast.success("Data berhasil dihapus");
    } catch (error) {
      console.error("Gagal menghapus data:", error);
      toast.error("Terjadi kesalahan saat menghapus data");
    } finally {
      setIsSubmitting(false);
      setItemToDelete(null);
    }
  };

  const handleSubmit = async (formData: PernikahanFormData) => {
    setIsSubmitting(true);
    try {
      if (selectedData) {
        await updatePernikahan(selectedData.id, formData);
        toast.success("Data berhasil diperbarui");
      } else {
        await createPernikahan(formData);
        toast.success("Data berhasil ditambahkan");
      }
      setIsModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ["pernikahans"] });
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      toast.error("Terjadi kesalahan saat menyimpan data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    page,
    data,
    isLoading,
    isFetching,
    isModalOpen,
    isSubmitting,
    selectedData,
    handlePageChange,
    handleOpenCreateModal,
    handleOpenEditModal,
    handleCloseModal,
    handleSubmit,
    itemToDelete,
    requestDelete,
    cancelDelete,
    confirmDelete,
    searchQuery,
    setSearchQuery,
    filterYear,
    setFilterYear,
  };
}
