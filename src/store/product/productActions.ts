import { createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/api/product";
import { IGetProductByIdPayload } from "../../interfaces/product.interface";

export const getAllProducts = createAsyncThunk(
  "productSlice/getAllProducts",
  async () => {
    const response = await productService.getAllProducts();
    return response.data;
  }
);

export const getProductById = createAsyncThunk(
  "productSlice/getProductById",
  async (payload: IGetProductByIdPayload) => {
    const response = await productService.getProductById(payload);
    return response.data;
  }
);
