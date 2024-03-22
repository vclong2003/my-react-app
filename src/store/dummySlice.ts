import { createSlice } from "@reduxjs/toolkit";

const name = "dummy";
const initialState = {
  data: [
    { title: "Dummy Data A" },
    { title: "Dummy Data B" },
    { title: "Dummy Data C" },
  ],
};

const dummySlice = createSlice({
  name,
  initialState,
  reducers: {
    reset: () => initialState,
    addData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export default dummySlice;
