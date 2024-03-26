import {
  ICreateProductPayload,
  ICreateProductResponse,
  IDeleteProductPayload,
  IDeleteProductResponse,
  IGetAllProductsResponse,
  IGetProductByIdPayload,
  IGetProductByIdResponse,
  IUpdateProductPayload,
  IUpdateProductResponse,
} from "../../interfaces/product.interface";
import { axiosInstance } from "../../libs/axios";

const getAllProducts = async (): Promise<IGetAllProductsResponse> => {
  return await axiosInstance.get("/products");
};

const getProductById = async (
  payload: IGetProductByIdPayload
): Promise<IGetProductByIdResponse> => {
  const { id } = payload;
  return await axiosInstance.get(`/product/${id}`);
};

const createProduct = async (
  payload: ICreateProductPayload
): Promise<ICreateProductResponse> => {
  return await axiosInstance.post("/product", payload);
};

const updateProduct = async (
  payload: IUpdateProductPayload
): Promise<IUpdateProductResponse> => {
  return await axiosInstance.put(`/product`, payload);
};

const deleteProduct = async (
  payload: IDeleteProductPayload
): Promise<IDeleteProductResponse> => {
  return await axiosInstance.delete(`/product/${payload.id}`);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
