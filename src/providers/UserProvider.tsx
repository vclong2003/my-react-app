import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { getCurrentUser } from "../services/api/auth";
import { setLoading, setUser } from "../store/authSlice";

interface IUserProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IUserProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getCurrentUser();
      dispatch(setUser(response.data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return children;
}
