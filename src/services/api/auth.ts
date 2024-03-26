import {
  IGetCurrentUserResponse,
  ILoginPayload,
  ILoginResponse,
  IRegisterPayload,
  IRegisterResponse,
} from "../../interfaces/auth.interface";
import { axiosInstance } from "../../libs/axios";

const login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
  return await axiosInstance.post("/auth/login", payload);
};

const register = async (
  payload: IRegisterPayload
): Promise<IRegisterResponse> => {
  return await axiosInstance.post("/auth/register", payload);
};

const getCurrentUser = async (): Promise<IGetCurrentUserResponse> => {
  return await axiosInstance.get("/user");
};

export default { login, register, getCurrentUser };
