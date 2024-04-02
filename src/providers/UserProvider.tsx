import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/index";
import { getCurrentUser } from "@store/user/userActions";

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
