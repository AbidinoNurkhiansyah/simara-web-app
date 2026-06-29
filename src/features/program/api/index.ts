import axiosInstance from "../../../lib/axios";
import type { ProgramItem, ProgramFormData } from "../types";

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

export const getProgramsPaginated = async (page = 1, perPage = 10, search = "") => {
  const response = await axiosInstance.get<PaginatedResponse<ProgramItem>>(`/programs`, {
    params: { page, per_page: perPage, search: search || undefined }
  });
  return response.data;
}

export const getPrograms = async () => {
  const response = await axiosInstance.get<ApiResponse<ProgramItem[]>>("/programs", {
    params: { all: 'true' }
  });
  return response.data.data;
};

export const getProgramById = async (id: number) => {
  const response = await axiosInstance.get<ApiResponse<ProgramItem>>(`/programs/${id}`);
  return response.data.data;
};

export const createProgram = async (data: ProgramFormData) => {
  const formData = new FormData();
  formData.append('title', data.title);
  if (data.tag) formData.append('tag', data.tag);
  formData.append('date', data.date);
  formData.append('desc', data.desc);
  
  if (data.image && data.image instanceof File) {
    formData.append('image', data.image);
  }

  const response = await axiosInstance.post<ApiResponse<ProgramItem>>("/programs", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data.data;
};

export const updateProgram = async (id: number, data: ProgramFormData) => {
  const formData = new FormData();
  formData.append('title', data.title);
  if (data.tag) formData.append('tag', data.tag);
  formData.append('date', data.date);
  formData.append('desc', data.desc);
  
  if (data.image && data.image instanceof File) {
    formData.append('image', data.image);
  }
  formData.append('_method', 'PUT');

  const response = await axiosInstance.post<ApiResponse<ProgramItem>>(`/programs/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data.data;
};

export const deleteProgram = async (id: number) => {
  const response = await axiosInstance.delete<ApiResponse<null>>(`/programs/${id}`);
  return response.data;
};
