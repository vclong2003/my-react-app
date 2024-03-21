import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function RouteGuard() {
  const navigate = useNavigate();

  useEffect(() => {}, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
