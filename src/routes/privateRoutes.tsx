import { IRoute } from "../interfaces/common.interface";
import Product from "../pages/Product/Product";

export const privateRoutes: IRoute[] = [
  {
    path: "/",
    component: <Product />,
  },
];
