import type { ReactNode } from "react";

interface DirectoryEmptyStateProps {
  icon: ReactNode;
  title: string;
  message: string;
}

export function DirectoryEmptyState({
  icon,
  title,
  message,
}: DirectoryEmptyStateProps) {
  return (
    <div className="mt-12 text-center py-16 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
      <div className="flex justify-center mb-4 text-gray-300 [&>svg]:w-12 [&>svg]:h-12">
        {icon}
      </div>
      <h3 className="font-nunito font-bold text-lg text-text-primary">
        {title}
      </h3>
      <p className="font-roboto text-sm text-text-secondary mt-1">
        {message}
      </p>
    </div>
  );
}
