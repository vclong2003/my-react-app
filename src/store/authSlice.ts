import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthState, ILoginPayload } from "../interfaces/auth.interface";
import { axiosInstance } from "../libs/axios";
import { API_ENDPOINTS } from "../config/api";

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
    console.log(response.data);
  }
);

const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authSlice;
