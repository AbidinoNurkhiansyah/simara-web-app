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
import { MadrasahTable } from "./MadrasahTable";
import { MadrasahFormModal } from "./MadrasahFormModal";
import { useMadrasahs } from "../hooks/useMadrasahs";
import { levels } from "../constants";

export const MadrasahAdminPage: React.FC = () => {
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
    filterLevel,
    setFilterLevel,
  } = useMadrasahs();

  return (
    <div className="mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manajemen Data Madrasah
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Kelola direktori madrasah di KUA Karawang Barat
          </p>
        </div>
        <Button
          onClick={handleOpenCreateModal}
          className="bg-primary cursor-pointer text-white flex items-center justify-center gap-2 w-full sm:w-auto h-12 sm:h-10"
        >
          <Plus size={18} />
          Tambah Data
        </Button>
      </div>

      {/* Data Section */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Toolbar: Search & Filter */}
        <div className="p-5 flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-gray-100">
          <div className="relative w-full sm:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Cari nama atau alamat..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Select value={filterLevel} onValueChange={setFilterLevel}>
              <SelectTrigger className="w-full sm:w-[140px] text-gray-600 bg-white">
                <div className="flex items-center gap-2">
                  <Filter size={14} />
                  <SelectValue placeholder="Jenjang" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {levels.map((lvl) => (
                  <SelectItem key={lvl} value={lvl}>
                    {lvl}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative px-5 pb-5 pt-3">
          {/* Subtle Progress Bar for Background Fetching */}
          {isFetching && !isLoading && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20 overflow-hidden z-10">
              <div className="h-full bg-primary animate-pulse w-full"></div>
            </div>
          )}

          <MadrasahTable
            data={data?.data || []}
            onEdit={handleOpenEditModal}
            onDelete={requestDelete}
            isLoading={isLoading}
          />
        </div>

        {/* Pagination Section */}
        {data?.meta && data.meta.last_page > 1 && (
          <div className="py-4 px-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Menampilkan{" "}
              <span className="font-medium text-gray-900">
                {(data.meta.current_page - 1) * data.meta.per_page + 1}
              </span>{" "}
              hingga{" "}
              <span className="font-medium text-gray-900">
                {Math.min(
                  data.meta.current_page * data.meta.per_page,
                  data.meta.total,
                )}
              </span>{" "}
              dari{" "}
              <span className="font-medium text-gray-900">
                {data.meta.total}
              </span>{" "}
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

      {/* Modal Section */}
      <MadrasahFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={selectedData}
        isLoading={isSubmitting}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!itemToDelete}
        onOpenChange={(open) => !open && cancelDelete()}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Hapus Data</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus data{" "}
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
