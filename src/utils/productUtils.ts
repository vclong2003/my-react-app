import { IProduct } from "../interfaces/product.interface";

export const getProductTableData = (product: IProduct) => {
  return [
    product.status,
    product.createdAt.toString(),
    product.client,
    product.currency,
    product.total.toString(),
    product.invoice,
  ];
};
