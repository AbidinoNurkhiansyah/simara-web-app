import { useState, useEffect, useRef } from "react";
import { getProgramsPaginated } from "../../program/api";
import type { ProgramItem } from "../../program/types";

export function useProgramKerja() {
  const [data, setData] = useState<ProgramItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const result = await getProgramsPaginated(1, 10); // Fetch latest 10 programs
        if (result && result.data) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  useEffect(() => {
    if (data.length <= 1) return;

    let interval: ReturnType<typeof setInterval>;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;

          if (container.scrollLeft >= maxScrollLeft - 10) {
            // Reached the end, scroll back to start
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            // Scroll by one item width approximately
            const firstChild = container.firstElementChild as HTMLElement;
            const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 300; // 16 is gap-4 (rem) or so. md:gap-6 is 24px
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 3500);
    };

    startAutoScroll();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("mouseenter", () => clearInterval(interval));
      container.addEventListener("mouseleave", startAutoScroll);
      container.addEventListener("touchstart", () => clearInterval(interval));
      container.addEventListener("touchend", startAutoScroll);
    }

    return () => {
      clearInterval(interval);
      if (container) {
        container.removeEventListener("mouseenter", () =>
          clearInterval(interval),
        );
        container.removeEventListener("mouseleave", startAutoScroll);
        container.removeEventListener("touchstart", () =>
          clearInterval(interval),
        );
        container.removeEventListener("touchend", startAutoScroll);
      }
    };
  }, [data.length]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 300;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return {
    data,
    isLoading,
    scrollContainerRef,
    scrollLeft,
    scrollRight,
  };
}
