import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { convertDate } from "../../utils/dateUtils";
import { removeUserToken } from "../../utils/storageUtils";
import { setUser } from "../../store/authSlice";
import * as S from "./Profile.styled";
import InfoItem from "./InfoItem/InfoItem";
import { imageUrl } from "../../utils/dataUtils";

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    removeUserToken();
    dispatch(setUser(null));
  };

  return (
    <S.Container>
      <S.LeftContainer>
        <InfoItem label="Name" value={user?.name || ""} />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Avatar imageUrl={user?.avatar && imageUrl(user.avatar)} />
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.RightContainer>
    </S.Container>
  );
}
