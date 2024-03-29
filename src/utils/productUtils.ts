import * as Yup from "yup";
import { IProduct, IProductFilter } from "@interfaces/product.interface";

export const productSchema = () =>
  Yup.object().shape({
    order: Yup.string().required("Required!"),
    client: Yup.string().required("Required!"),
    status: Yup.string().required("Required!"),
    total: Yup.number().moreThan(0).required("Required!"),
    currency: Yup.string().required("Required!"),
    fundingMethod: Yup.string().required("Required!"),
  });

export const filterProducts = (
  products: IProduct[],
  filter: IProductFilter | null
) => {
  if (!filter) return products;
  return products.filter((product) => {
    return (
      (!filter.status || product.status.includes(filter.status)) &&
      (!filter.client || product.client.includes(filter.client)) &&
      (!filter.invoice || product.invoice.includes(filter.invoice)) &&
      (!filter.from || new Date(product.createdAt) >= new Date(filter.from)) &&
      (!filter.to || new Date(product.createdAt) <= new Date(filter.to))
    );
  });
};

export const paginateProducts = (
  products: IProduct[],
  page: number,
  productsPerPage: number
) => {
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  return products.slice(start, end);
};
