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
};

const productSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // States of getAllProducts-------------------------
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    // States of createProduct---------------------------
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    // States of updateProduct---------------------------
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProduct: IProduct = action.payload;
      state.products = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    });

    // States of deleteProduct---------------------------
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    });
  },
});

export default productSlice;
