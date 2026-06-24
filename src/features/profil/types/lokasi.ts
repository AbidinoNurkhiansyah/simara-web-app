import type { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
}

export interface OperationalHours {
  title: string;
  schedule: string[];
}
