import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../interfaces/auth.interface";

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
});

export default authSlice;
export const { setUser } = authSlice.actions;
