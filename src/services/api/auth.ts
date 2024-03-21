import {
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "../../interfaces/auth.interface";
import { axiosInstance } from "../../libs/axios";

export const login = async (
  payload: ILoginPayload
): Promise<ILoginResponse> => {
  const response = await axiosInstance.post("/auth/login", payload);
  return response.data as ILoginResponse;
};

export const Register = async (
  payload: IRegisterPayload
): Promise<IRegisterResponse> => {
  const response = await axiosInstance.post("/auth/register", payload);
  return response.data as IRegisterResponse;
};
