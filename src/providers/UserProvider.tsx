import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store";
import { getCurrentUser } from "../store/auth/authActions";

interface IUserProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IUserProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return children;
}
