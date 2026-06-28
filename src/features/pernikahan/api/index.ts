import axiosInstance from "../../../lib/axios";
import type { PernikahanRecord, PernikahanFormData } from "../types";

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

export const getPernikahansPaginated = async (page = 1, perPage = 10, search = "", tahun = "all") => {
  const response = await axiosInstance.get<PaginatedResponse<PernikahanRecord>>(`/pernikahans`, {
    params: { page, per_page: perPage, search: search || undefined, tahun: tahun !== "all" ? tahun : undefined }
  });
  return response.data;
};

export const getPernikahans = async () => {
  const response = await axiosInstance.get<ApiResponse<PernikahanRecord[]>>("/pernikahans", {
    params: { all: 'true' }
  });
  return response.data.data;
};

export const createPernikahan = async (data: PernikahanFormData) => {
  const response = await axiosInstance.post<ApiResponse<PernikahanRecord>>("/pernikahans", data);
  return response.data.data;
};

export const updatePernikahan = async (id: number, data: PernikahanFormData) => {
  const response = await axiosInstance.put<ApiResponse<PernikahanRecord>>(`/pernikahans/${id}`, data);
  return response.data.data;
};

export const deletePernikahan = async (id: number) => {
  const response = await axiosInstance.delete<ApiResponse<null>>(`/pernikahans/${id}`);
  return response.data;
};
