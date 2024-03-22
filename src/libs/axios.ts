import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { getUserToken } from "../utils/storageUtils";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getUserToken();
  console.log("Token", token);
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
