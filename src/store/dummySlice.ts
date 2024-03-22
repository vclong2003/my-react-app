import { createSlice } from "@reduxjs/toolkit";

const name = "dummy";
const initialState = {
  data: [
    { id: 1, title: "Dummy Data A" },
    { id: 2, title: "Dummy Data B" },
    { id: 3, title: "Dummy Data C" },
  ],
  edited: false,
  willEdit: false,
};

const dummySlice = createSlice({
  name,
  initialState,
  reducers: {
    setEdited: (state, action) => {
      state.edited = action.payload;
    },
    setWillEdit: (state, action) => {
      state.willEdit = action.payload;
    },
    reset: () => initialState,
    updateData: (state, action) => {
      const { id, title } = action.payload;
      state.data = state.data.map((item) =>
        item.id === id ? { ...item, title } : item
      );
    },
  },
});

export default dummySlice;
export const { updateData, reset, setEdited, setWillEdit } = dummySlice.actions;
