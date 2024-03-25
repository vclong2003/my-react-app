import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { convertDate } from "../../utils/dateUtils";
import { removeUserToken } from "../../utils/storageUtils";
import { setUser } from "../../store/authSlice";
import * as S from "./Profile.styled";

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    // For testing only
    removeUserToken();
    dispatch(setUser(null));
  };

  return <S.Container></S.Container>;
}
