import * as S from "./Avatar.styled";

import DummyAvatar from "@assets/images/avatar_placeholder.png";
import UpdateIcon from "@assets/icons/edit.png";

interface IAvatarProps extends JSX.IntrinsicAttributes {
  imageUrl?: string | null;
  isUpdateable?: boolean;
  onUpdateClick?: () => void;
}

export default function Avatar({
  imageUrl,
  isUpdateable,
  onUpdateClick,
  ...props
}: IAvatarProps) {
  return (
    <S.Avatar $isUpdatable={isUpdateable} onClick={onUpdateClick}>
      <S.AvatarImage {...props} src={imageUrl || DummyAvatar} alt="Avatar" />
      <S.AvatarUpdateIcon src={UpdateIcon} alt="Update avatar" />
    </S.Avatar>
  );
}
