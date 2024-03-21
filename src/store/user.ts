import { createSlice } from "@reduxjs/toolkit";

const name = "user";
const initialState = {
  user: null,
  loading: false,
};

const user = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default user;
