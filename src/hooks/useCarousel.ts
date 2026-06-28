import { useState, useEffect } from "react";

/**
 * Hook untuk logika carousel slide
 * @param length Jumlah total item dalam carousel
 * @param interval Durasi auto-play dalam milidetik (default 6000ms)
 */
export function useCarousel(length: number, interval: number = 6000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (length <= 1) return; // Tidak perlu auto-play jika item <= 1
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [length, interval]);

  const nextSlide = () => {
    if (length > 0) setCurrentSlide((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    if (length > 0) setCurrentSlide((prev) => (prev - 1 + length) % length);
  };

  return {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide,
  };
}
