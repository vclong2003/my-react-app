import axios from "axios";
import {
  IGetCurrentUserResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "../../interfaces/auth.interface";
import { API_BASE_URL } from "../../config/api";
import { axiosInstance } from "../../libs/axios";

export const login = async (
  payload: ILoginPayload
): Promise<ILoginResponse> => {
  const response = await axios.post(API_BASE_URL + "/auth/login", payload);
  return response.data as ILoginResponse;
};

export const register = async (
  payload: IRegisterPayload
): Promise<IRegisterResponse> => {
  const response = await axios.post(API_BASE_URL + "/auth/register", payload);
  return response.data as IRegisterResponse;
};

export const getCurrentUser = async (): Promise<IGetCurrentUserResponse> => {
  const response = await axiosInstance.get("/user");
  return response.data as IGetCurrentUserResponse;
};
