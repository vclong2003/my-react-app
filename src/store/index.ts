import { configureStore } from "@reduxjs/toolkit";
import dummySlice from "./dummySlice";

const store = configureStore({
  reducer: { [dummySlice.name]: dummySlice.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
