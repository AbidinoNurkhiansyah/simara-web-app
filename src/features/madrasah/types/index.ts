export interface Madrasah {
  id: number;
  name: string;
  level: string;
  address: string;
  status: string;
  details?: string[];
  mapEmbed?: string;
  image?: string;
  icon?: string;
  created_at?: string;
  updated_at?: string;
}

export interface MadrasahFormData {
  name: string;
  level: string;
  address: string;
  status: string;
  details: string;
  map_embed: string;
  image: File | string | null;
}
