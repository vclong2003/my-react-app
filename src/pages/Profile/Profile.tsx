import * as S from "./Profile.styled";
import InfoItem from "./InfoItem/InfoItem";
import Popup from "@components/Popup/Popup";
import ImageCropper from "./ImageCropper/ImageCropper";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "@store/user/userSlice";
import { removeUserToken } from "@utils/storageUtils";
import { imageUrl } from "@utils/dataUtils";
import { convertDate } from "@utils/dateUtils";

import { AppDispatch, RootState } from "@store/index";

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.userSlice);
  const dispatch = useDispatch<AppDispatch>();

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const onUpdateAvatarClick = () => setIsAvatarPopupOpen(true);

  const onCloseAvatarPopup = () => setIsAvatarPopupOpen(false);

  const onLogout = () => {
    removeUserToken();
    dispatch(setUser(null));
  };

  return (
    <S.Container>
      <Popup onClose={onCloseAvatarPopup} show={isAvatarPopupOpen}>
        {isAvatarPopupOpen ? (
          <ImageCropper
            initialImageUrl={imageUrl(user?.avatar || "")}
            onClose={onCloseAvatarPopup}
          />
        ) : null}
      </Popup>
      <S.Title>Your profile</S.Title>
      <S.LeftContainer>
        <InfoItem label="Id" value={user?.id.toString() || ""} />
        <InfoItem label="Email" value={user?.email || ""} />
        <InfoItem label="Name" value={user?.name || ""} />
        <InfoItem label="Gender" value={user?.gender || ""} />
        <InfoItem label="Region" value={user?.region.toString() || ""} />
        <InfoItem label="State" value={user?.state.toString() || ""} />
        <InfoItem
          label="Created at"
          value={(user?.createdAt && convertDate(user.createdAt)) || ""}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Avatar
          imageUrl={(user?.avatar && imageUrl(user.avatar)) || null}
          isUpdateable={true}
          onUpdateClick={onUpdateAvatarClick}
        />
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.RightContainer>
    </S.Container>
  );
}
