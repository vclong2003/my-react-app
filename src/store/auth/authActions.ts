import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ILoginPayload,
  IRegisterPayload,
} from "../../interfaces/auth.interface";
import authService from "../../services/api/auth";

export const login = createAsyncThunk(
  "authSlice/login",
  async (payload: ILoginPayload) => {
    const response = await authService.login(payload);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "authSlice/register",
  async (payload: IRegisterPayload) => {
    const response = await authService.register(payload);
    return response.data;
  }
);

export const getCurrentUser = createAsyncThunk(
  "authSlice/getCurrentUser",
  async () => {
    const response = await authService.getCurrentUser();
    return response.data;
  }
);
