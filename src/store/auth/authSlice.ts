import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "@interfaces/auth.interface";
import { getCurrentUser, login, register } from "./authActions";
import { saveUserToken } from "@utils/storageUtils";

const name = "authSlice";
const initialState: IAuthState = {
  user: null,
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
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      saveUserToken(action.payload.token);
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      saveUserToken(action.payload.token);
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice;
export const { setUser } = authSlice.actions;
