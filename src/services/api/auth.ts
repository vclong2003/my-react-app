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
  const response = await axiosInstance.post<never, ILoginResponse>(
    "/auth/login",
    payload
  );
  return response;
};

export const register = async (
  payload: IRegisterPayload
): Promise<IRegisterResponse> => {
  const response = await axiosInstance.post<never, IRegisterResponse>(
    "/auth/register",
    payload
  );
  return response;
};

export const getCurrentUser = async (): Promise<IGetCurrentUserResponse> => {
  const response = await axiosInstance.get<never, IGetCurrentUserResponse>(
    "/user"
  );
  return response;
};
