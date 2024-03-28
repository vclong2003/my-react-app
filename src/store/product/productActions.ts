import { createAsyncThunk } from "@reduxjs/toolkit";
import productService from "@services/api/product";
import {
  ICreateProductPayload,
  IDeleteProductPayload,
  IUpdateProductPayload,
} from "@interfaces/product.interface";
import { v4 as uuidv4 } from "uuid";

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
    const invoice = uuidv4();
    await productService.createProduct({ ...payload, invoice });
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
