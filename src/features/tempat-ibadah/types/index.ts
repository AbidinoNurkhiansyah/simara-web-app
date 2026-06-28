export interface TempatIbadah {
  id: number;
  name: string;
  type: string;
  address: string;
  details: string[];
  map_embed?: string;
  image: string;
  icon?: string;
  created_at?: string;
  updated_at?: string;
}

export interface TempatIbadahFormData {
  name: string;
  type: string;
  address: string;
  details: string;
  map_embed: string;
  image: File | string | null;
}
