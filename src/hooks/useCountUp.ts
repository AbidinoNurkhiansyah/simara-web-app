import { useState, useEffect } from "react";

/**
 * Hook untuk animasi counting up seperti dashboard/youtube
 * @param end Angka target akhir
 * @param duration Durasi animasi dalam milidetik (default: 2000ms)
 * @returns Angka yang sedang dianimasikan
 */
export function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return; // Prevent unnecessary animation if 0
    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutExpo = (t: number) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(easeOutExpo(progress) * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}
