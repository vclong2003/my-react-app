import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { RootState } from "../../store";

export default function RouteGuard() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
