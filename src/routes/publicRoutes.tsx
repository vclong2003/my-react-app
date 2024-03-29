import { IRoute } from "@interfaces/common.interface";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";

export const publicRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
];
