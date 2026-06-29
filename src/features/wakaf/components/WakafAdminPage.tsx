import React from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { WakafTable } from "./WakafTable";
import { WakafFormModal } from "./WakafFormModal";
import { useWakafs } from "../hooks/useWakafs";
import { jenisPropertiOptions } from "../constants";


export const WakafAdminPage: React.FC = () => {
  const {
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
    filterJenis,
    setFilterJenis,
  } = useWakafs();

  return (
    <div className="mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manajemen Data Wakaf
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Kelola data aset wakaf di wilayah KUA Karawang Barat
          </p>
        </div>
        <Button
          onClick={handleOpenCreateModal}
          className="bg-primary cursor-pointer text-white flex items-center justify-center gap-2 w-full sm:w-auto h-11 sm:h-10"
        >
          <Plus size={18} />
          Tambah Data
        </Button>
      </div>

      {/* Data Card */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-5 flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-gray-100">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <Input
              placeholder="Cari nama, nadzir, atau alamat..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter by Jenis */}
          <div className="flex gap-3 w-full sm:w-auto">
            <Select value={filterJenis} onValueChange={setFilterJenis}>
              <SelectTrigger className="w-full sm:w-[160px] text-gray-600 bg-white">
                <div className="flex items-center gap-2">
                  <Filter size={14} />
                  <SelectValue placeholder="Jenis Properti" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Jenis</SelectItem>
                {jenisPropertiOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table Area */}
        <div className="relative px-5 pb-5 pt-3">
          {/* Background-fetch progress bar */}
          {isFetching && !isLoading && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/20 overflow-hidden z-10">
              <div className="h-full bg-primary animate-pulse w-full" />
            </div>
          )}
          <WakafTable
            data={data?.data || []}
            onEdit={handleOpenEditModal}
            onDelete={requestDelete}
            isLoading={isLoading}
          />
        </div>

        {/* Pagination */}
        {data?.meta && data.meta.last_page > 1 && (
          <div className="py-4 px-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Menampilkan{" "}
              <span className="font-medium text-gray-900">
                {(data.meta.current_page - 1) * data.meta.per_page + 1}
              </span>{" "}
              hingga{" "}
              <span className="font-medium text-gray-900">
                {Math.min(data.meta.current_page * data.meta.per_page, data.meta.total)}
              </span>{" "}
              dari{" "}
              <span className="font-medium text-gray-900">{data.meta.total}</span>{" "}
              data
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="bg-white h-9 cursor-pointer"
              >
                Previous
              </Button>
              <div className="text-sm font-medium text-gray-700 px-2">
                Hal {page} / {data.meta.last_page}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === data.meta.last_page}
                className="bg-white h-9 cursor-pointer"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Form Modal */}
      <WakafFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={selectedData}
        isLoading={isSubmitting}
      />

      {/* Delete Confirmation */}
      <AlertDialog
        open={!!itemToDelete}
        onOpenChange={(open) => !open && cancelDelete()}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Hapus Data</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus data wakaf{" "}
              <span className="font-semibold text-gray-900">
                {itemToDelete?.name}
              </span>
              ? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={cancelDelete}
              className="cursor-pointer hover:bg-gray-100 text-gray-700 border border-gray-300"
            >
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 cursor-pointer hover:bg-red-700 text-white"
            >
              Ya, Hapus Data
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
