import { ReactNode, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store";

import { getCurrentUser } from "../services/api/auth";
import { setUser } from "../store/authSlice";

interface IUserProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IUserProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const fetchUser = useCallback(async () => {
    try {
      const user = await getCurrentUser();
      dispatch(setUser(user));
    } catch (error) {
      console.error("Error fetching user", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return children;
}
