import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteGuard from "../components/RouteGuard/RouteGuard";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>

      <Route element={<RouteGuard />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
