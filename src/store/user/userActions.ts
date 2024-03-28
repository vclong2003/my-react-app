import {
  ILoginPayload,
  IRegisterPayload,
  IUpdateAvatarPayload,
} from "@interfaces/user.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "@services/api/user";

export const login = createAsyncThunk(
  "userSlice/login",
  async (payload: ILoginPayload) => {
    const response = await userService.login(payload);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "userSlice/register",
  async (payload: IRegisterPayload) => {
    const response = await userService.register(payload);
    return response.data;
  }
);

export const getCurrentUser = createAsyncThunk(
  "userSlice/getCurrentUser",
  async () => {
    const response = await userService.getCurrentUser();
    return response.data;
  }
);

export const updateAvatar = createAsyncThunk(
  "userSlice/updateAvatar",
  async (payload: IUpdateAvatarPayload) => {
    await userService.updateAvatar(payload);
    const getCurrentUserResponse = await userService.getCurrentUser();
    return getCurrentUserResponse.data;
  }
);
