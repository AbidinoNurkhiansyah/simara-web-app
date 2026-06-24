interface DecorativeDotPatternProps {
  className?: string;
}

export function DecorativeDotPattern({ className = "" }: DecorativeDotPatternProps) {
  return (
    <div
      className={`opacity-20 pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, #305335 1.5px, transparent 0)",
        backgroundSize: "20px 20px",
        maskImage: "linear-gradient(to right, black 20%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, black 20%, transparent)",
      }}
    />
  );
}
