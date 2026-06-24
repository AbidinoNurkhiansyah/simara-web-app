import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface DirectoryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function DirectoryPagination({
  currentPage,
  totalPages,
  onPageChange,
}: DirectoryPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <Pagination className="justify-center sm:justify-start mt-10">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            text="" // Remove default text to just keep icon
            className={`w-10 h-10 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer p-0 justify-center ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNum = idx + 1;
          const isActive = currentPage === pageNum;
          
          return (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(pageNum);
                }}
                isActive={isActive}
                className={`w-10 h-10 p-0 font-nunito font-bold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md hover:bg-primary/90 hover:text-white border-transparent"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 border-transparent"
                }`}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            text="" // Remove default text to just keep icon
            className={`w-10 h-10 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer p-0 justify-center ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
