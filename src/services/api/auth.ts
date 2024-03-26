import {
  IGetCurrentUserResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "../../interfaces/auth.interface";
import { axiosInstance } from "../../libs/axios";

export const login = async (
  payload: ILoginPayload
): Promise<ILoginResponse> => {
  return await axiosInstance.post<never, ILoginResponse>(
    "/auth/login",
    payload
  );
};

export const register = async (
  payload: IRegisterPayload
): Promise<IRegisterResponse> => {
  return await axiosInstance.post<never, IRegisterResponse>(
    "/auth/register",
    payload
  );
};

export const getCurrentUser = async (): Promise<IGetCurrentUserResponse> => {
  return await axiosInstance.get<never, IGetCurrentUserResponse>("/user");
};
