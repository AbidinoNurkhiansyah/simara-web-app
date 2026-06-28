import axiosInstance from "../../../lib/axios";
import type { Madrasah, MadrasahFormData } from "../types";

interface ApiResponse<T> {
  status: string;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  status: string;
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export const getMadrasahsPaginated = async (page = 1, perPage = 10, search = "", level = "all") => {
  const response = await axiosInstance.get<PaginatedResponse<Madrasah>>(`/madrasahs`, {
    params: { page, per_page: perPage, search: search || undefined, level: level !== "all" ? level : undefined }
  });
  return response.data;
}

export const getMadrasahs = async () => {
  const response = await axiosInstance.get<ApiResponse<Madrasah[]>>("/madrasahs", {
    params: { all: 'true' }
  });
  return response.data.data;
};

export const getMadrasahById = async (id: number) => {
  const response = await axiosInstance.get<ApiResponse<Madrasah>>(`/madrasahs/${id}`);
  return response.data.data;
};

export const createMadrasah = async (data: MadrasahFormData) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('level', data.level);
  formData.append('address', data.address);
  formData.append('status', data.status);
  formData.append('details', data.details);
  if (data.map_embed) {
    formData.append('map_embed', data.map_embed);
  }
  if (data.image && data.image instanceof File) {
    formData.append('image', data.image);
  }

  const response = await axiosInstance.post<ApiResponse<Madrasah>>("/madrasahs", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data.data;
};

export const updateMadrasah = async (id: number, data: MadrasahFormData) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('level', data.level);
  formData.append('address', data.address);
  formData.append('status', data.status);
  formData.append('details', data.details);
  if (data.map_embed) {
    formData.append('map_embed', data.map_embed);
  }
  if (data.image && data.image instanceof File) {
    formData.append('image', data.image);
  }
  formData.append('_method', 'PUT');

  const response = await axiosInstance.post<ApiResponse<Madrasah>>(`/madrasahs/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data.data;
};

export const deleteMadrasah = async (id: number) => {
  const response = await axiosInstance.delete<ApiResponse<null>>(`/madrasahs/${id}`);
  return response.data;
};
