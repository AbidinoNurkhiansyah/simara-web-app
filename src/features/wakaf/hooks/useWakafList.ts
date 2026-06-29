import { useState, useEffect, useRef } from "react";
import type { Wakaf } from "../types";

export function useWakafList(
  data: Wakaf[],
  itemsPerPage: number = 12
) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const prevPage = useRef(currentPage);

  useEffect(() => {
    // Reset page to 1 whenever data (search/filter results) changes
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    // Only scroll if the page actually changed (prevents scrolling on Strict Mode remounts)
    if (prevPage.current !== currentPage) {
      prevPage.current = currentPage;

      // Smooth scroll to the top of the section when page changes
      const offset = 80; // Account for any fixed headers if present
      if (sectionRef.current) {
        const top =
          sectionRef.current.getBoundingClientRect().top +
          window.scrollY -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return {
    currentPage,
    setCurrentPage,
    sectionRef,
    totalPages,
    currentData,
  };
}
