import {
  IGetCurrentUserResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
  IUpdateAvatarPayload,
} from "@interfaces/user.interface";
import { API_BASE_URL } from "@config/api";
import { axiosInstance } from "@libs/axios";

const login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
  return await axiosInstance.post(API_BASE_URL + "/auth/login", payload);
};

const register = async (
  payload: IRegisterPayload
): Promise<IRegisterResponse> => {
  return await axiosInstance.post(API_BASE_URL + "/auth/register", payload);
};

const getCurrentUser = async (): Promise<IGetCurrentUserResponse> => {
  return await axiosInstance.get("/user");
};

const updateAvatar = async (payload: IUpdateAvatarPayload): Promise<void> => {
  const { file } = payload;
  const formData = new FormData();
  formData.append("file", file);
  return await axiosInstance.put("/user", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default { login, register, getCurrentUser, updateAvatar };
