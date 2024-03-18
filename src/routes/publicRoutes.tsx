import React from "react";
import { IRoute } from "../interfaces/common.interface";
import Login from "../pages/Login/Login";

export const publicRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
];
