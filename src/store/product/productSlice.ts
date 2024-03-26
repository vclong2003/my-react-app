import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../../interfaces/product.interface";

const name = "productSlice";
const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export default productSlice;
