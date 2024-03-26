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
    console.log(response);
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "productSlice/createProduct",
  async (payload: ICreateProductPayload) => {
    await productService.createProduct(payload);
    const getAllProductsResponse = await productService.getAllProducts();
    return getAllProductsResponse.data;
  }
);

export const updateProduct = createAsyncThunk(
  "productSlice/updateProduct",
  async (payload: IUpdateProductPayload) => {
    await productService.updateProduct(payload);
    const { id } = payload;
    const getProductByIdResponse = await productService.getProductById({ id });
    return getProductByIdResponse.data;
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
