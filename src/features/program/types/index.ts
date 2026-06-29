export interface ProgramItem {
  id: number;
  title: string;
  tag: string | null;
  date: string;
  desc: string;
  image: string;
}

export interface ProgramFormData {
  title: string;
  tag: string;
  date: string;
  desc: string;
  image?: File | string;
}
