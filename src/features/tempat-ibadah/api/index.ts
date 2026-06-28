import axiosInstance from "../../../lib/axios";
import type { TempatIbadah, TempatIbadahFormData } from "../types";

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

export const getTempatIbadahsPaginated = async (page = 1, perPage = 10, search = "", type = "all") => {
  const response = await axiosInstance.get<PaginatedResponse<TempatIbadah>>(`/tempat-ibadahs`, {
    params: { page, per_page: perPage, search: search || undefined, type: type !== "all" ? type : undefined }
  });
  return response.data;
}

export const getTempatIbadahs = async () => {
  const response = await axiosInstance.get<ApiResponse<TempatIbadah[]>>("/tempat-ibadahs", {
    params: { all: 'true' }
  });
  return response.data.data;
};

export const getTempatIbadahById = async (id: number) => {
  const response = await axiosInstance.get<ApiResponse<TempatIbadah>>(`/tempat-ibadahs/${id}`);
  return response.data.data;
};

export const createTempatIbadah = async (data: TempatIbadahFormData) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('type', data.type);
  formData.append('address', data.address);
  formData.append('details', data.details);
  if (data.map_embed) {
    formData.append('map_embed', data.map_embed);
  }
  if (data.image && data.image instanceof File) {
    formData.append('image', data.image);
  }

  const response = await axiosInstance.post<ApiResponse<TempatIbadah>>("/tempat-ibadahs", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data.data;
};

export const updateTempatIbadah = async (id: number, data: TempatIbadahFormData) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('type', data.type);
  formData.append('address', data.address);
  formData.append('details', data.details);
  if (data.map_embed) {
    formData.append('map_embed', data.map_embed);
  }
  if (data.image && data.image instanceof File) {
    formData.append('image', data.image);
  }
  formData.append('_method', 'PUT'); // Laravel form method spoofing for multipart/form-data

  const response = await axiosInstance.post<ApiResponse<TempatIbadah>>(`/tempat-ibadahs/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data.data;
};

export const deleteTempatIbadah = async (id: number) => {
  const response = await axiosInstance.delete<ApiResponse<null>>(`/tempat-ibadahs/${id}`);
  return response.data;
};
