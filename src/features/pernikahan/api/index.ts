import axiosInstance from "../../../lib/axios";
import type { PernikahanRecord, PernikahanFormData } from "../types";

interface ApiResponse<T> {
  status: string;
  data: T;
  message?: string;
}

export const getPernikahans = async (jenis?: "pernikahan" | "isbat_nikah") => {
  const params = jenis ? { jenis } : {};
  const response = await axiosInstance.get<ApiResponse<PernikahanRecord[]>>("/pernikahans", { params });
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
