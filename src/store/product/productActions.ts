import { createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/api/product";
import {
  ICreateProductPayload,
  IDeleteProductPayload,
  IUpdateProductPayload,
} from "../../interfaces/product.interface";

export const getAllProducts = createAsyncThunk(
  "productSlice/getAllProducts",
  async () => {
    const response = await productService.getAllProducts();
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "productSlice/createProduct",
  async (payload: ICreateProductPayload) => {
    const response = await productService.createProduct(payload);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "productSlice/updateProduct",
  async (payload: IUpdateProductPayload) => {
    const response = await productService.updateProduct(payload);
    const { id } = payload;
    return { response, id };
  }
);

export const deleteProduct = createAsyncThunk(
  "productSlice/deleteProduct",
  async (payload: IDeleteProductPayload) => {
    const response = await productService.deleteProduct(payload);
    const { id } = payload;
    return { response, id };
  }
);
