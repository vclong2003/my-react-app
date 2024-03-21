import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth.interface";

export const name = "authSlice";
const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export default authSlice;
