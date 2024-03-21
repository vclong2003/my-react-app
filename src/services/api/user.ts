import { axiosInstance } from "../../libs/axios";

export const setCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};
