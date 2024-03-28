import { IProduct, IProductFilter } from "@interfaces/product.interface";

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
      (!filter.from || product.createdAt >= new Date(filter.from)) &&
      (!filter.to || product.createdAt <= new Date(filter.to))
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
