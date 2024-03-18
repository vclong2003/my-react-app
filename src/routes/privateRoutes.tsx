import { IRoute } from "../interfaces/common.interface";
import Home from "../pages/Home/Home";

export const privateRoutes: IRoute[] = [
  {
    path: "/",
    component: <Home />,
  },
];
