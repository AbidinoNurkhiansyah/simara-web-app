import React from "react";
import { Plus, Search } from "lucide-react";
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
import { ProgramTable } from "./ProgramTable";
import { ProgramFormModal } from "./ProgramFormModal";
import { usePrograms } from "../hooks/usePrograms";

export const ProgramAdminPage: React.FC = () => {
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
  } = usePrograms();

  return (
    <div className="mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manajemen Data Program KUA
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Kelola program dan kegiatan KUA Karawang Barat
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

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-gray-100">
          <div className="relative w-full sm:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Cari judul program atau deskripsi..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="relative px-5 pb-5 pt-3">
          {isFetching && !isLoading && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20 overflow-hidden z-10">
              <div className="h-full bg-primary animate-pulse w-full"></div>
            </div>
          )}

          <ProgramTable
            data={data?.data || []}
            onEdit={handleOpenEditModal}
            onDelete={requestDelete}
            isLoading={isLoading}
          />
        </div>

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

      <ProgramFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={selectedData}
        isLoading={isSubmitting}
      />

      <AlertDialog
        open={!!itemToDelete}
        onOpenChange={(open) => !open && cancelDelete()}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Hapus Data</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus program{" "}
              <span className="font-semibold text-gray-900">
                {itemToDelete?.title}
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
