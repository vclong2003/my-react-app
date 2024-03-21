import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserCookie } from "../../utils/authUtils";

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
