import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserCookie } from "../../utils/auth.utils";

export default function RouteGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserCookie()) navigate("/login");
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
