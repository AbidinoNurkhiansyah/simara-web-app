// Public portal types
export interface WakafRequirement {
  title: string;
  image: string;
}

// Admin types
export interface Wakaf {
  id: number;
  name: string;
  jenis_properti: "Tanah" | "Bangunan";
  luas: string;
  nadzir: string;
  address: string;
  map_embed?: string;
  image: string;
  created_at?: string;
  updated_at?: string;
}

export interface WakafFormData {
  name: string;
  jenis_properti: "Tanah" | "Bangunan";
  luas: string;
  nadzir: string;
  address: string;
  map_embed: string;
  image: File | string | null;
}
