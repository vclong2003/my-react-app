import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: { [userSlice.name]: userSlice.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
