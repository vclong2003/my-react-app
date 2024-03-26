import { IProduct, IProductFilter } from "../interfaces/product.interface";

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

export const filterProducts = (
  products: IProduct[],
  filter: IProductFilter | null
) => {
  if (!filter) return products;
  return products.filter((product) => {
    return (
      product.status.includes(filter.status) &&
      product.client.includes(filter.client) &&
      product.invoice.includes(filter.invoice) &&
      (!filter.from || product.createdAt >= new Date(filter.from)) &&
      (!filter.to || product.createdAt <= new Date(filter.to))
    );
  });
};
