import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAuthState,
  ILoginPayload,
  ILoginResponse,
} from "../interfaces/auth.interface";
import { axiosInstance } from "../libs/axios";
import { API_ENDPOINTS } from "../config/api";
import { saveUserCookie } from "../utils/auth.utils";

export const name = "authSlice";
const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  `${name}/login`,
  async (payload: ILoginPayload) => {
    const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, payload);
    return response.data as ILoginResponse;
  }
);

const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      const { user, user_cookie, errors, success } = action.payload;

      if (success) {
        state.user = user;
        saveUserCookie(user_cookie);
        return;
      }

      state.error = errors ? errors.email : "Please check your credentials!";
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong on our end!";
    });
  },
});

export default authSlice;
