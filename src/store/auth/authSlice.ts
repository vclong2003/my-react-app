import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../interfaces/auth.interface";
import { getCurrentUser, login, register } from "./authActions";
import { saveUserToken } from "../../utils/storageUtils";

const name = "authSlice";
const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // States of login-----------------------------------
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      saveUserToken(action.payload.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    // States of register-------------------------------
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      saveUserToken(action.payload.token);
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    // States of getCurrentUser---------------------------
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice;
export const { setUser } = authSlice.actions;
