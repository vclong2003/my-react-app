import axios from "axios";
import { API_BASE_URL } from "@config/api";
import { getUserToken } from "@utils/storageUtils";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getUserToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      (error?.response?.data?.message?.details &&
        error?.response?.data?.message?.details[0]?.message) ||
      error?.response?.data?.message ||
      "Something went wrong!";

    throw new Error(message);
  }
);
