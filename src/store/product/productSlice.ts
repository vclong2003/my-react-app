import { createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductState } from "../../interfaces/product.interface";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "./productActions";

const name = "productSlice";
const initialState: IProductState = {
  products: [],
  isLoading: false,
  isUpdating: false,
  isDeleting: false,
  error: null,
};

const productSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // States of getAllProducts-------------------------
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    // States of createProduct---------------------------
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    // States of updateProduct---------------------------
    builder.addCase(updateProduct.pending, (state) => {
      state.isUpdating = true;
      state.error = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isUpdating = false;
      const updatedProduct: IProduct = action.payload;
      state.products = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.payload as string;
    });
    // States of deleteProduct---------------------------
    builder.addCase(deleteProduct.pending, (state) => {
      state.isDeleting = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isDeleting = false;
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.payload as string;
    });
  },
});

export default productSlice;
