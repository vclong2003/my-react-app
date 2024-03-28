import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "@interfaces/user.interface";
import { getCurrentUser, login, register, updateAvatar } from "./userActions";
import { saveUserToken } from "@utils/storageUtils";

const name = "userSlice";
const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
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
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice;
export const { setUser } = userSlice.actions;
