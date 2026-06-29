import axiosInstance from "../../../lib/axios";
import type { Wakaf } from "../types";
import type { WakafFormValues } from "../hooks/useWakafForm";

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

export const getWakafsPaginated = async (
  page = 1,
  perPage = 10,
  search = "",
  jenisProperti = "all"
) => {
  const response = await axiosInstance.get<PaginatedResponse<Wakaf>>(`/wakafs`, {
    params: {
      page,
      per_page: perPage,
      search: search || undefined,
      jenis_properti:
        jenisProperti !== "all" ? jenisProperti : undefined,
    },
  });
  return response.data;
};

export const getWakafs = async () => {
  const response = await axiosInstance.get<ApiResponse<Wakaf[]>>("/wakafs", {
    params: { all: "true" },
  });
  return response.data.data;
};

export const getWakafById = async (id: number) => {
  const response = await axiosInstance.get<ApiResponse<Wakaf>>(`/wakafs/${id}`);
  return response.data.data;
};

const buildFormData = (data: WakafFormValues, isUpdate = false): FormData => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("jenis_properti", data.jenis_properti);
  formData.append("luas", data.luas);
  formData.append("nadzir", data.nadzir);
  formData.append("address", data.address);
  if (data.map_embed) {
    formData.append("map_embed", data.map_embed);
  }
  if (data.image && data.image instanceof File) {
    formData.append("image", data.image);
  }
  if (isUpdate) {
    formData.append("_method", "PUT"); // Laravel form method spoofing
  }
  return formData;
};

export const createWakaf = async (data: WakafFormValues) => {
  const response = await axiosInstance.post<ApiResponse<Wakaf>>(
    "/wakafs",
    buildFormData(data),
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data.data;
};

export const updateWakaf = async (id: number, data: WakafFormValues) => {
  const response = await axiosInstance.post<ApiResponse<Wakaf>>(
    `/wakafs/${id}`,
    buildFormData(data, true),
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data.data;
};

export const deleteWakaf = async (id: number) => {
  const response = await axiosInstance.delete<ApiResponse<null>>(`/wakafs/${id}`);
  return response.data;
};
