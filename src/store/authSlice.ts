import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth.interface";

const name = "authSlice";
const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default authSlice;
export const { setUser, setLoading, setError } = authSlice.actions;
